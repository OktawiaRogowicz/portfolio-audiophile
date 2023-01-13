import React, { FC, useEffect, useState } from "react";
import { Container } from "./Container";
import Media from "./Media";
import { Link } from "./Link";
import { CartIcon } from "../icons/CartIcon";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { StyledClickable } from "./StyledClickable";
import { styled } from "../styles/stitches";
import { CartModal } from "./CartModal";
import { useShoppingCartContext } from "../context/shoppingCartContext";
import { CategoriesMini } from "./CategoriesMini";
import { SiteConfiguration } from "../models/site-configuration";

const StickyHeaderContainer = styled("div", {
  zIndex: "100",
  top: "0",
  position: "sticky",
});

const StyledContainer = styled("div", {
  zIndex: 1,
  position: "absolute",
  top: "$headerHeight",
  // display: "grid",
  transform: "200ms",
  background: "rgba(0, 0, 0, 0.5)",
  height: "calc(100vh)",
  variants: {
    isOpen: {
      true: {
        // display: "grid",
        // gridTemplateColumns: "1fr",
        // margin: "auto",
        // justifyContent: "center",
        "@lg": {
          display: "none",
        },
      },
      false: {
        display: "none",
      },
    },
  },
});

const MobileMenuBackground = styled("div", {
  borderRadius: "0 0 10px 10px",
  overflow: "hidden",
  padding: "$32 0",
  backgroundColor: "$white",
  "@md": {
    padding: "$64 0",
  },
});

const MobileMenu = styled(Container, {
  borderRadius: "10px",
});

const Root = styled("div", {
  zIndex: "1",
  position: "relative",
  display: "grid",
  gap: "$40",
  gridTemplateColumns: "auto 1fr auto",
  width: "100%",
  height: "$headerHeight",
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

const LogoContainer = styled(Link, {
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

const CartContainer = styled(StyledClickable, {
  position: "relative",
  alignItems: "end",
  justifyContent: "end",
  textAlign: "end",
  "&:hover": {
    color: "$white !important",
  },
});

const CartQuantity = styled("div", {
  position: "absolute",
  content: "",
  width: "$16",
  height: "$16",
  borderRadius: "100%",
  bottom: "-$8",
  right: "-$8",
  backgroundColor: "$orange",
  projectFont: "body03",
  textAlign: "center",
});

export type HeaderProps = {
  header: {
    logo: any;
    menu: any[];
  };
  siteConfiguration: SiteConfiguration;
};

export const Header: FC<HeaderProps> = ({ header, siteConfiguration }) => {
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, getQuantity } = useShoppingCartContext();
  const cartQuantity = getQuantity();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function closeModal() {
    setIsModalOpen(false);
  }

  console.log("siteConfiguration: ", siteConfiguration);

  return (
    <StickyHeaderContainer>
      <Container backgroundColor={"black"}>
        <Root>
          <MenuHamburger onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <HamburgerIcon />
          </MenuHamburger>
          <LogoContainer href={"/"}>
            {header?.logo && <Media image={header.logo.image} />}
          </LogoContainer>
          {header?.menu?.length > 0 && (
            <MenuContainerDesktop>
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
            </MenuContainerDesktop>
          )}
          <CartContainer onClick={() => setIsModalOpen(true)}>
            <CartIcon />
            <CartQuantity>{cartQuantity}</CartQuantity>
          </CartContainer>
        </Root>
        <CartModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          cartItems={cartItems}
        />
      </Container>
      <StyledContainer isOpen={isMobileMenuOpen}>
        <MobileMenuBackground>
          <MobileMenu backgroundColor={"white"}>
            <CategoriesMini
              margin={"none"}
              miniCategories={siteConfiguration.miniCategories}
            />
          </MobileMenu>
        </MobileMenuBackground>
      </StyledContainer>
    </StickyHeaderContainer>
  );
};
