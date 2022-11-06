import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import CatalogMenuItem from "../CatalogMenuItem/CatalogMenuItem";
import DataContext from "../../context/DataContext";

const MainMenu = () => {
  const { db } = useContext(DataContext);

  const [menuItems, setMenuItems] = useState([]);

  const getCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, "categories"));

      setMenuItems(
        snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }))
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex-none lg:w-3/4 md:w-4/5 sm:w-full ml-auto mr-auto">
      <ul className="menu menu-vertical lg:menu-horizontal bg-neutral text-neutral-content">
        {menuItems.map((item) => (
          <CatalogMenuItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
