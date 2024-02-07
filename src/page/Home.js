import React from 'react';
import Header from "../components/Header/Header";
import Property from "../components/Property";
import Properties from "../components/Properties";
import Footer from "../components/Footer";

function Home(props) {
    return (
        <div>
            <Header />
            <Properties />
            <Footer/>
        </div>
    );
}

export default Home;