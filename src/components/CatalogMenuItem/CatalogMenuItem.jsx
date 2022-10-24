import React from "react";
import { NavLink } from "react-router-dom";

const CatalogMenuItem = (props) => {
    const { id, name } = props;

  return (
    <li>
        <NavLink to={`/category/${id}`} className="text-white font-bold">{ name }</NavLink>
    </li>
  )
}

export default CatalogMenuItem;