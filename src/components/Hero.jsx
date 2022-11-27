import React from 'react'
import img1 from '../assets/Heropic1.jpg'

const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
                    <h1 className='px-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-200'>The <span className='text-amber-600'>Best</span> </h1>
                    <h1 className='px-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-600'>Vegan <span className='text-gray-200'>Food</span> </h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src={img1} alt="" />
            </div>
        </div>
    )
}

export default Hero
