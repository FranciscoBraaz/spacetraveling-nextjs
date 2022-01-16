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
`;
