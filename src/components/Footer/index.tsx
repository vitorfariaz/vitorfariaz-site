import type { NextPage } from "next";
import { useState } from "react";
import { Footer } from "./styles";

export const FooterV: NextPage = () => {
  const [state] = useState({
    name: "Vitor Farias",
    gitHub: "https://github.com/vitorfariaz",
    email: "vitorfariaz@outlook.com",
    linkedin: "https://www.linkedin.com/in/vitor-farias-a60760121/",
  });

  return (
    <Footer>
      <div className="social">
        <a href={state.gitHub} target="_blank" rel="noopener noreferrer">
          <img src="./in-icon.png" alt="linkedin icon" />
          
        </a>
          &nbsp;|&nbsp;

        <a href={state.linkedin} target="_blank" rel="noopener noreferrer">
          <img src="./insta-icon.png" alt="instagram icon" />
        </a>
      </div>

      <div className="copyright">
        Desenvolvido por <strong>{state.name}</strong>
      </div>
    </Footer>
  );
};
