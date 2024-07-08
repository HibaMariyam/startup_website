// import React, { useState } from 'react';
// import Group1 from '../assets/images/Group 1.png';
// import { RiMenuFill, RiCloseFill } from "react-icons/ri";
// import Drawer from './Drawer';

// const NavBar = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//     const handleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     return (
//         <div className='w-full place-items-center'>
//             <nav id="navbar" className='flex  justify-between w-full bg-[#74C69D] py-4 place-items-center px-20'>
//                 <div className='flex flex-row items-center gap-3 text-3xl mt-4'>
//                     <img src={Group1} alt="logo" className='w-14' />
//                     <span className='font-sans text-white'>Start</span>
//                 </div>
//                 <ul className="gap-8 hidden md:flex items-center">
//                     <li><a href="#" className="text-white font-sans text-md hover:border-b-4 hover:border-white pb-1">Home</a></li>
//                     <li><a href="#" className="text-white text-md font-sans hover:border-b-4 hover:border-white pb-1">About</a></li>
//                     <li><a href="#" className="text-white text-md font-sans hover:border-b-4 hover:border-white pb-1">Services</a></li>
//                     <li><a href="#" className="text-white text-md font-sans hover:border-b-4 hover:border-white pb-1">Portfolio</a></li>
//                 </ul>
//                 <div className='flex md:hidden ' onClick={handleDrawer}>
//                     {isDrawerOpen ? <RiCloseFill className='text-3xl text-white' /> : <RiMenuFill className='text-3xl text-white' />}
//                 </div>
//             </nav>

//             <div
//                 className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-300  ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}  duration-300 ease-in-out`}
//             >
//                 <Drawer />
//             </div>
//         </div>
//     );
// }

// export default NavBar;

import React, { useState, useEffect, useRef } from 'react';
import Group1 from '../assets/images/Group 1.png';
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import Drawer from './Drawer';

const NavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerRef = useRef(null);

    const handleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target))
        //event.target refers to the DOM element that triggered the event (in this case, a click event).
        {
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        if (isDrawerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            //mousedown is used to detect when a mouse button is pressed down
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDrawerOpen]);

    return (
        <div className='w-full'>
            <nav id="navbar" className='flex justify-between w-full bg-[#74C69D] py-4 items-center px-20'>
                <div className='flex flex-row items-center gap-3 text-3xl mt-4'>
                    <img src={Group1} alt="logo" className='w-14' />
                    <span className='font-sans text-white'>Start</span>
                </div>
                <ul className="gap-8 hidden md:flex items-center">
                    <li><a href="#" className="text-white font-sans text-md hover:border-b-4 hover:border-white pb-1">Home</a></li>
                    <li><a href="#" className="text-white text-md font-sans hover:border-b-4 hover:border-white pb-1">About</a></li>
                    <li><a href="#" className="text-white text-md font-sans hover:border-b-4 hover:border-white pb-1">Services</a></li>
                    <li><a href="#" className="text-white text-md font-sans hover:border-b-4 hover:border-white pb-1">Portfolio</a></li>
                </ul>
                <div className='flex md:hidden ' onClick={handleDrawer}>
                    {isDrawerOpen ? <RiCloseFill className='text-3xl text-white' /> : <RiMenuFill className='text-3xl text-white' />}
                </div>
            </nav>

            <div
                ref={drawerRef}
                className={`fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-300 ${isDrawerOpen ? '-translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}
            >
                <Drawer />
            </div>
        </div>
    );
}

export default NavBar;
