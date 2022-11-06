import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/Cart/CartContext";

const Cart = () => {
  const { itemsCount, total, items, loadCartFromLocalStorage } =
    useContext(CartContext);

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  const getCurrencyFormat = (amount, locale = "es-MX", currency = "MXN") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  console.log(`itemsCount: ${itemsCount}`);

  return (
    <div className="mr-auto ml-auto mt-12 mb-12 lg:w-1/2 md:2/3 sm:4/5 shadow-lg p-2">
      <h3 className="text-3xl font-bold">Carrito</h3>
      {itemsCount > 0 && (
        <>
          <ul className="flex flex-col justify-start items-stretch w-full p-2">
            {items.map((i) => (
              <CartItem key={i.id} {...i} />
            ))}
          </ul>

          <div className="flex justify-end font-bold text-xl">
            Total:{" "}
            <span className="underline text-info">
              {getCurrencyFormat(total)}
            </span>
          </div>
        </>
      )}

      {itemsCount === 0 && (
        <div>
          <h4 className="text-xl">!Tu carrito está vacío!</h4>
          <p>
            Continúa <NavLink to={"/"}>comprando</NavLink>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
