import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 25vh;
  width: 90%;
  background-color: black;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-left: 60px;
  justify-content:  space-between;
  border-radius: 40px;
  position: relative;
  top: 80px;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  color: white;
`;

const InputContainer = styled.div`
  width: 35%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  margin-right: 30px;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 10px;
  border-redius: 10px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: white;
  color: black;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS</Title>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
