import React from 'react'
import Borabora from "../assets/borabora.jpg"
import Maldives from "../assets/maldives.jpg"
import Maldives2 from "../assets/maldives2.jpg"
import KeyWest from "../assets/keywest.jpg"
import Borabora2 from "../assets/borabora2.jpg"
const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
            <img src={Maldives} />
            <div className=" bg-gray-900/30 top-0 left-0 w-full absolute h-full">
                <p className="left-4 bottom-4 text-2xl text-white absolute" >Maldives</p>
            </div>

        </div>
        <div className="relative">
            <img src={Maldives2} />
            <div className=" bg-gray-900/30 top-0 left-0 w-full absolute h-full">
                <p className="left-4 bottom-4 text-2xl text-white absolute" >Cozumel</p>
            </div>

        </div>
        <div className="relative">
            <img src={Borabora} />
            <div className=" bg-gray-900/30 top-0 left-0 w-full absolute h-full">
                <p className="left-4 bottom-4 text-2xl text-white absolute" >Grade Antique</p>
            </div>

        </div>
        <div className="relative">
            <img src={Borabora2} />
            <div className=" bg-gray-900/30 top-0 left-0 w-full absolute h-full">
                <p className="left-4 bottom-4 text-2xl text-white absolute" >BoraBora</p>
            </div>

        </div>
        <div className="relative">
            <img src={KeyWest} />
            <div className=" bg-gray-900/30 top-0 left-0 w-full absolute h-full">
                <p className="left-4 bottom-4 text-2xl text-white absolute" >Key West</p>
            </div>

        </div>
    </div>
    
  )
}

export default Selects