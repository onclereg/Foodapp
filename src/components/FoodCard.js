import React from 'react'

const FoodCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

        <div className='rounded-xl relative hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BOGO'S Out.</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black abolute my-4 mx-2 rounded-xl p-2 mt-16  hover:bg-orange-600 hover:text-black hover:scale-105 duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='pizza'/>
        </div>

        <div className='rounded-xl relative hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Salad's Available.</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black abolute my-4 mx-2 rounded-xl p-2 mt-16 hover:bg-orange-600 hover:text-black hover:scale-105 duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt='salad'/>
        </div>

        <div className='rounded-xl relative hover:scale-105 duration-300'>
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Chicken Kabob's.</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black abolute my-4 mx-2 rounded-xl mt-16  p-2 hover:bg-orange-600 hover:text-black hover:scale-105 duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt='chicken kabob'/>
        </div>

    </div>
  )
}

export default FoodCard