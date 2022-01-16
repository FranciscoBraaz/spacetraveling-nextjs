import styled from 'styled-components';

export const Container = styled.div`
  width: 112rem;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--highlight);
  padding-top: 2rem;
  position: relative;

  .previousbutton {
    position: absolute;
    left: 0;
  }

  .nextButton {
    position: absolute;
    right: 0;
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
`;
