import { Dropdown, Button } from "react-daisyui";

const AvatarWidget = (props) => {
    return (
        <Dropdown vertical="end">
            <Button color="ghost" className="avatar" shape="circle">
                <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" alt="User mugshot" />
                </div>
            </Button>

            <Dropdown.Menu className="w-52 menu-compact">
                <li>
                    <a className="justify-between">
                        Perfil
                        <span className="badge">Nuevo</span>
                    </a>
                </li>
                <Dropdown.Item>Configuración</Dropdown.Item>
                <Dropdown.Item>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default AvatarWidget;