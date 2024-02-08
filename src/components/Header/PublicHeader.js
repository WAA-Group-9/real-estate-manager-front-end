import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
const TopHeader = () => {

    return (
        <div className="w-full h-[121px]  flex items-center justify-between px-6 border border-b-2 border-gray-100 shadow-sm">
            <div className="flex items-center">
                <img
                    src="/asset/img/logo.png"
                    alt="Logo"
                    className="h-12 w-auto"
                />
            </div>
            <div className="ml-4">
                <div className="h-12 w-12 rounded-full bg-gray-400"><i className="relative fas fa-user scale-[1.5] top-3 left-4 text-white"/></div>
            </div>
        </div>
    );

};

export default TopHeader;
