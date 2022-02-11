import type { NextPage } from "next";
import { useState } from "react";
import { Footer } from "./styles.js";

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
          Github
        </a>

        <a href={state.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <div className="copyright">
        Desenvolvido por <strong>{state.name}</strong>
      </div>
    </Footer>
  );
};
