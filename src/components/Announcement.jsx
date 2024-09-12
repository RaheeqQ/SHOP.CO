import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Sign up and Get 20% off to your first order ! 
    <a href="/register" style={{padding: '10px'}}> Sign up Now</a>
  </Container>;
};

export default Announcement;
