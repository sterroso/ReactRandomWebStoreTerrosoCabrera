import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "../../context/DataContext";

const CategoryListItem = ({ id, title, description, imageUrl, price }) => {
  const { formatCurrencyNumber } = useContext(DataContext);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl card-compact">
      <figure>
        <img src={`${imageUrl}?w=180&h=400`} alt={title} />
      </figure>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="text-ellipsis text-sm">{description}</p>
        <div className="justify-end">
          <p>Precio: {formatCurrencyNumber(price)} c/u</p>
        </div>

        <div className="card-actions flex justify-end">
          <NavLink to={`/item/${id}`} className="btn btn-primary">
            Detalle
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryListItem;
