import React from 'react';

function Description({title,description}) {
    return (
        <div className="flex-auto text-left  mt-7 mb-7">
            <div className="text-4xl  text-justify font-bold mb-7">What's special{title}</div>
            <div className="text-xl text-justify">if you have an appreciation for the arts our house is it . Our home is redone to incorporate local artistry. Wrap around deck & open floor plan. Master has its own deck on river. Enjoy the evening watching boats or in hot tub on deck. Washer, dryer, fully equipped kitchen, 2 stall garage. Wood & gas fire pits. Pet friendly for up to 2 well behaved puppies.Must register. 2 Kayaks for the water. Use at own risk. 15 minutes from Peoria. Private access to water. Come enjoy the artistic surroundings!{description}</div>
        </div>
    );
}

export default Description;