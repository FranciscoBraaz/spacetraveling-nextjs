import styled from 'styled-components';

export const Container = styled.div`
  max-width: 112rem;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--highlight);
  padding-top: 2rem;
  position: relative;

  .previousbutton {
    margin-right: auto;
  }

  .nextButton {
    margin-left: auto;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 1rem;
    border-radius: 0.8rem;

    span:first-child {
      color: #fff;
      font-size: 2rem;
    }

    span:last-child {
      margin-top: 0.5rem;
      color: var(--highlight);
      font-size: 1.4rem;
      font-weight: 600;
    }

    &:hover {
      border: 1px solid var(--highlight);
    }
  }

  @media screen and (max-width: 1180px) {
    & {
      margin: 3rem 2rem;
    }
  }

  @media screen and (max-width: 780px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      button {
        span:first-child {
          text-align: start;
        }
      }

      .previousbutton {
        width: 100%;
        max-width: 345px;
        margin-right: unset;
      }

      .nextButton {
        width: 100%;
        max-width: 345px;
        margin-left: unset;
      }
    }
  }
`;
