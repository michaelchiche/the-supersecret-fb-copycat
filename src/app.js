(() => {
  const numberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const graphqlFetch = async (query, variables) =>
    fetch('http://localhost:8080/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
      .then(res => res.json())
      .then(({ data }) => data);

  const params = new URLSearchParams(window.location.search);
  const postId = Number(params.get('post') || 1);
  const commentsContainer = document.getElementById('comments');
  const submitButton = document.getElementById('submit-comment');
  const currentUserId = numberBetween(1, 20);
  const commentAuthorAvatarImg = document.getElementById(
    'comment-author-avatar',
  );

  if (localStorage.getItem('currentUser')) {
    submitButton.removeAttribute('disabled');
  }

  window.onload = () => {
    graphqlFetch(
      `query user($currentUserId: Int!) {
      user_by_pk(id: $currentUserId) {
        id
        firstname
        lastname
        avatar
      }
    }
    `,
      {
        currentUserId,
      },
    ).then(data => {
      console.log('data', data.user_by_pk.avatar);
      commentAuthorAvatarImg.src = data.user_by_pk.avatar;
      localStorage.setItem('currentUser', JSON.stringify(data.user_by_pk));
      submitButton.removeAttribute('disabled');
    });

    graphqlFetch(
      `query post($postId: Int!) {
        post_by_pk(id: $postId) {
          id
          comments(order_by: [{
            created_at: desc_nulls_last
          }]) {
            comment
            created_at
            user {
              avatar
              firstname
              lastname
              avatar
            }
          }
        }
      }
      `,
      {
        postId,
      },
    ).then(data => {
      commentsContainer.append(
        ...data.post_by_pk.comments.map(({ user, comment }) => {
          return createCommentNode(user, comment);
        }),
      );
    });
    const form = document.getElementById('comment-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('currentUser'));
      graphqlFetch(
        `mutation insertComment($comment: comment_insert_input!) {
        insert_comment_one(object: $comment) {
          id
          comment
          created_at
          user {
            avatar
            firstname
            lastname
          }
        }
      }
      `,
        {
          comment: {
            post_id: postId,
            comment: e.target.elements.comment.value,
            commentator: currentUserId,
          },
        },
      )
        .then(data => {
          const clone = createCommentNode(
            data.insert_comment_one.user,
            data.insert_comment_one.comment,
          );
          commentsContainer.prepend(clone);
          form.reset();
        })
        .catch(error => {
          alert('there was an error submitting your comment');
          console.error('error', error);
        });
    });
  };
})();

function createCommentNode(user, comment) {
  const templateComment = document.getElementById('comment');
  const clone = document.importNode(templateComment.content, true);
  const image = clone.getElementById('comment-author-avatar');
  image.src = user.avatar;
  image.removeAttribute('id');
  const time = clone.getElementById('comment-relative-time');
  time.textContent = Date.now();
  time.setAttribute('title', Date.now());
  time.removeAttribute('id');
  const commentator = clone.getElementById('commentator');
  commentator.textContent = `${user.firstname} ${user.lastname}`;
  commentator.removeAttribute('id');
  const commentContent = clone.getElementById('comment-content');
  commentContent.textContent = comment;
  commentContent.removeAttribute('id');
  return clone;
}
