import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
export const DivImg = styled.div`
  width: 250px;
  height: 500px;
  position: relative;
`;

export const Img = styled.img`
  width: 250px;
  height: 400px;
  object-fit: cover;
`;
export const Parag = styled.p`
  width: 250px;
  position: absolute;
`;
export default Div;
