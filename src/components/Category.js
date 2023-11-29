import React from 'react';
import{categories}  from '../data/Data'

const Category = () => {
  return (
    <div className='max-w-[1640px] p-2'>
       <h1 className='font-bold text-4xl text-orange-600 text-center'>Top Rated Menu</h1>
       <div className='grid grid-cols-2 gap-6 mt-4 p-4 lg:grid-cols-4 '>
        {categories.map((item,index)=>{
            return(
                <div key={index} className='bg-slate-300   hover:bg-slate-200  hover:scale-105 duration-300 flex justify-around items-center rounded-lg'>
                <p className='text-1xl font-bold  '>{item.name}</p>
                <img src={item.image} alt={item.name} className='w-20' />
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default Category