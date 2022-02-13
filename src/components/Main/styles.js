import styled from "styled-components";

export const MainCss = styled.main`
  
background-color: ${props => props.theme.colors.primary};
text-align: center;
 
img {
  margin: auto;
  width: 70%;
  max-width: 800px;
  min-width: 320px;
}

h1{
  text-align: center;
}
`;