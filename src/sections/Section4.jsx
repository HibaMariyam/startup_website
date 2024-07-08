import React from 'react'
import Group4 from '../assets/images/Group-4.png'

const Section4 = () => {
    return (
        <div className='w-full bg-white px-20 pt-20'>
            <div className='flex flex-col md:flex md:flex-row items-center justify-between  pb-3' >

                <div className='flex flex-col gap-4 max-w-sm'>
                    <h2 className='font-serif text-2xl font-semibold text-black'>Lorem ipsum dolor sit amet consectetur </h2>
                    <p className='font-serif text-sm font-thin text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste? </p>

                    <button className='bg-black w-28 font-sans text-sm font-semibold text-white py-2 rounded-lg '>Learn More</button>

                </div>
                <img src={Group4} alt='group' className=' pb-8 max-w-96' ></img>

            </div>

        </div>
    )
}

export default Section4
