import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 400px;
  padding: 2rem;
  border-radius: 10px;
  > h1 {
    margin: 0 0 1rem 0;
    font-family: 'Bigelow Rules', cursive;
  }
`;

export const ListItem = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 0.6rem 0;
  display: flex;
  align-items: center;
  > span {
    margin-left: 1rem;
  }
`;
