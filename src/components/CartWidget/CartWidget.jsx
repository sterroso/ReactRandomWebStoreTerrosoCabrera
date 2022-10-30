import React, { useContext } from "react";
import DataContext from "../../context/DataContext";

const CartWidget = (props) => {

    const { cart } = useContext(DataContext);

    const totalDisplay = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(cart.total);

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <span className="material-symbols-outlined text-neutral-content">shopping_cart</span>
                    <span className="badge badge-sm indicator-item bg-accent border-secondary text-primary font-bold">0</span>
                </div>
            </label>
            <div className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow" tabIndex={0}>
                <div className="card-body">
                    <span className="font-bold text-lg">{`${cart.itemsCount} artículos`}</span>
                    <span className="text-info">{`Total: ${totalDisplay}`}</span>
                    <div className="card-actions">
                        <a role="button" href="/cart" className="btn btn-primary btn-block">Ver Carrito</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWidget;