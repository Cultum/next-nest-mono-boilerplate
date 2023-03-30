import * as React from "react";
import styled from "styled-components";

const HelloPage = styled.div`
  ${({ theme }) => theme.templates.typography.common.h2};
`

const Home = () => {
  return <HelloPage>First Page</HelloPage>;
};

export default Home;
