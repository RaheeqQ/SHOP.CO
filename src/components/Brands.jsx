import styled from "styled-components";
import imgTwo from '../img2.png'
const Container = styled.div`
  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Brands = () => {
  return <Container>
    <img src={imgTwo} alt="img-two" />
  </Container>;
};

export default Brands;
