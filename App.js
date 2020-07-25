import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1542731538-f99c9f100885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1097&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  padding: 1rem;
  max-width: 500px;
  @media only screen and (min-width: 1048px) {
    margin-left: 40rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 10px;
  text-shadow: rgba(255, 224, 0, 0.7) 0 0 18px;
  padding-bottom: 1rem;
`;

const Subtitle = styled.h2`
  padding-bottom: 2rem;
`;

const Text = styled.p`
  padding-bottom: 1.5rem;
`;

const Button = styled.button`
  color: white;
  background: transparent;
  border: 2px solid white;
  padding: 0.6rem 1rem;
  font-size: 1rem;
`;

const Powered = styled.div`
  position: absolute;
  bottom: 1rem;
  @media only screen and (min-width: 768px) {
    right: 1rem;
  }
  
`;

export default () => (
  <Container>
    <Content>
      <Title>PRIMAL ETH</Title>
      <Subtitle>A fundraising portal</Subtitle>
      <Text>
        We are applying to become a Reg C.F. funding portal that's exclusive to
        the Ethereum blockchain
      </Text>
      <Button>Join our Mailing List</Button>
    </Content>
    <Powered>Powered by OpenLaw on Ethereum</Powered>
  </Container>
);
