import React from "react";
import { NavLink } from "react-router-dom";

const CatalogMenuItem = (props) => {
    const { category_id, category_name } = props;

  return (
    <li key={ category_id }>
        <NavLink to={`/categories/${category_id}`} className="text-black">{ category_name }</NavLink>
    </li>
  )
}

export default CatalogMenuItem;