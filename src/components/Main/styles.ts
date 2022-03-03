import styled from "styled-components";

export const MainCss = styled.main`
  



  background-color: ${props => props.theme.colors.primary};
  
  h1{
    text-align: center;
  }

  section{
    display: flex;
    justify-content: space-around;
    padding: 14px;
    
  }

  article {

    background-color: gray;
    border: 1px solid black;
    box-shadow: 0.5px 0.5px 5px black;  
    border-radius: 5px;

    padding: 10px;
    animation: left-appear 2s;
    width: 30%;
  }

  img {

    width: 70%;
    height: 70%;
    max-width: 600px;
    min-width: 150px;
    animation: right-appear 2s;
    display: block;

    border: 1px solid black;
    box-shadow: 0.5px 0.5px 5px black;  
    border-radius: 5px;
  }

  .text{
    display: inline-block;

    background-color: red;
  }

  @keyframes right-appear{
    from{
      transform: translateX(30%);
      opacity: 0;
      width: 1%;
      height: 1%;
    } 

    to{
      transform: translateX(0);
      visibility: 100%;
      width: 70%;
      height: 70%;
    }

  }

  @keyframes left-appear{
    from{
      transform: translateX(-30%);
      opacity: 0;
    } 

    to{
      transform: translateX(0);
      visibility: 100%;
    }
  }

`;