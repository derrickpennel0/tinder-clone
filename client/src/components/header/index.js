import React,{useState} from 'react'
import {BsPersonFill} from "react-icons/bs";
import {MdForum} from "react-icons/md";




export default function Header() {
  return (
    <div>
        {/* top nav   */}
        <div className='flex justify-between items-center'>
        <span className='p-[20px]'><button type='button' className='hover:bg-gray-200 '><BsPersonFill size={40} color='grey'/></button></span>
        <span className='w-[8%] h-[5%] flex items-center p-[20px]'><img src="/assets/tinder-icon.png" alt='tinder-logo'/></span>
        <span className='p-[20px]'><button type='button' className='hover:bg-gray-200'><MdForum size={40} color='grey'/></button></span>

        </div>

    </div>
  )
}
