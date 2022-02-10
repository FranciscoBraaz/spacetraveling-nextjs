import styled from 'styled-components';

export const ContainerHome = styled.div`
  margin: 0 auto;
  max-width: 112rem;

  button {
    font-size: 1.6rem;
    color: var(--highlight);
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 3rem;
    padding: 0;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1180px) {
    margin: 0 2rem;
  }

  @media screen and (max-width: 680px) {
    button {
      font-size: 1.4rem;
    }
  }
`;

export const ContainerPosts = styled.div`
  margin-top: 2rem;
`;
