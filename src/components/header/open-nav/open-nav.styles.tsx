import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }
`;
