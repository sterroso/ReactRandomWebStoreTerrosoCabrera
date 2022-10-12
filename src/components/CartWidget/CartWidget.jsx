import React from "react";

const CartWidget = (props) => {

    const { total } = props;

    const totalDisplay = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total);

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <span className="material-symbols-outlined text-neutral-content">shopping_cart</span>
                    <span className="badge badge-sm indicator-item invisible">0</span>
                </div>
            </label>
            <div className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow" tabIndex={0}>
                <div className="card-body">
                    <span className="font-bold text-lg">8 Artículos</span>
                    <span className="text-info">Total: $999.99</span>
                    <div className="card-actions">
                        <a role="button" href="/cart" className="btn btn-primary btn-block">Ver Carrito</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWidget;