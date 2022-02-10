import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  margin-top: 1rem;
  margin-bottom: 5rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
  }

  p {
    font-size: 1.8rem;
    color: var(--body);
    padding: 0;
    margin-top: 0;
  }

  & > div {
    display: flex;
  }

  @media screen and (max-width: 680px) {
    & {
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
`;
export const DataPost = styled.span`
  font-size: 1.4rem;
  color: var(--info);
  margin-right: 1.5rem;
  display: flex;
  align-items: center;

  span {
    margin-right: 0.5rem !important;
  }

  @media screen and (max-width: 680px) {
    & {
      font-size: 1rem;
    }
  }
`;
export const Autor = styled(DataPost)``;

export const ReadingTime = styled(DataPost)``;
