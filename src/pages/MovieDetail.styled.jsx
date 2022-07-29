import styled from "styled-components";

const DivImg = styled.div`
  width: 300px;
  height: 600px;
`;
export const Img = styled.img`
  max-width: 300px;
  max-height: 500px;
  object-fit: cover;
  margin: 0 1rem;
`;
export const DivGen = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
  word-wrap: break-word;
  overflow: hidden;
  padding-left: 0.5rem;
`;
export default DivImg;
