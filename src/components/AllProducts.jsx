import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;

`;
const Arrivals = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const AllProducts = () => {
  return (
    <Container>
      <Arrivals>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Arrivals>
      <Arrivals>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Arrivals>
      <Arrivals>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Arrivals>
      <Arrivals>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Arrivals>
    </Container>
  );
};

export default AllProducts;
