import { uniqBy } from 'lodash';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostCommentsDocument, usePostQuery } from '../generated/graphql';
import { Comment } from './Comment';

export const Comments: FC = () => {
  const { postId } = useParams();

  const { loading, data, error, subscribeToMore } = usePostQuery({
    variables: {
      postId: +postId!,
    },
  });

  useEffect(() => {
    return subscribeToMore({
      document: PostCommentsDocument,
      variables: { postId: +postId! },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const post = subscriptionData.data.post_by_pk;

        return Object.assign({}, prev, {
          post_by_pk: {
            id: postId,
            comments: uniqBy(
              [...(post?.comments || []), ...(prev.post_by_pk?.comments || [])],
              'id',
            ),
          },
        });
      },
    });
  }, []);

  if (loading) {
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
