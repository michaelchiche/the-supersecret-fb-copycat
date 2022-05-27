import { request, gql, GraphQLClient } from 'graphql-request';
import { faker } from '@faker-js/faker';

const endpoint = 'http://localhost:8080/v1/graphql';

const numberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const hasura = new GraphQLClient(endpoint, {});
(async () => {
  // Adding Seed Users
  const users = Array.from(Array(100), () => ({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatar: faker.internet.avatar(),
  }));
  const addUsers = gql`
    mutation addUsers($users: [user_insert_input!]!) {
      insert_user(objects: $users) {
        affected_rows
      }
    }
  `;
  await hasura.request(addUsers, { users });

  // Adding seed Post
  const post = {
    author_id: 1,
    title: faker.lorem.sentence(5),
    content: faker.lorem.paragraphs(5),
  };
  const addPost = gql`
    mutation addPost($post: post_insert_input!) {
      insert_post_one(object: $post) {
        id
      }
    }
  `;
  await hasura.request(addPost, { post });

  // Adding comments
  const comments = Array.from(Array(1000), (_, index) => {
    const isComment = index === 0 || faker.datatype.boolean();

    const comment = {
      comment: faker.lorem.sentences(3),
      commentator: numberBetween(1, 100),
      ...(isComment
        ? {
            post_id: 1,
          }
        : {
            reply_to_id: numberBetween(1, Math.max(index - 1, 1)),
          }),
    };
    return comment;
  });
  for await (const comment of comments) {
    const addCommentOne = gql`
      mutation addComments($comment: comment_insert_input!) {
        insert_comment_one(object: $comment) {
          id
        }
      }
    `;
    await hasura
      .request(addCommentOne, {
        comment,
      })
      .catch(error => {
        console.log('error', error);
        console.log(JSON.stringify(comment, null, 2));
        throw new Error('FUCK');
      });
  }

  // Add upvotes
  const upvotes = Array.from(Array(1789), () => {
    return {
      upvoted_comment_id: numberBetween(1, 1000),
      upvoter_id: numberBetween(1, 100),
    };
  });

  const addUpvotes = gql`
    mutation addUpvotes($upvotes: [upvote_insert_input!]!) {
      insert_upvote(objects: $upvotes) {
        affected_rows
      }
    }
  `;

  await hasura.request(addUpvotes, { upvotes });
})();
