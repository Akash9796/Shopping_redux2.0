import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import styled from "styled-components";


export default function Products() {
    const dispatch = useDispatch()
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setproducts(data);
    };
    fetchProduct();
  }, []);

  const handleAdd = (product)=>{
dispatch(add(product));
console.log("Added");
  }

  return (
    <div>
      <CartBox>
        {products.map((i) => {
          return (
            <Cart key={i.id}>
              <img src={i.image} />
              <h4>{i.title}</h4>
              <h4>${i.price}</h4>
              <button onClick={()=> handleAdd(i)}>Add to cart</button>
            </Cart>
          );
        })}
      </CartBox>
    </div>
  );
}
const CartBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto ;
  padding: 10px;
  overflow: hidden;
`;

const Cart = styled.div`
  border: 2px solid black;
width: 300px;
  padding: 10px;
`;
