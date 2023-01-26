import { FC } from "react";
import { styled } from "../../styles/stitches";
import { Container } from "../Container";
import Media from "../Media";
import { Link } from "../Link";
import { ImageType } from "../../models/image";
import { headerType } from "../../models/headerType";

const Root = styled("div", {
  display: "grid",
  height: "auto",
  gridTemplateColumns: "1fr",
  gap: "$32",
  color: "$white",
  alignItems: "center",
  "@md": {
    height: "89px",
  },
  "@lg": {
    height: "96px",
    gridTemplateColumns: "1fr auto",
  },
});

const LogoContainer = styled("div", {
  display: "grid",
  justifyContent: "center",
  "@md": {
    justifyContent: "left",
  },
});

const MenuContainer = styled("div", {
  display: "grid",
  gap: "$16",
  gridAutoFlow: "row",
  gridTemplate: "1fr",
  alignItems: "center",
  justifyContent: "center",
  "@md": {
    gap: "$32",
    gridAutoFlow: "column",
    justifyContent: "left",
  },
});

const MenuItem = styled("div", {
  justifyContent: "center",
  display: "grid",
});

export type FooterMenuProps = {
  header: headerType;
};

export const FooterMenu: FC<FooterMenuProps> = ({ header }) => {
  return (
    <Container backgroundColor={"black"}>
      <Root>
        <LogoContainer>
          {header?.logo && <Media image={header.logo.image} />}
        </LogoContainer>
        {header?.menu?.length > 0 && (
          <MenuContainer>
            <MenuItem>
              <Link appearance={"plain"} href={`/`}>
                {"Home"}
              </Link>
            </MenuItem>
            {header.menu.map((menuItem, index) => {
              return (
                <MenuItem key={`menuItem-${index}`}>
                  <Link
                    appearance={"plain"}
                    href={`/category/${menuItem.link.href}`}
                  >
                    {menuItem.link.name}
                  </Link>
                </MenuItem>
              );
            })}
          </MenuContainer>
        )}
      </Root>
    </Container>
  );
};
