import React, {useEffect, useState} from 'react';
import Property from "./Property";
import {find} from "../network/NetworkCall";
import login from "../page/Login";


function Properties(props) {

    const [property, setProperty] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("hello")
        find('properties').then(response => {
            console.log(response.data)
            setProperty(response.data)
        }).catch(error => setError(error))
    }, [])

    if (error)
        return (<div className="flex flex-col justify-center items-center mt-36 mb-48">
            <p className="text-xl">There is no Property</p>
        </div>)

    return (
        <div
            className="w-full p-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {property && property.map(response =>
                <Property key={response.id} id={response.id} images={response.images} title={response.title}
                          address={response.address}
                          price={response.price} description={response.description}/>
            )}
        </div>
    );
}

export default Properties;