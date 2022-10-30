import React, { useContext, useState, useEffect } from "react";
import DataContext from "../../context/DataContext";

const ItemDetail = ({ id, title, description, imageUrl, price, stock }) => {
  const { addCartItem, formatCurrencyNumber } = useContext(DataContext);

  const [itemQuantity, setItemQuantity] = useState(1);

  const [itemSubtotal, setItemSubtotal] = useState(price * itemQuantity);

  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    setItemSubtotal(itemQuantity * price);
  }, [itemQuantity]);

  const handleQttyBtnClick = (amount) => {
    const newQtty =
      itemQuantity + amount < 1 || itemQuantity + amount > stock
        ? itemQuantity
        : itemQuantity + amount;
    setItemQuantity(newQtty);
  };

  const handleAddToCartClick = () => {
    console.log(
      `${itemQuantity} ${title} will be added to Cart, for a subtotal of ${itemSubtotal}`
    );
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-min min-h-max mt-5 mb-5 ml-auto mr-auto">
      <figure>
        <img src={`${imageUrl}?`} alt={title} />
      </figure>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>

        <p>{description}</p>

        <div className="justify-end">
          <p>Precio: {formatCurrencyNumber(price)} c/u</p>
        </div>

        <div className="card-actions flex flex-col justify-start items-start">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xs">Cantidad</span>
            </label>

            <label className="input-group">
              <button
                className="btn"
                id="decrementButton"
                onClick={() => handleQttyBtnClick(-1)}
              >
                <span className="material-symbols-outlined bg-transparent">
                  remove
                </span>
              </button>

              <input
                type="text"
                className="input input-bordered text-center"
                readOnly
                value={itemQuantity}
              />

              <button
                className="btn"
                id="incrementButton"
                onClick={() => handleQttyBtnClick(1)}
              >
                <span className="material-symbols-outlined bg-transparent">
                  add
                </span>
              </button>
            </label>
          </div>

          <div id="totalDisplay">
            <p>
              Total:{" "}
              <span className="text-info font-bold">
                {formatCurrencyNumber(itemSubtotal)}
              </span>
            </p>
          </div>
          <p className="text-xs">
            Disponibles: <span className="font-bold">{stock}</span>
          </p>
          <button
            className="btn btn-primary normal-case font-bold"
            onClick={() => handleAddToCartClick()}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
