import React, {useState} from 'react';
import Property from "./Property";


function Properties(props) {

    const [data, setData] = useState([
        {
            id: 1,
            img: [{id: 1, link: "/asset/img/1.webp"}, {id: 1, link: "/asset/img/2.webp"}, {
                id: 1,
                link: "/asset/img/3.webp"
            }, {id: 1, link: "/asset/img/4.webp"}],
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
            }, {id: 1, link: "/asset/img/home.jpg"}],
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
            }, {id: 1, link: "/asset/img/home.jpg"}],
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
            }, {id: 1, link: "/asset/img/home.jpg"}],
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
            }, {id: 1, link: "/asset/img/home.jpg"}],
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
            }, {id: 1, link: "/asset/img/home.jpg"}],
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
            }, {id: 1, link: "/asset/img/home.jpg"}],
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
            }, {id: 1, link: "/asset/img/home.jpg"}],
            title: "Muscoda",
            address: "123 wilson Mckinney Tx",
            price: 200000,
            description: "there is Ac system it cool though come and join us"
        }
    ])

    return (
        <div className="w-full p-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4" >
            {data && data.map(response =>
                <Property key={response.id}  id={response.id} img={response.img} title={response.title} address={response.address}
                          price={response.price} description={response.description}/>
            )}
        </div>
    );
}

export default Properties;