import React from "react";
import { NavLink } from "react-router-dom";

const CatalogMenuItem = (props) => {
    const { category_id, category_name } = props;

  return (
    <li key={ category_id }>
        <NavLink to={`/category/${category_id}`} className="text-white font-bold">{ category_name }</NavLink>
    </li>
  )
}

export default CatalogMenuItem;