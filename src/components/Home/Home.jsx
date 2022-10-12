import React from "react";
import Slider from "../Slider/Slider";

const Home = (props) => {
  return (
    <div className="min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <Slider />
            </div>
        </div>
    </div>
  )
}

export default Home;