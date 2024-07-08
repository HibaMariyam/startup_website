import React from 'react'

const Drawer = () => {
    return (

        <ul className="flex flex-col gap-2 p-4">
            <li><a href="#" className="text-black font-sans text-lg   ">Home</a></li>
            <hr></hr>
            <li><a href="#" className="text-black text-lg font-sans ">About</a></li>
            <hr></hr>
            <li><a href="#" className="text-black text-lg font-sans ">Services</a></li>
            <hr></hr>
            <li><a href="#" className="text-black text-lg font-sans ">Portfolio</a></li>
        </ul>

    )
}

export default Drawer
