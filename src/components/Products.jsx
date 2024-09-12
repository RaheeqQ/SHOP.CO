import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import Announcement from "./Announcement";

const Container = styled.div`
    padding: 20px;

`;
const Arrivals = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 1000;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-bottom: 50px;
`;

const Products = () => {
  return (
    <Container>
      <Center>NEW ARRIVALS</Center>
      <Arrivals>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Arrivals>
      <Hr />
      <Center>TOP SELLING</Center>
      <Arrivals>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Arrivals>
    </Container>
  );
};

export default Products;
