import React, {useEffect, useState} from 'react';
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
import {useParams} from "react-router-dom";
import async from "async";

function SingleProperty(props) {

    const {id} = useParams()
    const [data, setData] = useState([
        {
            id: 1,
            img: [{id: 1, link: "/asset/img/1.webp"}, {id: 1, link: "/asset/img/2.webp"}, {
                id: 1,
                link: "/asset/img/3.webp"
            }, {id: 1, link: "/asset/img/4.webp"},{id: 1, link: "/asset/img/5.webp"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 200000,
            description: "there is Ac system it cool though come and join us"
        },
        {
            id: 2,
            img: [{id: 1, link: "/asset/img/home.jpg"}, {id: 1, link: "/asset/img/home.jpg"}, {
                id: 1,
                link: "/asset/img/home.jpg"
            }, {id: 1, link: "/asset/img/home.jpg"},{id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 200000,
            description: "there is Ac system it cool though come and join us"
        },
        {
            id: 3,
            img: [{id: 1, link: "/asset/img/home.jpg"}, {id: 1, link: "/asset/img/home.jpg"}, {
                id: 1,
                link: "/asset/img/home.jpg"
            }, {id: 1, link: "/asset/img/home.jpg"},{id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 200000,
            description: "there is Ac system it cool though come and join us"
        },
        {
            id: 4,
            img: [{id: 1, link: "/asset/img/home.jpg"}, {id: 1, link: "/asset/img/home.jpg"}, {
                id: 1,
                link: "/asset/img/home.jpg"
            }, {id: 1, link: "/asset/img/home.jpg"},{id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 5000000,
            description: "there is Ac system it cool though come and join us"
        },
        {
            id: 5,
            img: [{id: 1, link: "/asset/img/home.jpg"}, {id: 1, link: "/asset/img/home.jpg"}, {
                id: 1,
                link: "/asset/img/home.jpg"
            }, {id: 1, link: "/asset/img/home.jpg"},{id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 40000000,
            description: "there is Ac system it cool though come and join us"
        },
        {
            id: 6,
            img: [{id: 1, link: "/asset/img/home.jpg"}, {id: 1, link: "/asset/img/home.jpg"}, {
                id: 1,
                link: "/asset/img/home.jpg"
            }, {id: 1, link: "/asset/img/home.jpg"},{id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 6000000,
            description: "there is Ac system it cool though come and join us"
        },
        {
            id: 7,
            img: [{id: 1, link: "/asset/img/home.jpg"}, {id: 1, link: "/asset/img/home.jpg"}, {
                id: 1,
                link: "/asset/img/home.jpg"
            }, {id: 1, link: "/asset/img/home.jpg"},{id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 200000,
            description: "there is Ac system it cool though come and join us"
        },
        {
            id: 8,
            img: [{id: 1, link: "/asset/img/home.jpg"}, {id: 1, link: "/asset/img/home.jpg"}, {
                id: 1,
                link: "/asset/img/home.jpg"
            }, {id: 1, link: "/asset/img/home.jpg"},{id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 200000,
            description: "there is Ac system it cool though come and join us"
        }
    ])
    // useEffect(() => {
    const selectedProperty = data.find(prop => prop.id === parseInt(id));

    // }, [id, data])

    console.log(id)
    console.log(selectedProperty)
    return (
        <div>
            <Header/>
            <div className=" flex flex-col justify-center items-center mt-20">
                <TopPropertyTitle/>
                <ImageHolder img={selectedProperty.img}/>
                <div className="w-2/3 flex flex-auto">
                    <div className="w-3/5 flex-auto">
                        <PropertyInfo/>
                        <AboutHouse title="Condominium"
                                    description="A common area with wifi that’s well-suited for working"/>
                        <AboutHouse title="Condominium"
                                    description="A common area with wifi that’s well-suited for working"/>
                        <AboutHouse title="Condominium"
                                    description="A common area with wifi that’s well-suited for working"/>
                        <Line/>
                        <Description/>
                        <Line/>
                        <Amenities/>
                        <MapBox latitude="8.953414060751477" longitude="38.74833860696266"/>

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