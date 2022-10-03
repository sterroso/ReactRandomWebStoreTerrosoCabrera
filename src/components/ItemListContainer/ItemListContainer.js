// Imports.

const ItemListContainer = (props) => {
    const { greeting, drawerId } = props;

    return (
        <div className="drawer-side">
            <label htmlFor={ drawerId } className="drawer-overlay h-full" />
            <div id="cartItemListContainer" className="h-full">
                <h3 id="cartTitle" className="bg-base-100">Carrito de compras</h3>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content" id="cartItemList">
                    <li>¡Hola { greeting || "Desconocido" }!</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                </ul>
            </div>
        </div>
    )
}

export default ItemListContainer;