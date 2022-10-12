import React from "react";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  const { brandTitle } = props;

  return (
    <div className="flex flex-auto flex-col justify-start items-stretch gap-8">
        <div className="hero min-h-max bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="font-bold text-5xl underline underline-offset-3">{ brandTitle }</h1>
              <p className="pt-8 pb-16">Sólo aquí encontrarás lo última en moda, calzado y accesorios y te los llevamos hasta tu puerta!</p>
              <NavLink to="/articles"><label role="button" className="btn btn-primary">Explora nuestro Catálogo!</label></NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;