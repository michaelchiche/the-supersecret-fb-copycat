import classnames from 'classnames';
import { uniqBy } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '../contexts/user';
import {
  PostQuery,
  useCommentsSubscription,
  useInsertUpvoteMutation,
} from '../generated/graphql';
import { formatRelativeTime } from '../utils/formatRelativeTime';
import { Input } from './Input';

export const Comment = React.memo<{
  comment:
    | NonNullable<NonNullable<PostQuery>['post_by_pk']>['comments'][number]
    | NonNullable<
        NonNullable<PostQuery>['post_by_pk']
      >['comments'][number]['replies'][number];
  isReply?: boolean;
}>(({ comment, isReply = false }) => {
  const user = useUser();
  const { data, error } = useCommentsSubscription({
    variables: {
      commentId: comment.id,
    },
  });

  let { current: previousUpvote } = useRef<number>();
  const [animateUpvote, setAnimateUpvote] = useState(false);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (
      data?.comment_by_pk?.upvotes.aggregate?.count &&
      previousUpvote !== undefined &&
      data?.comment_by_pk?.upvotes.aggregate?.count !== previousUpvote
    ) {
      setAnimateUpvote(true);
      setTimeout(() => {
        setAnimateUpvote(false);
      }, 1000);
    }
    previousUpvote = data?.comment_by_pk?.upvotes.aggregate?.count;
  }, [data?.comment_by_pk?.upvotes.aggregate?.count]);

  if (error) {
    console.error('graphql error', error);
  }

  const [upvote] = useInsertUpvoteMutation({
    variables: {
      upvote: {
        upvoter_id: user?.id,
        upvoted_comment_id: comment.id,
      },
    },
  });

  const replies = uniqBy(
    [
      ...(data?.comment_by_pk?.replies || []),
      ...(('replies' in comment && comment.replies) || []),
    ],
    'id',
  );

  return (
    <div className="mt-8 flex w-full flex-grow first:mt-0 last:mb-2">
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src={comment.user.avatar}
        alt="current
        user avatar"
      />
      <div className="ml-3 mt-1 flex w-full flex-col">
        <div className="flex h-4">
          <span className="text-sm font-semibold leading-3">
            {comment.user.firstname} {comment.user.lastname}
          </span>
          <span className="mx-1 text-xs leading-3 text-gray-500">・</span>
          <span className="text-xs leading-3 text-gray-500" title="">
            {formatRelativeTime(new Date(comment.created_at))}
          </span>
        </div>
        <div className="mt-1 text-sm leading-5">{comment.comment}</div>
        <div
          className={classnames(
            'mt-3.5 flex text-xs font-semibold text-gray-500',
            replies.length && 'mb-6',
          )}
        >
          <div
            data-upvote-count={
              comment.upvotes.aggregate?.count ||
              data?.comment_by_pk?.upvotes.aggregate?.count
            }
            className="upvote hover:cursor-pointer"
            onClick={() =>
              upvote().catch(e => {
                console.error(e);
              })
            }
          >
            <span
              className={classnames(
                'inline-block',
                animateUpvote && 'animate-ping',
              )}
            >
              ▲
            </span>
            <span className="ml-2">Upvote</span>
          </div>
          {!isReply && (
            <div
              className="reply ml-7 hover:cursor-pointer"
              onClick={() => setShowInput(true)}
            >
              Reply
            </div>
          )}
        </div>
        {showInput && (
          <Input commentId={comment.id} onSubmit={() => setShowInput(false)} />
        )}
        {!isReply && (
          <div>
            {replies.map(comment => {
              return <Comment key={comment.id} comment={comment} isReply />;
            })}
          </div>
        )}
      </div>
    </div>
  );
});

Comment.displayName = 'Comment';
