import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/Cart/CartContext";

const CartItem = (props) => {
  const { removeCartItem, updateCartItem, saveCartToLocalStorage } =
    useContext(CartContext);

  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    setCartItem({ ...props });
  }, []);

  const handleClickCount = (change = 1) => {
    console.log(
      `Item count for "${cartItem.title}" will change by ${change} units.`
    );
    const newCount =
      cartItem.count + change >= 1 && cartItem.count + change < 1000
        ? cartItem.count + change
        : cartItem.count;
    const newSubtotal = newCount * cartItem.salesPrice;
    setCartItem({ ...cartItem, count: newCount, subtotal: newSubtotal });
    updateCartItem(cartItem.id, newCount);
    saveCartToLocalStorage();
  };

  const handleClickRemove = () => {
    console.log(
      `Item "${cartItem.title}" (id: ${cartItem.id}) is being removed.`
    );
    removeCartItem(cartItem.id);
    saveCartToLocalStorage();
    setCartItem({});
  };

  const getCurrencyFormat = (amount, locale = "es-MX", currency = "MXN") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <li>
      <div className="card lg:card-side bg-base-100 shadow-md p-2 mb-8">
        <figure>
          <img
            src={cartItem.imageUrl}
            alt={cartItem.title}
            className="w-32 h-32 shadow-sm rounded-full"
          />
        </figure>
        <div className="card-body">
          <h4 className="card-title text-lg text-black">{cartItem.title}</h4>
          <div className="card-actions flex justify-end items-stretch">
            <label className="input-group justify-end">
              <button
                className="btn btn-warning"
                aria-label="Restar una unidad del artículo"
                onClick={() => handleClickCount(-1)}
              >
                <span className="material-symbols-outlined bg-transparent">
                  remove
                </span>
              </button>

              <input
                type="text"
                className="input input-bordered text-center w-16"
                readOnly
                value={cartItem.count}
              />

              <button
                className="btn btn-success"
                aria-label="Agregar una unidad del artículo"
                onClick={() => handleClickCount(1)}
              >
                <span className="material-symbols-outlined bg-transparent">
                  add
                </span>
              </button>
            </label>
            <button
              className="btn btn-error"
              aria-label="Quitar el artículo del carrito"
              onClick={handleClickRemove}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          <div className="justify-end">
            <p>Subtotal: {getCurrencyFormat(cartItem.subtotal)}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
