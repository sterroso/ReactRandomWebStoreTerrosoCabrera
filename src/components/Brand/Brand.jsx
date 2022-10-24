import React, { useContext } from "react";
import DataContext from '../../context/DataContext';

const Brand = () => {
    const { brandTitle } = useContext(DataContext);

    return (
        <div className="flex-1">
            <a role="button" className="btn" href="/">
                <img src={`${process.env.PUBLIC_URL}/logo64.png`} alt={brandTitle} className="w-10" />
                <h1 className="text-3xl normal-case ml-3">{ brandTitle }</h1>
            </a>
        </div>
    )
}

export default Brand;