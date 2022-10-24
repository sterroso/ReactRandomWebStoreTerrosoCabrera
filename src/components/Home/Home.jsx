import React from "react";
import SlideMenFashion from './slide-fashion-man.jpg';
import SlideWomenFashion from './slide-fashion-woman.jpg';
import SlideMenShoes from './slide-shoes-man.jpg';
import SlideWomenShoes from './slide-shoes-woman.jpg';
import SlideMenWatches from './slide-watches-man.jpg';
import SlideWomenWatches from  './slide-watches-woman.jpg';

const Home = () => {

  return (
    <div id="homeCarousel" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="5" aria-label="Slide 6" />
      </div>

      {/* Slides container */}
      <div className="carousel-inner relative w-full overflow-hidden">
        {/* Slide 1 */}
        <div className="carousel-item active relative float-left w-full">
          <img src={SlideWomenWatches} alt="Relojes para damas" className="block w-full" />
          <div className="carousel-caption hidden md:block absolute text-center bg-gradient-to-b bg-slate-800 bg-opacity-60 shadow-md">
            <h5 className="text-xl">Relojes para damas</h5>
            <p>Elegancia y tecnología para llevar cuenta del tiempo</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item relative float-left w-full">
          <img src={SlideMenFashion} alt="Ropa para caballeros" className="block w-full" />
          <div className="carousel-caption hidden md:block absolute text-center bg-gradient-to-b bg-slate-800 bg-opacity-60 shadow-md">
            <h5 className="text-xl">Ropa para caballeros</h5>
            <p>Aquí encuentras las últimas tendencias de moda para ellos</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item relative float-left w-full">
          <img src={SlideWomenShoes} alt="Zapatos para damas" className="block w-full" />
          <div className="carousel-caption hidden md:block absolute text-center bg-gradient-to-b bg-slate-800 bg-opacity-60 shadow-md">
            <h5 className="text-xl">Zapatos para damas</h5>
            <p>Cómodos, modernos y elegantes, para toda ocasión</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item relative float-left w-full">
          <img src={SlideMenWatches} alt="Relojes para caballeros" className="block w-full" />
          <div className="carousel-caption hidden md:block absolute text-center bg-gradient-to-b bg-slate-800 bg-opacity-60 shadow-md">
            <h5 className="text-xl">Relojes para caballeros</h5>
            <p>El carácter y estilo del hombre en todo momento</p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item relative float-left w-full">
          <img src={SlideWomenFashion} alt="Ropa para damas" className="block w-full" />
          <div className="carousel-caption hidden md:block absolute text-center bg-gradient-to-b bg-slate-800 bg-opacity-60 shadow-md">
            <h5 className="text-xl">Ropa para damas</h5>
            <p>Los últimos diseños, para toda ocasión</p>
          </div>
        </div>

        {/* Slide 6 */}
        <div className="carousel-item relative float-left w-full">
          <img src={SlideMenShoes} alt="Zapatos para caballeros" className="block w-full" />
          <div className="carousel-caption hidden md:block absolute text-center bg-gradient-to-b bg-slate-800 bg-opacity-60 shadow-md">
            <h5 className="text-xl">Zapatos para caballeros</h5>
            <p>Elegantes, modernos, deportivos, aquí encuentras de todo</p>
          </div>
        </div>
      </div>

      {/* Botón "Anterior" */}
      <button className="carousel-control-prev absolute top-0 bottom-0 flex justify-center items-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      {/* Botón "Siguiente" */}
      <button className="carousel-control-next absolute top-0 bottom-0 flex justify-center items-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}

export default Home;