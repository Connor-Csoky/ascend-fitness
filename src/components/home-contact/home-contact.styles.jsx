import styled from "styled-components";

export const HomeContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 7rem;
  border-top: 1px solid black;
`;

export const HomeContactInnerContainer = styled.div`
  display: flex;
  width: 50%;
`;

export const HomeContactTop = styled(HomeContactInnerContainer)`
  gap: 2rem;
`;

export const HomeContactBottom = styled(HomeContactInnerContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 18px;
`;

export const HalfInput = styled(Input)`
  width: 50%;
`;

export const FullInput = styled(Input)`
  width: 100%;
  height: 150px;
`;
