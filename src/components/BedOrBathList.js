import React from 'react';
import NumberInput from "./NumberInput";

const BedOrBathList = () => {
    return (
        <div
            className="absolute top-24 bottom-0 h-52 w-80 rounded-lg  bg-white border border-gray-300 shadow-xl p-2 animate-fadeIn z-20">
            <ul className="list-none p-0">
                <li className="h-10 text-lg text-center"> <NumberInput title="Bed"/></li>
                <li className="h-10 text-lg text-center"> <NumberInput title="Bath"/></li>
            </ul>
        </div>
    );
};

export default BedOrBathList;
