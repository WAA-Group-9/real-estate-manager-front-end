import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import BedOrBathList from "../BedOrBathList";
import HomeType from "../HomeType";

const SearchBox = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isHomeTypeOpen, setIsHomeTypeOpen] = useState(false);
    const navigationRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navigationRef.current && !navigationRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsHomeTypeOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div  ref={navigationRef} className="h-[80px] mx-auto w-3/5 rounded-full border border-gray-300 shadow-xl flex items-center justify-between px-6 relative">
            <div className="flex h-full items-center">
                <input
                    className="pl-10 h-full bg-transparent text-black placeholder-gray-700 focus:outline-none w-2/5 transition duration-300 hover:bg-gray-100 border-gray-500 rounded-full cursor-pointer"
                    type="text"
                    placeholder="City, Neighborhood, Address, zip"
                />
                <div className="h-9 w-0.5 bg-gray-200 mx-4"></div>
                <input
                    className="pl-10 h-full bg-transparent text-black placeholder-gray-700 focus:outline-none w-1/6 transition duration-300 hover:bg-gray-100 border-gray-500 rounded-full cursor-pointer"
                    type="text"
                    placeholder="Budget"
                />
                <div className="h-9 w-0.5 bg-gray-200 mx-4">{isOpen && (<BedOrBathList />)}</div>
                <input
                    className="pl-10 h-full bg-transparent text-black placeholder-gray-700 focus:outline-none w-1/6 transition duration-300 hover:bg-gray-100 border-gray-500 rounded-full cursor-pointer"
                    type="text"
                    placeholder="Beds & Bath"
                    onClick={() => setIsOpen(!isOpen)}
                />

                <div className="h-9 w-0.5 bg-gray-200 mx-4">{isHomeTypeOpen && (<HomeType />)}</div>
                <input
                    className="pl-10 h-full bg-transparent text-black placeholder-gray-700 focus:outline-none w-1/6 transition duration-300 hover:bg-gray-100 border-gray-500 rounded-full cursor-pointer"
                    type="text"
                    placeholder="Home Type"
                    onClick={() => setIsHomeTypeOpen(!isHomeTypeOpen)}
                />
            </div>
            <button className="w-[59px] h-[59px] rounded-full bg-green-500 transition duration-300 hover:bg-green-600">
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </button>

        </div>
    );
};

export default SearchBox;
