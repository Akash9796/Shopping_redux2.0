import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";
import styled from "styled-components";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div>
        <CartBox>
          {products.map((product) => {
            return (
              <Box className="cartCard">
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h4>{product.price}</h4>
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </Box>
            );
          })}
        </CartBox>
      </div>
    </div>
  );
}

const CartBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  overflow: hidden;
`;

const Box = styled.div`
  /* border: 2px solid black; */
  width: 300px;
  padding: 10px;
`;
