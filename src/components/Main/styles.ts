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

  .article {
    margin-left: 5%;
    padding: 10px;
    animation: left-appear 2s;
  }

  img {
    margin-right: 5%;
    width: 70%;
    height: 70%;
    max-width: 800px;
    min-width: 150px;
    animation: right-appear 2s;
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