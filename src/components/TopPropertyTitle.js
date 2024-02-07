import React from 'react';
import HeartIcon from "../SvgIcon/HeartIcon";
import ShareIcon from "../SvgIcon/ShareIcon";

const TopPropertyTitle = () => {
    return (
        <div className="w-2/3 bg-transparent  pb-7 flex items-center justify-between">
            <h1 className="text-4xl">Title</h1>
            <div className="flex items-center">
                <button className="flex items-center mr-4">
                    <ShareIcon/>
                    <span>Share</span>
                </button>
                <button className="flex items-center">
                    <HeartIcon className="h-6 w-6 p-0.5 mr-1"/>
                    <span>Save</span>
                </button>
            </div>
        </div>
    );
};

export default TopPropertyTitle;
