import React from 'react'

const Package = () => {
  return (

        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap=4'>
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='object-cover w-full h-full p-2' src="./images/Cat-Dog 01.jpg" alt="/" />
                <img className='object-cover w-full h-full p-2' src="./images/Cat-Dog 02.jpg" alt="/" />
                <img className='object-cover w-full h-full p-2' src="./images/Dog Bubble.jpg" alt="/" />
                <img className='object-cover w-full h-full p-2' src="./images/Cat-Dog 03.jpg" alt="/" />
                <img className='object-cover w-full h-full p-2' src="./images/Cat Leak.jpg" alt="/" />
                <img className='object-cover w-full h-full p-2' src="./images/Cat-Dog 04.jpg" alt="/" />
            </div>

            <div>
                <h2>Choose Your Package</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptatem?</p>
                <div>
                    <button>Read More</button>
                    <button>Checkout</button>
                </div>
            </div>

        </div>
  )
}

export default Package