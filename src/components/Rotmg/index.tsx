import type { NextPage } from "next";
import { Char } from "./styles.js";

export const Rotmg: NextPage = () => {
  return (
    <Char className="char">
      <div className="body">
        <div className="helmet">
          <div className="eyes" />
          <div className="noose" />
        </div>
        <div className="shield" />
        <div className="hand" />

        <div className="sword">
          <div className="hilt" />
        </div>

        <div className="left-leg" />
        <div className="rigth-leg" />

        <div className="bell">
          <div className="icon-bell" />
        </div>
      </div>
    </Char>
  );
};
