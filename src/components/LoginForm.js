import React, {useRef} from 'react';
import {Link} from "react-router-dom";

const LoginForm = () => {
    const username = useRef()
    const password = useRef()

    const login=()=>{
        alert("under construction need back-end")
    }
    return (
        <div className="w-2/6 rounded-lg border border-gray-400 shadow-md">
            <div className="flext items-center text-center shadow-md  h-24 mb-8">
                <p className="text-xl font-bold pt-8">Log in or sign up</p>
            </div>
            <div className="p-8">
                <p className="text-3xl font-bold mb-8">Welcome to Group 9</p>
                <div className="mb-8">
                    <input
                        ref={username}
                        type="text"
                        className="w-full h-20 border border-gray-400 rounded-t-lg px-4 text-xl"
                        placeholder="Email"
                    />
                    <input
                        ref={password}
                        type="password"
                        className="w-full h-20 border border-gray-400 rounded-b-lg px-4 text-xl mt-0"
                        placeholder="Password"
                    />
                </div>

                <button className="w-full h-20 rounded-xl bg-green-500 text-white text-lg active: p-3">
                    Login
                </button>
                <div className=" mt-4 flex justify-end">
                    <p className=" text-lg right-0">No account? <span className="text-green-500"><Link to="/signup">Create one!</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default LoginForm;