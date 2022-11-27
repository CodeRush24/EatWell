import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/Ai'
import { GrInstagram } from 'react-icons/gr'
import { IoMdDoneAll } from 'react-icons/Io'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 bg-amber-600 rounded-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <h4> <IoMdDoneAll /> </h4>
                    <h4 className='ml-1'>Sudarshan</h4>
                </div>

                <div className='flex items-center'>
                    <p><AiFillGithub /> </p>
                    <p><AiFillLinkedin /> </p>
                    <p><GrInstagram /> </p>
                    <p><AiFillTwitterCircle /> </p>
                </div>

            </div>

        </div>
    )
}

export default Footer
