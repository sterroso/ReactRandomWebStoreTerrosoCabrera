import React from "react";
import { NavLink } from "react-router-dom";
import ArticleQuantitySpinner from "../ArticleQuantitySpinner/ArticleQuantitySpinner";

const ArticleCard = (props) => {
    const { id, title, description, imageUrl, price, stock } = props;

    const { displayMode = 'listItem' } = props;

    const getArticlePriceFormatted = (price = 0) => {
        return new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(price);
    }

  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl${displayMode === 'listItem' ? ' card-compact' : ' max-w-min min-h-max mt-5 mb-5 ml-auto mr-auto'}`}>
        <figure><img src={`${imageUrl}?${displayMode === 'listItem' ? 'w=180&h=400' : 'w=256&h=600'}`} alt="Pictures may differ from actual product" /></figure>
        <div className="card-body">
            <h2 className="card-title">{ title }</h2>
            <p className={`text-ellipsis${displayMode === 'listItem' ? ' text-sm': ''}`}>{ description }</p>
            <div className="justify-end">
                <p className=" flex flex-auto justify-end">{ getArticlePriceFormatted(price) }</p>
            </div>

            <div className={`card-actions flex${displayMode === 'listItem' ? 'justify-end' : ' flex-col justify-start items-start'}`}>
                {
                    displayMode === 'listItem' &&
                    <NavLink to={`/item/${id}`}>
                        <label role="button" className="btn btn-primary normal-case">Detalle del Artículo</label>
                    </NavLink>
                }

                {
                    displayMode === 'itemDetail' &&
                    <>
                        <ArticleQuantitySpinner maxQuantity={stock} />
                        <p className="text-xs">Disponibles: <span className="font-bold">{ stock }</span></p>
                        <button className="btn btn-primary normal-case font-bold">Agregar al Carrito</button>
                    </>
                }

            </div>
        </div>
    </div>
  )
}

export default ArticleCard;