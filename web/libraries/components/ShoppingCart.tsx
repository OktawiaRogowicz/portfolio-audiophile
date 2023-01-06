import { useShoppingCart } from "../context/shoppingCartContext";
import { styled } from "../styles/stitches";

type ShoppingCartProps = {
  isOpen: boolean;
};

const Root = styled("div", {
  backgroundColor: "pink",
  height: "100%",
  width: "100%",
  variants: {
    isOpen: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Root isOpen={isOpen}>
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((cartItem) => {
          return (
            <div>
              {cartItem.id} {cartItem.quantity}
            </div>
          );
        })}
    </Root>
  );
  // return <div show={isOpen} onHide={closeCart} placement="end"></div>;
}
