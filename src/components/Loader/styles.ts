import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-y: auto;
  justify-content: center;
  align-items: center;

  & > div {
    width: 5rem;
    height: 5rem;
    border: 0.6rem solid #e5e5e5;
    border-radius: 50%;
    border-top-color: var(--highlight);
    animation: rotate infinite 1s;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
