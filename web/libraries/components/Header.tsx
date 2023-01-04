import { FC } from "react";
import { Container } from "./Container";
import Media from "./Media";
import { Link } from "./Link";
import { CartIcon } from "../icons/CartIcon";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { StyledClickable } from "./StyledClickable";
import { styled } from "../styles/stitches";

const Root = styled("div", {
  zIndex: "1",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  width: "100%",
  height: "89px",
  borderBottom: "1px solid $white02",
  color: "$white",
  alignItems: "center",
  "@md": {
    gap: "$40",
    gridTemplateColumns: "auto 1fr auto",
  },
  "@lg": {
    gridTemplateColumns: "auto 1fr auto",
    height: "96px",
  },
});

const LogoContainer = styled("div", {
  display: "grid",
  justifyContent: "center",
  "@md": {
    justifyContent: "left",
  },
});

const MenuHamburger = styled(StyledClickable, {
  "@lg": {
    display: "none",
  },
});

const MenuContainerDesktop = styled("div", {
  display: "none",
  gap: "$32",
  gridAutoFlow: "column",
  gridTemplate: "1fr",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  "@lg": {
    display: "grid",
    justifyContent: "center",
  },
});

const MenuItem = styled("div", {});

const CartContainer = styled(Link, {
  alignItems: "end",
  justifyContent: "end",
  textAlign: "end",
});

export type HeaderProps = {
  header: {
    logo: any;
    menu: any[];
  };
};

export const Header: FC<HeaderProps> = ({ header }) => {
  return (
    <Container backgroundColor={"black"}>
      <Root>
        <MenuHamburger>
          <HamburgerIcon />
        </MenuHamburger>
        <LogoContainer>
          {header?.logo && <Media image={header.logo.image} />}
        </LogoContainer>
        {header?.menu?.length > 0 && (
          <MenuContainerDesktop>
            <MenuItem>
              <Link appearance={"plain"} href={`/`}>
                {"Home"}
              </Link>
            </MenuItem>
            {header.menu.map((menuItem) => {
              return (
                <MenuItem>
                  <Link
                    appearance={"plain"}
                    href={`/category/${menuItem.link.href}`}
                  >
                    {menuItem.link.name}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuContainerDesktop>
        )}
        <CartContainer appearance={"plain"} href={"/checkout"}>
          <CartIcon />
        </CartContainer>
      </Root>
    </Container>
  );
};
