import React from "react";
import { NavLink } from "react-router-dom";

const CategoryListItem = ({ id, title, description, imageUrl, price }) => {
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(number);
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl card-compact">
      <figure>
        <img src={imageUrl} alt={title} className="w-40" />
      </figure>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="text-ellipsis text-sm">{description}</p>
        <div className="justify-end">
          <p>Precio: {formatCurrency(price)} c/u</p>
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
