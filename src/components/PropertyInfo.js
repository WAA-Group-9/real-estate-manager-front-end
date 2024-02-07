import React from 'react';
import Line from "./Line";

const PropertyInfo = ({price, address, beds, baths, sqft}) => {
    return (
        <div className=" bg-transparent  mt-9 ">
            <div className="flex  w-full">
                <div className="flex-auto text-left w-1/2 ">
                    <div className="text-4xl font-bold">$45000{price}</div>
                    <div className="text-xl ">123 wilson creek blvd, Mckinney texas{address}</div>
                </div>
                <div className="flex-auto text-center ">
                    <div className="text-4xl font-bold ">2{beds}</div>
                    <div className="text-xl">Beds</div>
                </div>
                <div className="flex-auto text-center">
                    <div className="text-4xl font-bold ">2{baths}</div>
                    <div className="text-xl">Baths</div>
                </div>
                <div className="flex-auto text-center">
                    <div className="text-4xl font-bold ">4020{sqft}</div>
                    <div className="text-xl">Sqft</div>
                </div>
            </div>
            <div className="w-full mt-9 ">
                <Line />
                <div className="flex flex-auto  mt-7 mb-7">
                    <img src="/asset/img/profile.jpg" alt="User Photo" className="h-14 w-14 rounded-full"/>
                    <div className=" ml-7">
                        <p className="text-xl font-bold">Username</p>
                        <p className="text-lg text-gray-500">Register Date</p>
                    </div>

                </div>
                <Line />
            </div>
        </div>
    );
};

export default PropertyInfo;
