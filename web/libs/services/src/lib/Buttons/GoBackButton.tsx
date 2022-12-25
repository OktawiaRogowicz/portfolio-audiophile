import { styled } from "@portfolio-audiophile/styles";
import { Link } from "../Link";

const Root = styled("div", {
  margin: "$16 0 $24 0",
  "@md": {
    margin: "$32 0 $24 0",
  },
  "@lg": {
    margin: "$80 0 $56 0",
  },
});

const StyledLink = styled(Link, {
  color: "$black05",
});

const GoBackButton = ({}) => {
  return (
    <Root>
      <StyledLink href={"/"} appearance={"plain"}>
        Go back
      </StyledLink>
    </Root>
  );
};

export default GoBackButton;
