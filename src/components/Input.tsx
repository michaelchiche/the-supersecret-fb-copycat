import classNames from 'classnames';
import React, { FC, useRef } from 'react';
import { useUser } from '../contexts/user';
import { useInsertCommentMutation } from '../generated/graphql';

export const Input: FC<
  { postId?: number; commentId?: number } & JSX.IntrinsicElements['form']
> = ({ postId, commentId, onSubmit }) => {
  const user = useUser();
  const form = useRef<HTMLFormElement | null>(null);
  let { current: comment } = useRef<string>();
  const [insertComment] = useInsertCommentMutation();
  return (
    <form
      ref={form}
      id="comment-form"
      className={classNames('flex h-8', commentId && 'mb-8')}
      onSubmit={e => {
        e.preventDefault();
        insertComment({
          variables: {
            comment: {
              post_id: postId,
              reply_to_id: commentId,
              comment,
              commentator: user?.id,
            },
          },
        });
        form.current?.reset();
        onSubmit?.(e);
      }}
    >
      <img
        id="comment-author-avatar"
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src={user?.avatar}
        alt={`${user?.firstname[0].toUpperCase()}${user?.lastname[0].toUpperCase()}`}
      />
      <input
        className="mx-3 block h-8 w-full flex-shrink rounded-md border-gray-300 text-xs shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        type="text"
        name="comment"
        placeholder="What are your thoughts?"
        required
        autoFocus
        onChange={e => (comment = e.target.value)}
      />

      <button
        type="submit"
        id="submit-comment"
        disabled={!user}
        className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed"
      >
        Comment
      </button>
    </form>
  );
};
