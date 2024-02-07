import React from 'react';

const RegisterForm = () => {
    return (
        <div className="w-2/6 rounded-lg border border-gray-400 shadow-md">
            <div className="flext items-center text-center shadow-md  h-24 mb-8">
                <p className="text-xl font-bold pt-8">sign up or Log in</p>
            </div>
            <div className="p-8">
                <p className="text-3xl font-bold mb-8">Welcome to Group 9</p>
                <div className="mb-8">
                    <input
                        type="text"
                        className="w-full h-20 border border-gray-400 rounded-t-lg px-4 text-lg"
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        className="w-full h-20 border border-gray-400  px-4 text-lg"
                        placeholder="Last name"
                    />
                    <input
                        type="text"
                        className="w-full h-20 border border-gray-400  px-4 text-lg"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        className="w-full h-20 border border-gray-400  px-4 text-lg"
                        placeholder="Phone"
                    />
                    <input
                        type="password"
                        className="w-full h-20 border border-gray-400 rounded-b-lg px-4 text-lg mt-0"
                        placeholder="Password"
                    />
                </div>
                <button className="w-full h-20 rounded-xl bg-green-500 text-white text-lg active: p-3">
                    Signup
                </button>
            </div>
        </div>
    );
};


export default RegisterForm;