import React from 'react'
import TeamCard from '../components/TeamCard'
import Group13 from '../assets/images/Group 13.png'
import Group21 from '../assets/images/Group 21.png'
import Group18 from '../assets/images/Group 18.png'
import Group26 from '../assets/images/Group 26.png'

const Section5 = () => {
    return (

        <div className='w-full bg-white pt-20 flex flex-col place-items-center px-2 pb-3'>
            <div className='flex flex-col flex-wrap place-items-center max-w-96 gap-4'>
                <h1 className='font-sans text-md font-semibold text-[rgb(116,198,157)]'>T E A M</h1>
                <h2 className='font-serif text-3xl font-medium text-black'>Our Talents </h2>
                <p className='font-serif text-md font-light text-black text-center'>Lorem ipsum, dolor sit amet consectetur
                    Suscipit nemo hic quos, ab,</p>
            </div>
            <div className='flex flex-col md:flex md:flex-row pt-5 gap-8 mt-6'>
                <TeamCard image={Group13} name='Pegg Legge' role='CEO' />
                <TeamCard image={Group21} name='Richad Guerra' role='CTO' />
                <TeamCard image={Group18} name='Alexandra Stolz' role='DESIGNER' />
                <TeamCard image={Group26} name='Janet Bray' role='DEVELOPER' />
            </div>

            <button className='bg-black w-28 font-sans text-sm font-semibold text-white py-2 rounded-lg mt-14'>View Team</button>

        </div>


    )
}

export default Section5
