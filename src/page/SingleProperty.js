import React from 'react';
import Header from "../components/Header/Header";
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

function SingleProperty(props) {
    return (
        <div>
            <Header/>
            <div className=" flex flex-col justify-center items-center mt-20">
                <TopPropertyTitle/>
                <ImageHolder/>
                <div className="w-2/3 flex flex-auto">
                    <div className="w-3/5 flex-auto">
                        <PropertyInfo/>
                        <AboutHouse title="Condominium" description="A common area with wifi that’s well-suited for working"/>
                        <AboutHouse title="Condominium" description="A common area with wifi that’s well-suited for working"/>
                        <AboutHouse title="Condominium" description="A common area with wifi that’s well-suited for working"/>
                        <Line />
                        <Description/>
                        <Line />
                        <Amenities />
                        <MapBox latitude="8.953414060751477" longitude="38.74833860696266" />

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