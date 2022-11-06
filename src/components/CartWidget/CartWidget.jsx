import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/Cart/CartContext";

const CartWidget = () => {
  const { itemsCount, total } = useContext(CartContext);

  const [itemsCountString, setItemsCountString] = useState("");

  const [totalString, setTotalString] = useState("");

  useEffect(() => {
    setItemsCountString(`${itemsCount}`);
    setTotalString(
      new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(total)
    );
  }, [itemsCount, total]);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <span className="material-symbols-outlined text-neutral-content">
            shopping_cart
          </span>
          {itemsCount > 0 && (
            <span className="badge badge-sm indicator-item bg-accent border-secondary text-primary font-bold">
              {itemsCountString}
            </span>
          )}
        </div>
      </label>
      <div
        className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
        tabIndex={0}
      >
        <div className="card-body">
          <span className="font-bold text-lg">{`${itemsCountString} artículos`}</span>
          <span className="text-info">Total: {totalString}</span>
          <div className="card-actions">
            <a role="button" href="/cart" className="btn btn-primary btn-block">
              Ver Carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
