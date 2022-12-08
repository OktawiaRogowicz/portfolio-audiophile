import groq from "groq";
import client from "../client";
import { globalStyles, styled } from "@portfolio-audiophile/styles";
import { Container } from "../libs/services/src/lib/Container";

const Test = styled("div", {
  height: "100vh",
});

interface Props {
  header: {
    menu: any[];
  };
}

const Home = ({ header }: Props) => {
  globalStyles();
  return (
    <Container backgroundColor={"black"}>
      <Test>
        <h1>Welcome to sssda blog!</h1>
      </Test>
    </Container>
  );
};

export default Home;
