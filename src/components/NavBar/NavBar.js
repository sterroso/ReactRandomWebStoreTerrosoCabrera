import { Navbar, Dropdown, Button, Indicator, Badge, Card } from "react-daisyui";
import Brand from "../Brand/Brand";
import MainMenu from "../MainMenu/MainMenu";
import CartWidget from "../CartWidget/CartWidget";
import AvatarWidget from "../AvatarWidget/AvatarWidget";

const NavBar = (props) => {

    const { drawerId, brandTitle } = props;

    const cartData = {
        itemsQuantity: 9,
        total: 420.69,
    }
    return (
        <div className="pb-40 flex w-full p-4 items-center justify-center gap-2 font-sans">
            <Navbar {...props}>
                <Brand brandTitle={ brandTitle } />
                <MainMenu />
                <div className="flex-none">
                    <CartWidget drawerId={ drawerId } cartData={ cartData } />
                    <AvatarWidget />
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;