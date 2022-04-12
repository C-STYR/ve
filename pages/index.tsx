import type { NextPage } from "next";
import { ButtonVariants } from "../components/Button/Button.css";

import Container from "../components/Container"
import Box from "../components/Box";
import MiniBox from "../components/MiniBox";
import ColorBox from "../components/ColorBox"

const Home: NextPage = () => {
  return (
    <Container>
    <Container>
    <Box text="Box" />
      <MiniBox text="Mini"/>
      <MiniBox text="Mini"/>
      <ColorBox color="red" text="red"/>
      <ColorBox color="yellow" text="yellow"/>
      <ColorBox color="lavender" text="lavender"/>
      <ColorBox color="green" text="green"/>
      <ColorBox color="periwinkle" text="periwinkle"/>
    </Container>
    <Container>
      <button className={ButtonVariants.primary}>Primary</button>
      <button className={ButtonVariants.secondary}>Secondary</button>
      <button className={ButtonVariants.tertiary}>Tertiary</button>
      <button className={ButtonVariants.secondary}>green</button>
    </Container>
    </Container>
  );
};

export default Home;
