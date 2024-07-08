import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-[rgb(116,198,157)] flex-row px-8 mt-6'>
            <div className='flex flex-col md:flex md:flex-row gap-3 pt-8 pb-8 place-items-center justify-between'>
                <div className='flex flex-row gap-4'>
                    <FaFacebookF className='text-xs text-white ' />
                    <FaInstagram className='text-xs text-white ' />
                    <FaTwitter className='text-xs text-white' />
                    <FaPinterestP className='text-xs text-white ' />
                    <FaTiktok className='text-xs text-white ' />
                    <FaWhatsapp className='text-xs text-white ' />
                    <FaYoutube className='text-xs text-white ' />
                </div>

                <h3 className='text-white font-sans text-sm font-light'>© Start, 2022. All rights reserved.</h3>

            </div>
        </div>
    )
}

export default Footer
