import React from "react";
import styled from "styled-components";
import reviews from "./data";
import Testimonials from "./components/testimonials";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
`;

const Divider = styled.div`
  background-color: #fbbf24;
  height: 4px;
  width: 20%;
  margin-top: 0.25rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
`;

const App = () => {
  return (
    <AppContainer>
      <ContentWrapper>
        <Title>Our Testimonials</Title>
        <Divider />
        <Testimonials reviews={reviews} />
      </ContentWrapper>
    </AppContainer>
  );
};

export default App;
