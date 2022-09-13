import React from "react";
import styled from "styled-components";
import Products from "../Components/Products";

export default function Home() {
  return (
    <div>
      <Container>
        <h1>Welcome to the Redux toolkit store.</h1>
        <Section>
          <Products/>
        </Section>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Section = styled.div``;



