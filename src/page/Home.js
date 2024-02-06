import React from 'react';
import Header from "../components/Header";
import Property from "../components/Property";
import Properties from "../components/Properties";

function Home(props) {
    return (
        <div>
            <Header />
            <Properties />
        </div>
    );
}

export default Home;