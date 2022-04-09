import type { NextPage } from "next";

import Container from "../components/Container"
import Box from "../components/Box";
import MiniBox from "../components/MiniBox";

const Home: NextPage = () => {
  return (
    <Container>
      <Box text="Box" />
      <MiniBox text="Mini"/>
      <MiniBox text="Mini"/>
    </Container>
  );
};

export default Home;
