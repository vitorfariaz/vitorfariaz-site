import styled from "styled-components";

export const Char = styled.div`
  --steel-color: white;
  --str-gray: #333333;
  --shield-color: #666363;
  --body-color: gray;


  margin: auto;
  background-color: ${props => props.theme.colors.primary}; // #E4E0E0;

  height: 8rem;
  
  .body {
    background-color: var(--body-color);
    width: 5rem;
    height: 7rem;
    margin-left: 1rem;
    margin: auto;
    margin-bottom: 16px;

  }

  .left-leg {

    background-color: var(--str-gray);
    width: 1rem;
    height: 1rem;
    position: absolute;
    
    margin-top: 7rem;
    margin-left: 0rem;
  }

  .rigth-leg {
    background-color: var(--str-gray);
    width: 1rem;
    height: 1rem;
    position: absolute;
    margin-top: 7rem;
    margin-left: 4rem;

  }

  .bell {
    background-color: var(--str-gray);
    width: 5rem;
    height: 1rem;
    position: absolute;
    margin-top: 5rem;
  }

  .icon-bell {
    background-color: var(--steel-color);
    position: absolute;
    width: 1rem;
    height: 1rem;

    margin-top: 0rem;
    margin-left: 2rem;
  }

  .helmet{
    background-color: var(--steel-color);
    position: absolute;
    height: 3rem;
    width: 5rem;
    margin-top: 1rem;
  }

  .eyes{
    background-color: var(--str-gray);
    position: absolute;
    height: 1rem;
    width: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
  }

  .noose{
    background-color: var(--str-gray);
    position: absolute;
    height: 1rem;
    width: 1rem;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  .hand{
    background-color: var(--body-color);
    position: absolute;
    height: 1rem;
    width: 1rem;
    margin-top: 4rem;
    margin-left: 5rem;
  }

  .sword{
    background-color: var(--body-color);
    position: absolute;
    height: 5rem;
    width: 1rem;
    margin-top: 0rem;
    margin-left: 6rem;
    border: 0.5px solid black;
  }

  .sword > .hilt{
    background-color: var(--steel-color);
    position: absolute;
    height: 1rem;
    width: 1rem;
    margin-top: 4rem;
  }

  .shield{
    background-color: var(--shield-color);
    position: absolute;
    height: 3rem;
    width: 3rem;
    margin-top: 4rem;
    margin-left: -1rem;
    z-index: 1;
    border: 0.5px solid black;
  }

`;