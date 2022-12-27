import { FC } from "react";
import { styled } from "../styles/stitches";
import { Container } from "./Container";

const Root = styled("div", {
  display: "grid",
  justifyContent: "center",
  projectFont: "heading02",
  padding: "$32 0",
  "@md": {
    padding: "$96",
  },
});

export type CategoryHeaderProps = {
  categoryName: string;
};

export const CategoryHeader: FC<CategoryHeaderProps> = ({ categoryName }) => {
  return (
    <Container backgroundColor={"black"}>
      <Root>
        <span>{categoryName}</span>
      </Root>
    </Container>
  );
};
