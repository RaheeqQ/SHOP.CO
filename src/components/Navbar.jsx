import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, PersonOutline } from "@material-ui/icons"; // Added PersonOutline for profile icon
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;

const MenuLink = styled.a`
  margin-left: 20px;
  font-size: 14px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 7px 15px;
  border-radius: 50px;
  background-color: #f0f0f0;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 600px; 
  background: transparent;
  font-size: 14px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: 1000;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Logo>SHOP.CO</Logo>
          </Link>
          <MenuLink href="/productlist">Shop</MenuLink>
          <MenuLink href="/productlist">On Sale</MenuLink>
          <MenuLink href="/productlist">New Arrivals</MenuLink>
          <MenuLink href="/productlist">Brands</MenuLink>
        </Left>
        <Center>
          <SearchContainer>
            <Search style={{ color: "gray", fontSize: 16 }} />
            <Input placeholder="Search for products..." />
          </SearchContainer>
        </Center>
        <Right>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '15px' }}>
            <PersonOutline style={{ fontSize: 24 }} />
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
