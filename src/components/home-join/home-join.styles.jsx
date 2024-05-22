import styled from "styled-components";

export const HomeJoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 7rem;
`;

export const HomeJoinLeftCard = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 40%;
`;

export const HomeJoinDeals = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 40%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    height: 200px;
  }
`;
