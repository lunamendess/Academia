import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";
import { CardClasses } from "../Cards/Cards";
import './estilopages.css'


function Home () {
return(
<>
  <Header />

        <div className="resumo">
          <h1> Venha conhecer a nossa rede de Academias!</h1>
          <h2>Equipamentos de última geração e muitas atividades para você alcançar o seu objetivo.</h2>
          </div>

    <CardClasses/>
          
      <Footer />
      </>
)
}


export default Home;