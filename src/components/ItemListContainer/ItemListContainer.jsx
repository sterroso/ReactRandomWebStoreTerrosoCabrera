// Imports.
import React from 'react';

const ItemListContainer = (props) => {
    const { greeting } = props;
    return (
        <div className='mt-9 ml-5 mr-5 flex flex-col justify-start items-stretch'>
            <h1>ItemListContainer</h1>
            <p>{ greeting }</p>
        </div>
    )
}

export default ItemListContainer;