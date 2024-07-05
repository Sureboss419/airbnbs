import React from 'react'
import amazing from '../images/Amazing views.png'
import cabin from '../images/Cabins.png'
import beach from '../images/Beachfronts.png'
import skin from '../images/Skiing.png'
import grand from '../images/Icon.png'
import mansion from '../images/Mansions.png'
import omg from '../images/OMG!.png'
import pool from '../images/Amazing pools.png'
import luke from '../images/Luxe.png'
import boat from '../images/Boats.png'
import lake from '../images/Lakefrontt.png'
import tree from '../images/Treehouses.png'
import button from '../images/Button.png'
import right from '../images/Right caret category.png'


const Menu = () => {
  return (
    <div className='flex p-4 gap-3 cursor-pointer justify-center'>
        <div className='ml-5 cursor-pointer'>
            <img src={amazing}/>
            <h1 className='text-sm font-semibold hover:underline flex items-center justify-center'>Amazing views</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={cabin} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Cabins</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={beach} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Beachfront</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={skin} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Skiing</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={grand} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Grand pianos</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={mansion} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Mansion</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={omg} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>OMG!</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={pool} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Amazing pool</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={luke} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Luxe</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={boat} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Boat</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={lake} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Lakefront</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={tree} className='w-6 h-6'/>
            <h1 className='text-sm font-semibold hover:underline'>Treehouse</h1>
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={right} className='w-8 h-8'/>
          
        </div>
        <div className='ml-5 cursor-pointer'>
            <img src={button} className='w-12 h-15'/>
    
        </div>
       
    </div>
  )
}

export default Menu