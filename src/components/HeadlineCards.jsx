import React from 'react'
import img from '../assets/HeadCardPic1.jpeg'
import img2 from '../assets/HeadCardPic2.jpg'
import img3 from '../assets/HeadCardPic3.jpg'

const HeadlineCarrds = () => {
    return (
        <div className='max-w-7xl mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='font-bold px-2 pt-4 text-2xl bottom-6'>
                        <p>Healthy Food For Good Life</p>
                    </div>
                    <p className='px-2'>User's Choice</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={img} alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='font-bold px-2 pt-4 text-2xl bottom-6'>
                        <p>Peace starts on our plate. </p>
                    </div>
                    <p className='px-2'>User's Choice</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src={img2} alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='font-bold px-2 pt-4 text-2xl bottom-6'>
                        <p>World Peace begins in the kitchen.</p>
                    </div>
                    <p className='px-2'>User's Choice</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src={img3} alt="" />
            </div>
        </div>
    )
}

export default HeadlineCarrds
