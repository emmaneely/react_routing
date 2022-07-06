import React from "react";
import logo from "../Studio_Ghibli_logo.png"

export const HomeView = (props) => {
    return (
        <main>
            <h1>Home</h1>
            <img src={logo} alt="Studio Ghibli Logo" width={960} height={460} />
        </main>
    );
};