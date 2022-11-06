import React, { useContext, useState, useEffect, useReducer } from "react";
import { doc, getDoc } from "firebase/firestore";
import DataContext from "../../context/DataContext";
import CartContext from "../../context/Cart/CartContext";

const DETAIL_ACTION_TYPES = {
  SET: "SET",
  COUNT_INCREMENT: "COUNT_INCREMENT",
  COUNT_DECREMENT: "COUNT_DECREMENT",
};

const countReducer = (state, action) => {
  let newCount = 0;
  let newSubtotal = 0.0;

  const { type, payload } = action;

  switch (type) {
    case DETAIL_ACTION_TYPES.SET:
      return { ...payload };

    case DETAIL_ACTION_TYPES.COUNT_DECREMENT:
      newCount = state.count <= 1 ? 1 : state.count - 1;
      newSubtotal = newCount * state.salesPrice;
      return { ...state, count: newCount, subtotal: newSubtotal };

    case DETAIL_ACTION_TYPES.COUNT_INCREMENT:
      newCount = state.count >= payload ? payload : state.count + 1;
      newSubtotal = newCount * state.salesPrice;
      return { ...state, count: newCount, subtotal: newSubtotal };

    default:
      return state;
  }
};

const ItemDetail = ({ itemId }) => {
  const { addCartItem, saveCartToLocalStorage } = useContext(CartContext);

  const { db } = useContext(DataContext);

  const [detailItemInitialState, setDetailItemInitialState] = useState({});

  const [item, setItem] = useState({});

  useEffect(() => {
    getItemById();
  }, []);

  const getItemById = async () => {
    try {
      const itemDoc = doc(db, "items", `${itemId}`);

      const snapshot = await getDoc(itemDoc);

      if (snapshot.exists()) {
        setItem({
          id: snapshot.id,
          ...snapshot.data(),
        });
      } else {
        console.error(`No document was found wit the id ${itemId}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const [detailItemState, dispatch] = useReducer(countReducer, {});

  useEffect(() => {
    dispatch({
      type: DETAIL_ACTION_TYPES.SET,
      payload: {
        id: `${item.id}`,
        title: `${item.title}`,
        description: `${item.description}`,
        imageUrl: `${item.imageUrl}`,
        salesPrice: item.price,
        count: 1,
        subtotal: item.price,
      },
    });
  }, [item]);

  const handleAddToCartClick = () => {
    addCartItem(detailItemState);
    saveCartToLocalStorage();
  };

  const getCurrencyFormat = (amount, locale = "es-MX", currency = "MXN") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(amount);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-min min-h-max mt-5 mb-5 ml-auto mr-auto">
      <figure>
        <img
          src={detailItemState.imageUrl}
          alt={detailItemState.title}
          className="w-60"
        />
      </figure>

      <div className="card-body">
        <h4 className="card-title">{detailItemState.title}</h4>

        <p>{detailItemState.description}</p>

        <div className="justify-end">
          <p>Precio: {getCurrencyFormat(detailItemState.salesPrice)} c/u</p>
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
                onClick={() =>
                  dispatch({ type: DETAIL_ACTION_TYPES.COUNT_DECREMENT })
                }
              >
                <span className="material-symbols-outlined bg-transparent">
                  remove
                </span>
              </button>

              <input
                type="text"
                className="input input-bordered text-center"
                readOnly
                value={detailItemState.count}
              />

              <button
                className="btn"
                id="incrementButton"
                onClick={() =>
                  dispatch({
                    type: DETAIL_ACTION_TYPES.COUNT_INCREMENT,
                    payload: item.stock,
                  })
                }
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
                {getCurrencyFormat(detailItemState.subtotal)}
              </span>
            </p>
          </div>
          <p className="text-xs">
            Disponibles: <span className="font-bold">{item.stock}</span>
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
