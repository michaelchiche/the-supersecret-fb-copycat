import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { usePostQuery } from '../generated/graphql';
import { Comment } from './Comment';

export const Comments: FC = () => {
  const { postId } = useParams();

  const [{ fetching, data, error }] = usePostQuery({
    variables: {
      postId: +postId!,
    },
  });
  if (fetching) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Oups, there was error</p>;
  }
  return (
    <>
      {data?.post_by_pk?.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </>
  );
};
