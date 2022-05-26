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
  const postId = params.get('post') || 1;
  const commentsContainer = document.getElementById('comments');
  const templateComment = document.getElementById('template-comment');
  const currentUserId = numberBetween(1, 100);
  const commentAuthorAvatarImg = document.getElementById(
    'comment-author-avatar',
  );
  window.onload = () => {
    graphqlFetch(
      `query user($currentUserId: Int!) {
      user_by_pk(id: $currentUserId) {
        avatar
      }
    }
    `,
      {
        currentUserId: currentUserId,
      },
    ).then(data => {
      console.log('data', data.user_by_pk.avatar);
      commentAuthorAvatarImg.src = data.user_by_pk.avatar;
    });
    const form = document.getElementById('comment-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      console.log('e', e.target.elements.comment.value);
      const c = templateComment.cloneNode(true);
      c.id = `comment-${numberBetween(1, 10000)}`;
      console.log('c', c);
      console.log('commentsContainer', commentsContainer);
      commentsContainer.appendChild(c);
    });
  };
})();
