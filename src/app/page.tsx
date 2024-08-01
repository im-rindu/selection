"use client";

import React from "react";
import useCart from "@/hooks/useCart";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const Page = () => {
  const { cart, updateCart } = useCart();

  const removeItem = (name: string) => {
    updateCart({ name, price: 0, quantity: 1 }, "remove");
  };

  const addItem = ({ name, price, quantity }: CartItem) => {
    const newItem = {
      name: name,
      price: price,
      quantity: quantity,
    };
    updateCart(newItem, "add");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Item List in Cart</h1>
        <ul>
          {cart.map((item: CartItem, index: number) => (
            <li key={index}>
              {item.name} - {item.quantity} x Rp {item.price * item.quantity}
              <button className="ml-4" onClick={() => removeItem(item.name)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <br className="my-8" />
        <button
          onClick={() =>
            addItem({
              name: "Paprika",
              price: 1000,
              quantity: 1,
            })
          }
        >
          Add Paprika
        </button>
        <br />
        <button
          onClick={() =>
            addItem({
              name: "Tomat",
              price: 2500,
              quantity: 1,
            })
          }
        >
          Add Tomat
        </button>
      </div>
    </main>
  );
};

export default Page;
