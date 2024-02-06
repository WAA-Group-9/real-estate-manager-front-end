import React from 'react';

const TopHeader = () => {
    const Tab = ({ text }) => {
        return <div className="mx-4 text-gray-700 transition duration-500 hover:text-green-500 cursor-pointer">{text}</div>;
    };
    return (
        <div className="w-full h-[121px]  flex items-center justify-between px-6">
            <div className="flex items-center">
                <img
                    src="/asset/img/logo.png"
                    alt="Logo"
                    className="h-12 w-auto"
                />
            </div>
            <div className="flex items-center">
                <Tab text="Home" />
                <Tab text="Products" />
                <Tab text="About" />
                <Tab text="Contact" />
            </div>
            <div className="ml-4">
                <img
                    src="/asset/img/profile.jpg"
                    alt="User Icon"
                    className="h-12 w-12 rounded-full"
                />
            </div>
        </div>
    );

};

export default TopHeader;
