import React from 'react'
import Group from '../assets/images/Group.png'


const HeroSection = () => {
    return (
        <div className='w-full bg-[rgb(116,198,157)] px-20  pt-10 pb-4'>
            <div className='flex flex-col-reverse md:flex md:flex-row items-center justify-between pb-3 '>
                <div className='flex flex-col gap-3 max-w-sm'>
                    <h1 className='font-sans text-md font-semibold text-white'>W E L C O M E</h1>
                    <h2 className='font-serif text-4xl font-light text-white'>Lorem ipsum dolor sit amet consectetur </h2>
                    <p className='font-serif text-sm font-light text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste? </p>

                    <button className='bg-white w-28 font-sans text-sm font-semibold text-[#74C69D] py-2 rounded-lg '>Explore</button>

                </div>
                <img src={Group} alt='group' className='max-w-96 pb-3' ></img>
            </div>

        </div>

    )
}

export default HeroSection
