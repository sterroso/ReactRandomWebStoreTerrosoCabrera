import React from "react";
import { NavLink } from "react-router-dom";

const CatalogMenuItem = ({ id, name }) => {
  return (
    <li>
      <NavLink to={`/category/${id}`} className="text-white font-bold">
        {name}
      </NavLink>
    </li>
  );
};

export default CatalogMenuItem;
