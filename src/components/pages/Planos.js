import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Planos () {
return(
<>
  <Header />
<h1 className="titulo">Conheça nossos planos!</h1>

<div class="card-deck">
  <div class="card-planos">
    <div class="card-body">
    <img class="card-img-top" src="../images/fitness5.webp" ></img>
      <h3 class="card-title">Plano Mensal</h3>
      <p class="card-text">Área de musculação e aeróbicos<img src="../images/check.png" alt="Check"></img><br></br>
      Zumba<img src="../images/check.png" alt="Check"></img></p>
      <p class="card-text"><small class="text-muted">Por Apenas<br></br> R$69,00 </small></p>
      <button class='botao_plano'><a><Link to="/cadastro">adquira já o seu</Link></a></button>
    </div>
  </div>
  <div class="card-planos">
    <div class="card-body">
    <img class="card-img-top" src="../images/fitness2.png" alt="Imagem de capa do card"></img>
      <h3 class="card-title">Plano Trimestral</h3>
      <p class="card-text">Área de musculação e aeróbicos<img src="../images/check.png" alt="Check"></img><br></br>
      zumba<img src="../images/check.png" alt="Check"></img><br></br>
      crossfit<img src="../images/check.png" alt="Check"></img><br></br>
      Fit GO (treinos online)<img src="../images/check.png" alt="Check"></img><br></br>
      Fit APP.<img src="../images/check.png" alt="Check"></img></p>
      <p class="card-text"><small class="text-muted">Por Apenas<br></br> R$149,00 </small></p>
      <button class='botao_plano'><a><Link to="/cadastro">adquira já o seu</Link></a></button>
    </div>
  </div>
  <div class="card-planos">
    <div class="card-body">
    <img class="card-img-top" src="../images/fitness6.webp" alt="Imagem de capa do card"></img>
      <h3 class="card-title">Plano semestral</h3>
      <p class="card-text1">Área de musculação e aeróbicos<img src="../images/check.png" alt="Check"></img><br></br>
      zumba<img src="../images/check.png" alt="Check"></img><br></br>
      crossfit<img src="../images/check.png" alt="Check"></img><br></br>
      Fit GO (treinos online)<img src="../images/check.png" alt="Check"></img><br></br>
      Fit APP.<img src="../images/check.png" alt="Check"></img><br></br>
      Leve amigos para treinar com você<img src="../images/check.png" alt="Check"></img></p>
      <p class="card-text1"><small class="text-muted">Por Apenas<br></br> R$239,99 </small></p>
      <button class='botao_plano'><a><Link to="/cadastro">adquira já o seu</Link></a></button>
    </div>
  </div>
  <div class="card-planos">
    <div class="card-body">
    <img class="card-img-top" src="../images/fitness7.webp" alt="Imagem de capa do card"></img>
      <h3 class="card-title">Plano Anual</h3>
      <p class="card-text1">Área de musculação e aeróbicos<img src="../images/check.png" alt="Check"></img><br></br>
      zumba<img src="../images/check.png" alt="Check"></img><br></br>
      crossfit<img src="../images/check.png" alt="Check"></img><br></br>
      Fit GO (treinos online)<img src="../images/check.png" alt="Check"></img><br></br>
      Fit APP.<img src="../images/check.png" alt="Check"></img><br></br>
      Leve amigos para treinar com você<img src="../images/check.png" alt="Check"></img><br></br>
      Personal Trainer e Acompanhamento Nutri<img src="../images/check.png" alt="Check"></img><br></br>
      Acesso a Piscina<img src="../images/check.png" alt="Check"></img><br></br>
      </p>
      <p class="card-text1"><small class="text-muted">Por Apenas<br></br> R$499,99 </small></p>
      <button class='botao_plano'><a><Link to="/cadastro">adquira já o seu</Link></a></button>
    </div>
  </div>
</div>



      <Footer />
</>
)
}


export default Planos;