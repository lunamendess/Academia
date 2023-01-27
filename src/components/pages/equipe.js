import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Read from "./users";

const equipe = () =>{
    return(
        <>
        <Header />
            <Read />
        <Footer/>
        </>
    )
}
export default equipe