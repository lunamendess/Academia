import styled from "styled-components";

export const AreaHeader = styled.div`
  height: 10% ;
  background-color: Black;
  wrap:no-wrap;
  color: #fff;
  max-width: 100vw;
  max-height: 100vh;

  .container {
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }
  .logo {
    flex: 1;
    display:flex;
    align-items: center;
    gap:10px
    }

    .logo a{
      text-decoration:none;
      color:inherit
    }

 

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  nav {
    ul {
      display: flex;
    }
    li {
      list-style: none;
      margin-left: 20px;
    }
    a{
            text-decoration:none;
            color:inherit
    }
  }
`;
