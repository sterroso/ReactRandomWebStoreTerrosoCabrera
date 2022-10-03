import { Menu, Link } from "react-daisyui";

const MainMenu = (props) => {
    return (
        <div className="flex-none">
            <Menu horizontal className="p-0">
                <Menu.Item>
                    <Link target="/nosotros">Nosotros</Link>
                </Menu.Item>

                <Menu.Item tabIndex={0}>
                    <Link>
                        Categorías
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </Link>
                    <Menu className="p-2 bg-base-100">
                        <Menu.Item>
                            <Link href={`/categories?idCategoria=0`}>Muebles</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link href={`/categories?idCategoria=1`}>Ropa</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link href={`/categories?idCategoria=2`}>Zapatos</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link href={`/categories?idCategoria=3`}>Relojes</Link>
                        </Menu.Item>
                    </Menu>
                </Menu.Item>

                <Menu.Item>
                    <Link href="/registro">Registrarme</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default MainMenu;