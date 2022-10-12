import { useState, useEffect } from "react";
import CatalogMenuItem from "../CatalogMenuItem/CatalogMenuItem";

const articleCategories = {
    categories: [
        {
        category_id: 10,
        category_name: "Ropa"
        },
        {
        category_id: 20,
        category_name: "Relojes"
        },
        {
        category_id: 30,
        category_name: "Zapatos"
        }
    ]
}

const MainMenu = (props) => {

    const [menuItems, setMenuItems] = useState([]);

    // Debe sustituirse por una función asíncrona que recupere los
    // datos de una API mediante el método fetch, convierta el
    // resultado y use la función setMenuItems para definir
    // las categorías en el Menú.
    const getCategories = async () => {
        setMenuItems(articleCategories.categories);
     }

     useEffect(() => {
       getCategories();
     }, [])

    return (
        <div className="flex-none">
            <ul className="menu menu-vertical lg:menu-horizontal bg-neutral text-neutral-content">
                <li><a>Nosotros</a></li>
                <li tabIndex={0}>
                    <a>
                        Catálogo
                        <span className="material-symbols-outlined">expand_more</span>
                    </a>
                    <ul className="p-2 bg-neutral">
                        {
                            menuItems.map(item => <CatalogMenuItem {...item} />) }
                    </ul>
                </li>
                <li><a>Contacto</a></li>
            </ul>
        </div>
    )
}

export default MainMenu;