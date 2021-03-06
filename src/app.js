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
  const currentUserId = Number(params.get('user') || numberBetween(1, 20));
  const commentAuthorAvatarImg = document.getElementById(
    'comment-author-avatar',
  );

  if (localStorage.getItem('currentUser')) {
    submitButton.removeAttribute('disabled');
  }

  window.onload = () => {
    document.getElementById('comments').addEventListener('click', function (e) {
      const isUpvote = e.target.closest('.upvote');
      const isReply = e.target.closest('.reply');

      if (isUpvote) {
        graphqlFetch(
          `mutation insertUpvote($upvote: upvote_insert_input!) {
          insert_upvote_one(object: $upvote) {
            id
            upvoter_id
            upvoted_comment_id
          }
        }
        `,
          {
            upvote: {
              upvoted_comment_id: isUpvote.getAttribute('data-comment-id'),
              upvoter_id: currentUserId,
            },
          },
        ).then(data => {
          if (`insert_upvote_one` in (data || {})) {
            console.info(
              `upvote added to comment: ${data.insert_upvote_one.id}`,
            );
          } else {
            console.error(
              'could not add upvote, seems like you already have upvoted this comment',
            );
          }
        });
      }
      if (isReply) {
        console.warn('Reply to comment is not implemented is V1');
      }
    });

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
            id
            comment
            upvotes: upvotes_aggregate {
              aggregate {
                count
              }
            }
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
        ...data.post_by_pk.comments.map(
          ({ id, user, comment, upvotes, created_at }) => {
            return createCommentNode({
              id,
              user,
              comment,
              upvotes,
              created_at,
            });
          },
        ),
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
          upvotes: upvotes_aggregate {
            aggregate {
              count
            }
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
          const clone = createCommentNode(data.insert_comment_one);
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

function createCommentNode({ id, user, comment, upvotes, created_at }) {
  const templateComment = document.getElementById('comment');
  const clone = document.importNode(templateComment.content, true);

  const image = clone.getElementById('comment-author-avatar');
  image.src = user.avatar;
  image.setAttribute(
    'alt',
    `${user.firstname[0].toUpperCase()}${user.lastname[0].toUpperCase()}`,
  );
  image.removeAttribute('id');

  const time = clone.getElementById('comment-relative-time');
  time.textContent = formatRelativeTime(new Date(created_at));
  time.setAttribute('title', new Date(created_at));
  time.removeAttribute('id');

  const commentator = clone.getElementById('commentator');
  commentator.textContent = `${user.firstname} ${user.lastname}`;
  commentator.removeAttribute('id');

  const commentContent = clone.getElementById('comment-content');
  commentContent.textContent = comment;
  commentContent.removeAttribute('id');

  const upvote = clone.getElementById('upvote');
  upvote.setAttribute('data-comment-id', id);
  upvote.setAttribute('data-upvote-count', upvotes.aggregate.count);
  upvote.removeAttribute('id');

  const reply = clone.getElementById('reply');
  reply.setAttribute('data-comment-id', id);
  reply.removeAttribute('id');

  return clone;
}

// Source: https://suckatcoding.com/blog/relative-time-in-js/
function formatRelativeTime(
  date,
  reference = new Date(),
  language = navigator.language,
) {
  if (!date) return '';

  date = new Date(date);
  let delta = Math.round((date - reference) / 1000),
    deltaInUnit = delta,
    unit = 'second';

  const units = [
    { unit: 60, name: 'minute' },
    { unit: 60 * 60, name: 'hour' },
    { unit: 60 * 60 * 24, name: 'day' },
    { unit: 60 * 60 * 24 * 7, name: 'week' },
    { unit: 60 * 60 * 24 * 30, name: 'month' },
    { unit: 60 * 60 * 24 * 400, name: 'year' },
  ];

  for (let u of units) {
    if (Math.abs(delta) > u.unit) {
      deltaInUnit = delta / u.unit;
      unit = u.name;
    }
  }

  return new Intl.RelativeTimeFormat(language, {
    style: 'long',
    numeric: 'auto',
  }).format(deltaInUnit.toFixed(0), unit);
}
