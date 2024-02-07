import React from 'react';

const TopHeader = () => {

    return (
        <div className="w-full h-[121px]  flex items-center justify-between border border-gray-300 shadow-sm">
            <div className="flex items-center">
                <img
                    src="/asset/img/logo.png"
                    alt="Logo"
                    className="h-12 w-auto"
                />
            </div>
        </div>
    );

};

export default TopHeader;
