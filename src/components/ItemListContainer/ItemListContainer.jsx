// Imports.
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const { cat_id, article_id } = useParams();

    useEffect(() => {
    }, [cat_id, article_id])


    const { greeting } = props;

    return (
        <div className='mt-9 ml-5 mr-5 flex flex-col justify-start items-stretch'>
            <h1>ItemListContainer</h1>
            <p>{ greeting }</p>
        </div>
    )
}

export default ItemListContainer;