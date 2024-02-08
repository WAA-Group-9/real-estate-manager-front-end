import React from 'react';
import SearchBox from "./SearchBox";
import TopHeader from "./TopHeader";

const Header = () => {
    return (
        <header className="w-full h-[222px] bg-white border border-gray-300 shadow-sm relative">
            <TopHeader styles="w-full h-[121px]  flex items-center justify-between px-6"/>
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-6">
                <SearchBox />
            </div>
        </header>
    );
};

export default Header;
