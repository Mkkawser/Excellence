import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import { BsCart } from "react-icons/bs";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';



const Navbar = () => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <div className="bg-[#ececec] flex items-center justify-between p-2">
                {/* logo */}
                <div className="w-[15vw]">
                    <Link to={'/'}>
                        <img src="/images/LOGO.webp" alt="" />
                    </Link>
                </div>

                {/* Menu */}
                <div className="flex items-center mr-4 gap-4 uppercase">
                    <Link to={'/phone'} >Phone</Link>
                    <Link to={'/laptop'} >Laptop</Link>
                    <Link to={'/gamming'} >Gamming</Link>
                    <Link to={'/accessories'} >Accessories</Link>
                    <Link to={'/blog'} >Blog</Link>

                    <button onClick={() => setVisible(true)} >
                        <BsCart />
                    </button>

                    <Sidebar position='right' visible={visible} onHide={() => setVisible(false)}>
                        <img className='w-[40vw] mx-auto' src="/images/logo-sidebar.webp" alt="sidebar logo" />

                        <div className="pt-4">
                            <p>Order Summary</p>
                        </div>
                        {/*List Of All Product*/}
                        <div>
                            <p>Huananzhi B250-D4 6/7/8/9th Generation WiFi Intel Motherboard with Pre-Installed Windows * 1</p>
                            <p>7000 BDT</p>
                        </div>
                        <div className="bg-[red] text-white w-[20vw] mx-auto align-center">
                            <button>Cart</button>
                        </div>
                    </Sidebar>

                </div>
            </div >
        </>
    )
}

export default Navbar