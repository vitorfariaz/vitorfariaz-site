import styled from "styled-components";

export const Char = styled.div`
  --steel-color: white;
  --str-gray: #333333;

  background-color: #E4E0E0;;
  height: 8rem;
  
  .body {
    background-color: gray;
    width: 5rem;
    height: 7rem;
    margin-left: 1rem;
    margin: auto;
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
    background-color: #333333;
    width: 5rem;
    height: 1rem;
    position: absolute;
    margin-top: 5rem;
  }

  .icon-bell {
    background-color: white;
    position: absolute;
    width: 1rem;
    height: 1rem;

    margin-top: 0rem;
    margin-left: 2rem;
  }
  .helmet{
    background-color: white;
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
    background-color: gray;
    position: absolute;
    height: 1rem;
    width: 1rem;
    margin-top: 4rem;
    margin-left: 5rem;
  }

  .sword{
    background-color: gray;
    position: absolute;
    height: 5rem;
    width: 1rem;
    margin-top: 0rem;
    margin-left: 6rem;
  }

  .sword > .hilt{
    background-color: white;
    position: absolute;
    height: 1rem;
    width: 1rem;
    margin-top: 4rem;
  }

  .shield{
    background-color: #666363;
    position: absolute;
    height: 3rem;
    width: 3rem;
    margin-top: 4rem;
    margin-left: -1rem;
    z-index: 1;

  }

`;