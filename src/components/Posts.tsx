import React, { FC } from 'react';
import { usePostsQuery } from '../generated/graphql';
import { Link } from 'react-router-dom';

export const Posts: FC = () => {
  const { data, error, loading } = usePostsQuery({});
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error...</p>;
  }
  return (
    <ul>
      {data?.post.map(post => {
        return (
          <li key={post.id}>
            <Link to={`post/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
