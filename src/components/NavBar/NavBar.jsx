// Imports
import React from "react";
import AvatarWidget from "../AvatarWidget/AvatarWidget";
import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";
import MainMenu from "../MainMenu/MainMenu";

const NavBar = () => {

    return (
        <div className="navbar bg-neutral">
            <Brand />
            <MainMenu />
            <div className="flex-none">
                <CartWidget />
                <AvatarWidget />
            </div>

        </div>
    )
}

export default NavBar;