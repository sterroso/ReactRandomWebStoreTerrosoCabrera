import React from "react";
import ArticleQuantitySpinner from "../ArticleQuantitySpinner/ArticleQuantitySpinner";

const ArticleCard = (props) => {
    const { article_name, article_description, article_image_url, article_price, article_stock } = props;

    const getArticlePriceFormatted = (price) => {
        return new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(price);
    }

  return (
    <div className="card card-compact lg:card-side bg-base-100 shadow-xl">
        <figure><img src={article_image_url} alt="Pictures may differ from actual product" /></figure>
        <div className="card-body">
            <h2 className="card-title">{ article_name }</h2>
            <p className="text-sm text-ellipsis">{ article_description }</p>
            <p className="justify-end">{ getArticlePriceFormatted(article_price) }</p>
            <ArticleQuantitySpinner maxQuantity={article_stock} />
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
        </div>
    </div>
  )
}
export default ArticleCard;