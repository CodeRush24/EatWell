import React, { useState } from 'react'
import { AiFillQuestionCircle, AiFillTag, AiOutlineClose, AiOutlineCloseSquare, AiOutlineMenu, AiOutlinePhone, AiOutlineSearch } from 'react-icons/Ai'
import { BsFillCartFill, BsThreeDots } from 'react-icons/Bs'
import { TbTruckDelivery } from 'react-icons/Tb'
import { HiOutlineClipboardList } from "react-icons/hi";
import { BiCommentDetail } from 'react-icons/bi'
import img1 from '../assets/EatWellLogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)


    return (
        <>
            <div className='max-w-7xl mx-auto flex justify-between items-center p-4 rounded-3xl'>
                {/* Left Side */}
                <div className='flex items-center'>
                    <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                        <AiOutlineMenu size={30} />
                    </div>
                    <div className='px-2'>
                        <img className='w-16 h-16' src={img1} alt="logo" />
                    </div>
                    <div className='hidden lg:flex items-center bg-amber-200 cursor-pointer rounded-full text-[14px]'>
                        <p className='bg-amber-500 text-white rounded-full p-2 font-bold hover:'>Delivery</p>
                        <p className='p-2 font-bold'>PickUp</p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <AiOutlineSearch size={20} />
                    <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search here Foodies' />
                </div>

                {/* Cart Button */}
                <button className='bg-green-600 hidden md:flex items-center py-2 rounded-full hover:scale-105 duration-300'>
                    <BsFillCartFill size={20} className='mr-1' /> <span className='font-semibold uppercase'>Cart</span>
                </button>

                {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

                <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-amber-200 z-10 duration-500' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-amber-200 z-10 duration-1000'}>
                    <AiOutlineCloseSquare
                        onClick={() => setNav(!nav)}
                        size={30}
                        className='text-green-600 font-extrabold absolute right-1 top-3 cursor-pointer'
                    />
                    <div className='flex items-center'>
                        <img src={img1} alt="logo" className='h-20 w-20' />
                        <div className='flex flex-col items-center'>
                            <h2 className='text-3xl'>EatWell</h2>
                            <h4 className='text-xs'>Vegan Food</h4>
                        </div>
                    </div>

                    <nav>
                        <ul className='ml-3 cursor-pointer'>
                            <li className='flex text-xl py-4 items-center'><TbTruckDelivery size={25} className='mr-4' />Orders </li>
                            <li className='flex text-xl py-4 items-center'><AiFillQuestionCircle size={25} className='mr-4' />About </li>
                            <li className='flex text-xl py-4 items-center'><AiOutlinePhone size={25} className='mr-4' />Contact </li>
                            <li className='flex text-xl py-4 items-center'><HiOutlineClipboardList size={25} className='mr-4' />Menu </li>
                            <li className='flex text-xl py-4 items-center'><AiFillTag size={25} className='mr-4' />Promotions </li>
                            <li className='flex text-xl py-4 items-center'><BiCommentDetail size={25} className='mr-4' />Testimonials </li>
                            <li className='flex text-xl py-4 items-center'><BsThreeDots size={25} className='mr-4' />More </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar


