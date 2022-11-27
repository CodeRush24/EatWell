import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    const [food, setFood] = useState(data)

    const filterCategory = (category) => {
        setFood(data.filter((item) => {
            return item.category === category
        }))
    }

    const filterPrice = (price) => {
        setFood(data.filter((item) => {
            return item.price === price
        }))
    }

    return (
        <div className='max-w-7xl mx-auto px-4 py-12'>
            <h1 className='text-[#0E5E6F] font-bold text-4xl text-center pb-10'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-green-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFood(data)} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>All</button>
                        <button onClick={() => filterCategory('Vegan Burger')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>Burgers</button>
                        <button onClick={() => filterCategory('pizza')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>Pizzas</button>
                        <button onClick={() => filterCategory('salad')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>Salads</button>
                        <button onClick={() => filterCategory('Pasta')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>Pasta</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-green-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('₹')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>₹</button>
                        <button onClick={() => filterPrice('₹₹')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>₹₹</button>
                        <button onClick={() => filterPrice('₹₹₹')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>₹₹₹</button>
                        <button onClick={() => filterPrice('₹₹₹₹')} className='m-1 bg-[#EAF6F6] hover:bg-green-600 hover:text-white text-green-800 font-semibold'>₹₹₹₹</button>
                    </div>
                </div>
            </div>

            {/* Display Food */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5'>
                {
                    food.map((item, i) => (
                        <div key={i} className='border shadow-xl hover:scale-105 duration-300'>
                            <img src={item.image} alt={item.name} className='w-full h-[200px] rounded-lg object-cover rounded-t-lg' />
                            <div className='flex justify-between px-2 font-serif py-3'>
                                <p className='font-bold'>{item.name}</p>
                                <p>
                                    <span className='bg-amber-500 text-white p-1 rounded-full'>{item.price}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Food
