import React, { FC } from 'react';
import { PostQuery } from '../generated/graphql';

export const Comment: FC<{
  comment: NonNullable<
    NonNullable<PostQuery>['post_by_pk']
  >['comments'][number];
}> = ({ comment }) => {
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
          <div className="upvote hover:cursor-pointer">
            <span>▲</span>
            <span className="ml-2">Upvote</span>
          </div>
          <div className="reply ml-7 hover:cursor-pointer">Reply</div>
        </div>
      </div>
    </div>
  );
};
