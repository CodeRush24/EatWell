import React from 'react'
import { categories } from '../data/data'

const Category = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <h1 className='text-[#0E5E6F] font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 cursor-pointer'>
                {categories.map((item, i) => (
                    <div key={i} className='bg-green-500 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300'>
                        <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                        <img src={item.image} alt={item.name} className='w-20' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
