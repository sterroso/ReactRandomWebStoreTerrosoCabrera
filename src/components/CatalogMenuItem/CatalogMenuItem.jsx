import React from "react";

const CatalogMenuItem = (props) => {
    const { category_id, category_name } = props;

  return (
    <li key={ category_id }>
        <a href={`/category/${category_id}`}>{ category_name }</a>
    </li>
  )
}

export default CatalogMenuItem;