import React from "react";
import { Link } from "react-router-dom";

import { AreaHeader } from "./styled";

function Header() {
  return (
    <>
      <AreaHeader>
        <div className="container">
          <div className="logo">
            <img src="../images/logo.jpg" alt="Logo Lcpc fit"></img>
            <a><Link to="/">LCPC FIT</Link></a>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/">
                Home
                </Link>
              </li>
              <li>
                <Link to ="/planos">
                  Planos
                </Link>
              </li>
              {/* <li>
                <Link to ="/equipe">
                  Nossa Equipe
                </Link>
              </li> */}
              <li>
                <Link to ="/cadastro">
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </AreaHeader>
    </>
  );
}
export default Header;
