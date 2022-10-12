import React from 'react';

const Slider = (props) => {
  return (
    <>
        <div className='carousel w-fit'>
            <div id='slide1' className='carousel-item w-full'>
                <img src='https://api.lorem.space/image/watch?w=120&h=120' alt='Relojes para toda la familia' className='w-full' />
            </div>
            <div id='slide2' className='carousel-item w-full'>
                <img src='https://api.lorem.space/image/fashion?w=120&h=120' alt='Ropa para toda ocasión' className='w-full' />
            </div>
            <div id='slide3' className='carousel-item w-full'>
                <img src='https://api.lorem.space/image/shoes?w=120&h=120' alt='Zapatos de todo tipo a la moda' className='w-full' />
            </div>
        </div>

        <div className='flex justify-center w-full py-2 gap-2'>
            <a href='#slide1' className='btn btn-xs'>1</a>
            <a href='#slide2' className='btn btn-xs'>2</a>
            <a href='#slide3' className='btn btn-xs'>3</a>
        </div>
    </>
  )
}

export default Slider;