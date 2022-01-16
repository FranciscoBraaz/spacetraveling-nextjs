import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getPrismicClient } from '../api/services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Container, Content } from '../../styles/post';
import Image from 'next/image';
import { Autor, DataPost } from '../../components/CardPost/styles';
import Head from 'next/head';
import { Comments } from '../../components/Comments/';

interface Banner {
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

interface PostProps {
  post: {
    slug: string;
    title: string;
    banner: Banner;
    content: string;
    updateAt: string;
    author: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Spacetraveling</title>
      </Head>
      <Container>
        <Image
          src={post.banner.url}
          width={post.banner.dimensions.width}
          height={500}
          alt={post.title}
        />
        <article>
          <h1>{post.title}</h1>
          <div>
            <DataPost>
              <Image
                src="/images/calendar.svg"
                alt="Calendário"
                width={14}
                height={14}
              />
              {post.updateAt}
            </DataPost>
            <Autor>
              <Image
                src="/images/user.svg"
                alt="Autor"
                width={14}
                height={14}
              />
              {post.author}
            </Autor>
          </div>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Content>
        </article>
        <Comments />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      pageSize: 2,
    },
  );

  const paths = response.results.map((result) => {
    return {
      params: { slug: result.uid },
    };
  });

  return {
    fallback: 'blocking',
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    // @ts-ignore
    title: RichText.asText(response.data.title),
    // @ts-ignore
    banner: response.data.banner,
    // @ts-ignore
    content: RichText.asHtml(response.data.content),
    updateAt: format(new Date(response.last_publication_date), 'dd MMM yyyy', {
      locale: ptBR,
    }),
    // @ts-ignore
    author: response.data.author,
  };
  return {
    props: {
      post,
    },
  };
};
