import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getDocs, query, collection, where } from "firebase/firestore";
import ArticleCard from "../ArticleCard/ArticleCard";
import DataContext from "../../context/DataContext";


const CategoryListContainer = () => {
  const { catId } = useParams();

  const { db } = useContext(DataContext);

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemsByCatId();
  }, [catId])

  const getItemsByCatId = async () => {
    try {
      const itemsQuery = query(collection(db, 'items'), where('categoryId', '==', `${catId}`));

      const snapshot = await getDocs(itemsQuery);

      if (snapshot.size > 0) {
        setItems(snapshot.docs.map(d => ({id: d.id, ...d.data()})));
      } else {
        console.error('No docs were found');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-8">
      {items.map(i => <ArticleCard displayMode="listItem" {...i} />)}
    </div>
  )
}

export default CategoryListContainer;