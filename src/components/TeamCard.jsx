import React from 'react'

const TeamCard = (props) => {
    return (

        <div className=' border border-gray-100 shadow-lg shadow-gray-400 flex flex-col gap-2 '>
            <div className=' ml-10 mr-10 mt-4 mb-4 '>
                <div className='flex flex-col place-items-center'>
                    <img src={props.image} alt='team' className='object-contain rounded-full h-36 w-36 border border-black'></img>
                </div>

            </div>
            <h2 className='font-serif text-md font-medium text-black mx-6'>{props.name}</h2>
            <p className='font-sans text-xs font-extralight text-black mx-6 pb-4'>{props.role} </p>
        </div>




    )
}

export default TeamCard
