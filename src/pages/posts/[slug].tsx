import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getPrismicClient } from '../api/services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Container, Content } from '../../styles/post';
import Image from 'next/image';
import { Autor, DataPost, ReadingTime } from '../../components/CardPost/styles';
import Head from 'next/head';
import { Comments } from '../../components/Comments/';
import { PostButtons } from '../../components/PostButtons';
import { useRouter } from 'next/router';
import { Loader } from '../../components/Loader';

interface Banner {
  dimensions: {
    width: number;
    height: number;
  };
  url: string;
}

interface NeighborhoodPost {
  title: string;
  uid: string;
}

interface PostProps {
  post: {
    slug: string;
    title: string;
    banner: Banner;
    content: string;
    updateAt: string;
    author: string;
    readingTime: number;
  };
  nextPost: NeighborhoodPost;
  previousPost: NeighborhoodPost;
}

export default function Post({ post, nextPost, previousPost }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

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
            <ReadingTime>
              <Image
                src="/images/clock.svg"
                alt="Autor"
                width={14}
                height={14}
              />
              {post.readingTime} min
            </ReadingTime>
          </div>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Content>
        </article>
        <PostButtons previousPost={previousPost} nextPost={nextPost} />
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
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post', String(slug), {});

  function checkNeighborhoodPost(post: any, slug: string) {
    return slug === post.results[0].uid
      ? null
      : {
          title: RichText.asText(post.results[0].data.title),
          uid: post.results[0]?.uid,
        };
  }

  const previousPost = await prismic.query(
    Prismic.Predicates.at('document.type', 'post'),
    {
      pageSize: 1,
      after: slug,
      orderings: '[document.first_publication_date desc]',
    },
  );

  const nextPost = await prismic.query(
    Prismic.Predicates.at('document.type', 'post'),
    {
      pageSize: 1,
      after: slug,
      orderings: '[document.first_publication_date]',
    },
  );

  // @ts-ignore
  const texts = response.data.content.map((content) => content.text);

  const amountWords = texts.reduce((prevValue, text) => {
    const words = text.split(' ').length;
    return words + prevValue;
  }, 0);

  const readingTime = Math.ceil(amountWords / 200);

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
    readingTime,
  };

  return {
    props: {
      post,
      nextPost: checkNeighborhoodPost(nextPost, String(slug)),
      previousPost: checkNeighborhoodPost(previousPost, String(slug)),
    },
  };
};
