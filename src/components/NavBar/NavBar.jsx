// Imports
import React from "react";
import AvatarWidget from "../AvatarWidget/AvatarWidget";
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import MainMenu from "../MainMenu/MainMenu";

const NavBar = (props) => {

    const cartData = {
        itemsQuantity: 9,
        total: 420.69,
    }
    return (
        <div className="navbar bg-neutral">
            <Brand {...props} />
            <MainMenu {...props} />
            <div className="flex-none">
                <CartWidget {...props} />
                <AvatarWidget {...props} />
            </div>

        </div>
    )
}

export default NavBar;