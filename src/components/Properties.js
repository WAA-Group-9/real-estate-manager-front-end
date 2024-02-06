import React, {useState} from 'react';
import Property from "./Property";

function Properties(props) {
    const [data, setData] = useState([
        {
            id: 1,
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
            price: 200000,
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
            price: 200000,
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
            price: 200000,
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
        <div className="w-full p-20 inline-block">
            {data && data.map(response =>
                <Property key={response.id} img={response.img} title={response.title} address={response.address}
                          price={response.price} description={response.description}/>
            )}
        </div>
    );
}

export default Properties;