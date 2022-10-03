import { Dropdown, Indicator, Badge, Button, Card } from "react-daisyui";

const CartWidget = (props) => {
    const { drawerId } = props;

    const { itemsQuantity, total } = props.cartData;

    const totalDisplay = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total);

    return (
        <Dropdown vertical="end">
            <Button tabIndex={0} color="ghost" shape="circle">
                <Indicator item={<Badge size="sm">{ itemsQuantity }</Badge>}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </Indicator>
            </Button>
            <Dropdown.Menu tabIndex={0} className="mt-3 card card-compact  w-52 bg-base-100 !p-0">
                <Card.Body className="card-body">
                    <span className="font-bold text-lg">{ itemsQuantity } Artículos</span>
                    <span className="text-info">Total: { totalDisplay }</span>
                    <Card.Actions>
                        <label htmlFor={ drawerId } className="drawer-button btn btn-primary" fulWidth>Ver Carrito</label>
                    </Card.Actions>
                </Card.Body>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CartWidget;