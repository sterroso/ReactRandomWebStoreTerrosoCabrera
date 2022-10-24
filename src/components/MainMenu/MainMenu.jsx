import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from 'firebase/firestore';
import CatalogMenuItem from "../CatalogMenuItem/CatalogMenuItem";
import DataContext from "../../context/DataContext";

const MainMenu = () => {
    const { db } = useContext(DataContext);

    const [menuItems, setMenuItems] = useState([]);

    const getCategories = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'categories'));

            if (snapshot.docs.length > 0) {
                setMenuItems(snapshot.docs.map(d => ({id: d.id, ...d.data()})));
            }
        } catch (err) {
            console.error(err);
        }
     }

     useEffect(() => {
       getCategories();
     }, [])

    return (
        <div className="flex-none">
            <ul className="menu menu-vertical lg:menu-horizontal bg-neutral text-neutral-content">
                { menuItems.map(item => <CatalogMenuItem key={item.id} {...item} />) }
            </ul>
        </div>
    )
}

export default MainMenu;