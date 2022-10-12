import { useEffect, useState } from "react";

const AvatarWidget = (props) => {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?w=32&h=32" />
                </div>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">Perfil <span className="badge">Nuevo</span></a>
                </li>
                <li><a>Preferencias</a></li>
                <li><a>Salir</a></li>
            </ul>
        </div>
    );
}

export default AvatarWidget;