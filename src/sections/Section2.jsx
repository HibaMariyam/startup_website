import React from 'react'
import Partner1 from '../assets/images/XMLID_24_.png'
import Partner2 from '../assets/images/XMLID_1_.png'
import Partner3 from '../assets/images/XMLID_1_-2.png'
import Partner4 from '../assets/images/Group-2.png'
import Partner5 from '../assets/images/XMLID_1_-3.png'



const Section2 = () => {
    return (
        <div className='flex flex-col pt-20 place-items-center gap-4'>
            <div className='flex flex-col  place-items-center max-w-96 gap-4'>
                <h1 className='font-sans text-md font-semibold text-[rgb(116,198,157)]'>P A R T N E R S</h1>
                <h2 className='font-serif text-3xl font-medium text-black'>Lorem Ipsum Dolor </h2>
                <p className='font-serif text-sm font-light text-black'>Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit.</p>
            </div>
            <div className='flex flex-col md:flex md:flex-row justify-around mx-2 gap-10 place-items-center mt-2'>
                <img src={Partner1} alt='partner1' className='h-7'></img>
                <img src={Partner2} alt='partner1' className='h-7'></img>
                <img src={Partner3} alt='partner1' className='h-8'></img>
                <img src={Partner4} alt='partner1' className='h-5'></img>
                <img src={Partner5} alt='partner1' className='h-8'></img>
            </div>

            <button className='bg-black w-28 font-sans text-sm font-semibold text-white py-2 rounded-lg '>Learn More</button>

        </div>
    )
}

export default Section2
