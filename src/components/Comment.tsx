import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/user';
import {
  PostQuery,
  useCommentsSubscription,
  useInsertUpvoteMutation,
} from '../generated/graphql';

export const Comment = React.memo<{
  comment: NonNullable<
    NonNullable<PostQuery>['post_by_pk']
  >['comments'][number];
}>(({ comment }) => {
  const user = useUser();
  const { data, error } = useCommentsSubscription({
    variables: {
      commentId: comment.id,
    },
  });

  const [animateUpvote, setAnimateUpvote] = useState(false);

  useEffect(() => {
    setAnimateUpvote(true);
    setTimeout(() => {
      setAnimateUpvote(false);
    }, 1000);
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

  console.log('data ===', data?.comment_by_pk?.id);
  return (
    <div className="mt-8 flex first:mt-0 last:mb-2">
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src={comment.user.avatar}
        alt="current
        user avatar"
      />
      <div className="ml-3 mt-1 flex flex-col">
        <div className="flex h-4">
          <span className="text-sm font-semibold leading-3">
            {comment.user.firstname} {comment.user.lastname}
          </span>
          <span className="mx-1 text-xs leading-3 text-gray-500">・</span>
          <span className="text-xs leading-3 text-gray-500" title="">
            {comment.created_at}
          </span>
        </div>
        <div className="mt-1 text-sm leading-5">{comment.comment}</div>
        <div className="mt-3.5 flex text-xs font-semibold text-gray-500">
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
          <div className="reply ml-7 hover:cursor-pointer">Reply</div>
        </div>
      </div>
    </div>
  );
});

Comment.displayName = 'Comment';
