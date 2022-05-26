import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Post: FC = () => {
  return (
    <>
      <h1 className="text-lg font-bold">Discussion</h1>
      <form id="comment-form" className="mt-8 flex h-8">
        <img
          id="comment-author-avatar"
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
          src="https://via.placeholder.com/30"
          alt="current user avatar"
        />
        <input
          className="mx-3 block h-8 w-full flex-shrink rounded-md border-gray-300 text-xs shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="comment"
          placeholder="What are your thoughts?"
          required
        />

        <button
          type="submit"
          id="submit-comment"
          disabled
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
