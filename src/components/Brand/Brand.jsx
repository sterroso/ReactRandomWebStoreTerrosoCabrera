// Imports
import React from "react";

const Brand = (props) => {
    const { brandTitle } = props;

    return (
        <div className="flex-1">
            <a role="button" className="btn" href="/">
                <img src={`${process.env.PUBLIC_URL}/logo64.png`} alt={brandTitle} className="w-10" />
                <h1 className="text-3xl normal-case">{ brandTitle }</h1>
            </a>
        </div>
    )
}

export default Brand;