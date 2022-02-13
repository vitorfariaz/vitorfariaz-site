import type { NextPage } from "next";
import { MainCss } from "./styles";

export const MainV: NextPage = () => {
  return (
    <MainCss>
      <h1>Em construção</h1>
      <section>
        <div className="article">
          <article>Estou desenvolvendo esse site para futuramente criar um vídeo explicando quais conhecimentos é preciso ter para 
            construir e hospedar o seu site na internet 
          </article>
        </div>

          <img src="/perfil-face.jpg" alt="Foto de Vitor Farias" />

      </section>
    </MainCss>
  );
};
