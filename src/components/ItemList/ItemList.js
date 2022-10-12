/*
 * Imports
*/
import { useState, useEffect } from "react";
import ListItem from "../ListItem/ListItem";

const ItemList = (props) => {
    const { categoryId } = props;

    const [ items, setItems ] = useState({});

    useEffect(() => {
      getItems();
    }, [])

    const getItems = async (itemsUrl) => {
      const queryUrl = `itemsUrl?cat_id=${categoryId}`;

      try {
          const res = await fetch(queryUrl);
          const data = await JSON.parse(res);

          setItems(data);
      } catch (err) {
          console.error(`No fue posible recuperar los artículos. ${err}`);

          return { status: 'Error', error: {err} };
      }
    }

  return (
    <ul>
        { items.map(i => {
            <ListItem {...i} />
        }) }
    </ul>
  )
}
export default ItemList