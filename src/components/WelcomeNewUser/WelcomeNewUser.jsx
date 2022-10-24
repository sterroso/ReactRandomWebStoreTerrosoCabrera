import React from "react";
import { NavLink } from "react-router-dom";
import SideImage from './side-welcome.png';

const WelcomeNewUser = () => {
  return (
    <div className="card card-side w-2/3 ml-auto mr-auto mt-8 mb-8 shadow-xl bg-base-100">
        <figure><img src={ SideImage } alt="Bienvenid@" /></figure>

        <div className="card-body">
            <h2 className="card-title">Bienvenid@!</h2>
        </div>

        <div className="card-actions justify-end">
            <NavLink to={'/'} className="btn btn-primary">Ir al Inicio</NavLink>
        </div>
    </div>
  )
}

export default WelcomeNewUser;