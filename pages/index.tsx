import type { NextPage } from "next";

import Container from "../components/Container"
import Box from "../components/Box";
import MiniBox from "../components/MiniBox";

const Home: NextPage = () => {
  return (
    <Container>
      <Box text="1" />
      <MiniBox text="2"/>
    </Container>
  );
};

export default Home;
