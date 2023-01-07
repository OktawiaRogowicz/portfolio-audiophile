import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Product } from "../models/product";

export type CartItemType = {
  product: Product;
  quantity: number;
};

export type ShoppingCartContextType = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (product: Product, quantity: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAllFromCart: () => void;
  cartItems: CartItemType[];
  cartTotalPrice: number;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  openCart: () => null,
  closeCart: () => null,
  getItemQuantity: () => 0,
  increaseCartQuantity: () => null,
  decreaseCartQuantity: () => null,
  removeFromCart: () => null,
  removeAllFromCart: () => null,
  cartItems: [],
  cartTotalPrice: 0,
});

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "shopping-cart",
    []
  );

  const cartTotalPrice = cartItems?.reduce(
    (a, v) => (a = a + v.product.price * v.quantity),
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.product.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(product: Product, quantity: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product.id === product.id) == null) {
        return [...currItems, { product, quantity: quantity }];
      } else {
        return currItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.product.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.product.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.product.id !== id);
    });
  }
  function removeAllFromCart() {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        removeAllFromCart,
        openCart,
        closeCart,
        cartItems,
        cartTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = (): ShoppingCartContextType => {
  return useContext(ShoppingCartContext);
};
