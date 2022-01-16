import styled from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  background-color: var(--background);
  height: 10.5rem;
`;

export const Container = styled.div`
  width: 112rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin: 0 auto;

  & img {
    margin-left: -1.5rem !important;
    cursor: pointer !important;
  }
`;
