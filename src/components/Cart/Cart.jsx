import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import DataContext from "../../context/DataContext";

const Cart = () => {
  const { cart } = useContext(DataContext);

  return (
    <div>
      <h3 className="text-2xl">Carrito</h3>
      { cart.itemsCount > 0 &&
          <ul>
            { cart.items.map(i => <CartItem key={i.id} {...i} />) }
          </ul>
      }

      { cart.itemsCount === 0 &&
          <div>
            <h4 className="text-xl">!Tu carrito está vacío!</h4>
            <p>Continúa <NavLink to={'/'}>comprando</NavLink>.</p>
          </div>
      }
    </div>
  )
}

export default Cart;