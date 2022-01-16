import Link from 'next/link';
import React from 'react';
import { truncate } from '../../utils/truncate';
import { Container } from './styles';

interface NeighborhoodPost {
  title: string;
  uid: string;
}

interface PostButtonsProps {
  nextPost: NeighborhoodPost;
  previousPost: NeighborhoodPost;
}

export function PostButtons({ nextPost, previousPost }: PostButtonsProps) {
  return (
    <Container>
      {previousPost !== null && (
        <Link href={`/posts/${previousPost.uid}`} passHref>
          <button className="previousButton">
            <span>{truncate(previousPost.title, 30)}</span>
            <span>Post Anterior</span>
          </button>
        </Link>
      )}
      {nextPost !== null && (
        <Link href={`/posts/${nextPost.uid}`} passHref>
          <button className="nextButton">
            <span>{truncate(nextPost.title, 30)}</span>
            <span>Próximo Post</span>
          </button>
        </Link>
      )}
    </Container>
  );
}
