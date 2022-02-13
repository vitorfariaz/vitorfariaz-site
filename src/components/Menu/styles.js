import styled from "styled-components";
import Theme from '../../foundation/Theme.js';

export const MenuCss = styled.nav`
  background-color:  #333333; // ${props => props.theme.primary};
  height: 4rem;
  color: #FFFFFF; // ${Theme.primaryContrast};
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;

  a {
    display: inline-block;

    /* centralize menus */
    margin-top: 1rem;
  }
`;