import React from 'react';
import ShowMoreIcon from "../SvgIcon/ShowMoreIcon";

const ImageHolder = () => {
    return (
            <div className="w-2/3 h-[400px] rounded-3xl shadow-md overflow-hidden relative">
                <div className="w-1/2 h-full float-left">
                    <img src="/asset/img/home.jpg" alt="First" className="w-full h-full object-cover rounded-l-3xl"/>
                </div>
                <div className="w-1/2 h-full flex flex-wrap">
                    <div className="w-1/2 h-1/2 pb-1 pl-2 ">
                        <img src="/asset/img/home.jpg" alt="Second"
                             className="w-full h-full object-cover rounded-tl-30"/>
                    </div>
                    <div className="w-1/2 h-1/2 pb-1 pl-2">
                        <img src="/asset/img/home.jpg" alt="Third"
                             className="w-full h-full object-cover rounded-tr-30"/>
                    </div>
                    <div className="w-1/2 h-1/2 pt-1 pl-2 ">
                        <img src="/asset/img/home.jpg" alt="Fourth"
                             className="w-full h-full object-cover rounded-bl-30"/>
                    </div>
                    <div className="w-1/2 h-1/2 pt-1 pl-2">
                        <img src="/asset/img/home.jpg" alt="Fifth"
                             className="w-full h-full object-cover rounded-br-30"/>
                    </div>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center">
                    <button className="bg-white border border-black px-4 py-2 rounded flex items-center active:p-2">
                        <ShowMoreIcon/>
                        <span className="text-sm ml-2">Show all photos</span>
                    </button>
                </div>
            </div>
    );
};

export default ImageHolder;
