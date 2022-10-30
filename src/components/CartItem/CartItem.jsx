import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

const CartItem = ({id, title, description, imageUrl, salesPrice, count, subtotal }) => {

  const { removeCartItem, updateCartItemCount } = useContext(DataContext);

  const [itemCount, setItemCount] = useState(count);

  return (
    <li>
      <div className="card lg:card-side bg-base-100 shadow-md">
        <figure><img src={ imageUrl } alt={ title } /></figure>
        <div className="card-body">
          <h4 className="card-title">{ title }</h4>
          <p>{ description }</p>
          <div className="card-actions flex flex-col items-end">
            <div className="flex justify-center items-baseline">
              <button><span className="material-symbols-otlined">remove</span></button>
              <input type="text" readOnly value={ itemCount } />
              <button><span className="material-symbols-outlined">add</span></button>
            </div>
            <p>{0}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem;