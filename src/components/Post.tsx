import React, { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Input } from './Input';

export const Post: FC = () => {
  const { postId } = useParams();

  return (
    <>
      <h1 className="mb-8 text-lg font-bold">Discussion</h1>
      <Input postId={Number(postId)} />
      <hr className="my-11" />
      <Outlet />
    </>
  );
};
