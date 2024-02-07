import React, {useRef} from 'react';
import MessageIcon from "../SvgIcon/MessageIcon";

function ContactOwner(props) {
    const containerRef =useRef();
    return (
        <div className="w-full pt-7 pl-7" ref={containerRef}>
            <div className="w-full border border-gray-200 shadow-md rounded-xl mx-auto p-7">
                <button className="flex justify-center items-center w-full h-16 bg-green-500 text-white rounded-lg mx-auto my-3   ">
                    <MessageIcon/>
                    <span>Contact Owner</span>
                </button>
            </div>
        </div>
    );
}

export default ContactOwner;