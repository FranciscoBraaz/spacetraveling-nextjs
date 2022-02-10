import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;

  & > span {
    width: 100% !important;
  }

  & > article {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    margin-top: 4rem;
  }

  & > article > div {
    display: flex;
  }

  & > article > h1 {
    font-size: 3.5rem;
    font-weight: bold;
  }

  @media screen and (max-width: 1180px) {
    & > article {
      width: unset;
      max-width: 112rem;
      margin: 0 2rem;
      margin-top: 2rem;
    }

    & > article > h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 3rem;
  color: var(--body);
  font-size: 1.6rem;

  p,
  ul {
    margin: 1.5rem 0;
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin: 0.5rem 0;
    }
  }

  h2 {
    font-size: 3rem;
    margin: 3.5rem 0;
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 680px) {
    h2 {
      font-size: 2.2rem;
      margin: 2.8rem 0;
    }

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
    }

    p > strong {
      font-size: 1.2rem;
    }
  }
`;
