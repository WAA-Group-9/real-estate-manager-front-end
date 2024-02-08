import React, {useEffect, useState} from 'react';
import ImageHolder from "../components/ImageHolder";
import TopPropertyTitle from "../components/TopPropertyTitle";
import PropertyInfo from "../components/PropertyInfo";
import Description from "../components/Description";
import ContactOwner from "../components/ContactOwner";
import AboutHouse from "../components/AboutHouse";
import Line from "../components/Line";
import Amenities from "../components/Amenities";

import MapBox from "../components/MapBox";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import TopHeader from "../components/Header/TopHeader";
import {findById} from "../network/NetworkCall";

function SingleProperty(props) {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        findById('properties', id)
            .then(response => {
                setProperty(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-xl">Error: {error.message}</p>;
    if (!property) return <p className="text-xl">Property not found!</p>;

    return (
        <div>
            <TopHeader
                styles="w-full h-[121px]  flex items-center justify-between px-6 border border-b-2 border-gray-100 shadow-sm"/>
            <div className=" flex flex-col justify-center items-center mt-20 ">
                <TopPropertyTitle title={property.title}/>
                <ImageHolder img={property.images}/>
                <div className="w-2/3 flex flex-auto">
                    <div className="w-3/5 flex-auto">
                        <PropertyInfo price={property.price} address={property.address} baths={2} beds={property.bedrooms} sqft={property.totalArea} owner={property.owner}/>
                        <AboutHouse title={property.propertyType}
                                    description="A common area with wifi that’s well-suited for working"/>
                        <AboutHouse title="Condominium"
                                    description="A common area with wifi that’s well-suited for working"/>
                        <AboutHouse title="Condominium"
                                    description="A common area with wifi that’s well-suited for working"/>
                        <Line/>
                        <Description description={property.description}/>
                        <Line/>
                        <Amenities amenities={property.amenities}/>
                        <MapBox latitude={property.address.latitude} longitude={property.address.longitude}/>

                    </div>
                    <div className="flex-auto w-2/5">
                        <ContactOwner/>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default SingleProperty;