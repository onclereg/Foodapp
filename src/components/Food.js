import React from 'react';
import {data} from '../data/Data';
import { useState } from 'react';

const Food = () => {
  const [foods,setFoods] = useState(data);

  const filterType =(category)=>{
    setFoods(
      data.filter((food)=>{
        return(
            food.category === category
        )
      })
    )
  }

  const filterPrice =(price)=>{
    setFoods(
      data.filter((food)=>{
        return(
            food.price === price
        )
      })
    )
  }

  return (

  <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h4 className='font-bold text-3xl text-orange-600 text-center'>Top Rated Menu</h4>

     <div className='flex flex-col lg:flex-row justify-between'>
        <div>
            <p className='font-bold text-gray-700 text-center'>Filter Type</p>
            <div className='flex justify-between flex-wrap '>
              <button onClick={()=>setFoods(data)} className='bg-white px-4 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white'>All</button>
              <button onClick={()=>filterType('burger')} className='bg-white px-4 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white'>Burgers</button>
              <button onClick={()=>filterType('pizza')} className='bg-white px-4 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white' >Pizza</button>
              <button onClick={()=>filterType('salad')} className='bg-white px-4 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white' >Salads</button>
              <button onClick={()=>filterType('chicken')} className='bg-white px-4 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white'>Chicken</button>  
            </div>
        </div>

        <div>

            <p className='font-bold text-gray-700 text-center' > Filter Price </p>

            <div>
              <button onClick={()=>filterPrice('$')} className='bg-white px-6 py-2 m-2 rounded-lg border-2 border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white ' > $ </button>
              <button onClick={()=>filterPrice('$$')}  className='bg-white px-5 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white '>$$</button>
              <button onClick={()=>filterPrice('$$$')}  className='bg-white px-4 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white' >$$$</button>
              <button onClick={()=>filterPrice('$$$$')}  className='bg-white px-3 py-2 m-2 rounded-lg border-2 border-orange-700 text-orange-700 hover:bg-orange-600 hover:text-white '> $$$$</button>  
            </div>
        </div>
     </div>

     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5'>
        {foods.map((food,index)=>{
          return(
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={food.image} alt={food.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{food.name}</p>
              <p> <span className='bg-orange-500 text-white px-3 py-2 rounded-lg hover:text-black '>{food.price}</span></p>
            </div>
          </div>
          )  
        })}
     </div>
  </div>
  )
}

export default Food