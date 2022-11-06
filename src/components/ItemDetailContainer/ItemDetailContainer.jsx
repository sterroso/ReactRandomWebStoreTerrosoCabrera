import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  return (
    <>
      <ItemDetail itemId={itemId} />
    </>
  );
};

export default ItemDetailContainer;
