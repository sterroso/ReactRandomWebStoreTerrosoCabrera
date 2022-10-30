import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import DataContext from "../../context/DataContext";

const ItemDetailContainer = (props) => {
  const { db } = useContext(DataContext);

  const { itemId } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    getItemById();
  }, [itemId]);

  const getItemById = async () => {
    try {
      const itemDoc = doc(db, "items", `${itemId}`);

      const snapshot = await getDoc(itemDoc);

      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.error(`No document was found wit the id ${itemId}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
