import React, { useEffect } from 'react';
import Comment from './comment';
import { Container } from './styles';

export function Comments() {
  const commentBox = React.createRef();

  useEffect(() => {
    const commentScript = document.createElement('script');

    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute(
      'repo',
      'FranciscoBraaz/spacetraveling-nextjs-comments',
    );
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('id', 'utterances');
    commentScript.setAttribute('label', 'comment');
    commentScript.setAttribute('theme', 'github-dark');
    commentScript.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
    const removeScript = () => {
      commentScript.remove();
      document.querySelectorAll('.utterances').forEach((el) => el.remove());
    };

    return () => {
      removeScript();
    };
  }, [commentBox]);

  return (
    <Container>
      <Comment ref={commentBox} />
    </Container>
  );
}
