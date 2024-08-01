import { useState } from "react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

type Action = "add" | "remove";

const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateCart = (item: CartItem, action: Action) => {
    if (action === "add") {
      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (cartItem) => cartItem.name === item.name
        );
        if (existingItem) {
          return prevCart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          return [...prevCart, item];
        }
      });
    } else if (action === "remove") {
      setCart((prevCart) =>
        prevCart
          .map((cartItem) =>
            cartItem.name === item.name
              ? {
                  ...cartItem,
                  quantity:
                    cartItem.quantity > 1
                      ? cartItem.quantity - item.quantity
                      : 0,
                }
              : cartItem
          )
          .filter((cartItem) => cartItem.quantity > 0)
      );
    }
  };

  return { cart, updateCart };
};

export default useCart;
