import React , {useState} from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {FaFacebook, FaPinterest, FaYoutube, FaInstagram, FaTwitter} from "react-icons/fa"


const Navbar = () => {

    const [nav , setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }


  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white ">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"} >BEACHES</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>

      <div className=" hidden md:flex">
        <BiSearch className=" icon mr-2" />
        <BsPerson className="icon ml-2" />
      </div>
      <div onClick={handleNav} className=" md:hidden z-10">
        {nav ? <AiOutlineClose className="text-white" size={25}/> : <HiOutlineMenuAlt4 className="text-white font-bold " size={25} />}
        
      </div>

      <div onClick={handleNav} className={nav ? "absolute left-0 top-0 w-full bg-gray-600/90 px-4 flex flex-col" : "hidden"} >
        <ul>
            <h1>BEACHES</h1>
            <li className="border-b" >Home</li>
            <li className="border-b" >Destinations</li>
            <li className="border-b" >Travel</li>
            <li className="border-b" >View</li>
            <li className="border-b" >Book</li>
            <div className="flex flex-col " >
                <button className="my-4" >Search</button>
                <button>Account</button>
            </div>
            <div className="flex my-6 justify-between " >
                <FaFacebook className="icon" />
                <FaYoutube className="icon" />
                <FaInstagram className="icon" />
                <FaTwitter className="icon" />
                <FaPinterest className="icon" />

            </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
