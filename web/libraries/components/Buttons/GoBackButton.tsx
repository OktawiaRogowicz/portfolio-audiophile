import { Link } from "../Link";
import { styled } from "../../styles/stitches";

const Root = styled("div", {
  padding: "$16 0 $24 0",
  "@md": {
    padding: "$32 0 $24 0",
  },
  "@lg": {
    padding: "$80 0 $56 0",
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
