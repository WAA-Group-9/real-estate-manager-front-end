import React from 'react';
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import PublicHeader from "../components/Header/PublicHeader";

function Login(props) {

    return (
        <div>
            <PublicHeader/>
            <div className=" flex flex-col justify-center items-center mt-20">
                <LoginForm/>
            </div>

            <Footer/>
        </div>
    );
}

export default Login;