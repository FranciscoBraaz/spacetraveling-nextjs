import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Autor, Container, DataPost } from './styles';

interface PostProps {
  slug: string;
  title: string;
  excerpt: string;
  updateAt: string;
  author: string;
}

export function CardPost({
  slug,
  title,
  excerpt,
  updateAt,
  author,
}: PostProps) {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <Container>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <div>
          <DataPost>
            <Image
              src="/images/calendar.svg"
              alt="Calendário"
              width={14}
              height={14}
            />
            {updateAt}
          </DataPost>
          <Autor>
            <Image src="/images/user.svg" alt="Autor" width={14} height={14} />
            {author}
          </Autor>
        </div>
      </Container>
    </Link>
  );
}
