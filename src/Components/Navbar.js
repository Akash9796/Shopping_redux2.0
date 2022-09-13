import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <Container>
        <Left>
          <span>Redux Store</span>
          <Link className="Header" to="/">
            Home
          </Link>
          <Link className="Header" to="/Cart">
            Cart
          </Link>
        </Left>
        <span className="cartCounter">Cart Items : {items.length}</span>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  span {
    color: white;
  }
`;

const Left = styled.div`
  margin: 0 5px;

  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
