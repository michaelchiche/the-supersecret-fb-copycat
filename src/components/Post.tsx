import React, { FC, useRef } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useUser } from '../contexts/user';
import { useInsertCommentMutation } from '../generated/graphql';

export const Post: FC = () => {
  const user = useUser();
  const { postId } = useParams();
  const form = useRef<HTMLFormElement | null>(null);
  let { current: comment } = useRef<string>();
  const [insertComment, { data, loading, error }] = useInsertCommentMutation();
  return (
    <>
      <h1 className="text-lg font-bold">Discussion</h1>
      <form
        ref={form}
        id="comment-form"
        className="mt-8 flex h-8"
        onSubmit={e => {
          e.preventDefault();
          insertComment({
            variables: {
              comment: {
                post_id: Number(postId),
                comment,
                commentator: user?.id,
              },
            },
          });
          form.current?.reset();
        }}
      >
        <img
          id="comment-author-avatar"
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src={user?.avatar}
          alt="current user avatar"
        />
        <input
          className="mx-3 block h-8 w-full flex-shrink rounded-md border-gray-300 text-xs shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="comment"
          placeholder="What are your thoughts?"
          required
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
      <hr className="my-11" />
      <Outlet />
    </>
  );
};
