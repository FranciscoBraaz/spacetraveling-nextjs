import styled from 'styled-components';

export const ContainerHome = styled.div`
  margin: 0 auto;
  width: 112rem;

  button {
    font-size: 1.6rem;
    color: var(--highlight);
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 3rem;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContainerPosts = styled.div`
  margin-top: 2rem;
`;
