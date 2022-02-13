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
    margin-right: 10px;
    padding: 10px;
  }

  img {
    animation: right-appear 2s;
    width: 70%;
    height: 70%;
    max-width: 800px;
    min-width: 200px;
  }

  @keyframes right-appear{
    from{
      transform: translateX(100%);
      opacity: 0;
    }  
    to{
      transform: translateX(0);
      visibility: 100%;
    }

  }


`;