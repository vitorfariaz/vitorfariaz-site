import type { NextPage } from "next";
import React from "react";
import { FooterV } from "../components/Footer";
import { MainV } from "../components/Main";
import { Menu } from "../components/Menu";
import { HeadV } from "../components/Head";
import { ThemeProvider } from "styled-components";
import teste from "../styles/themes/test"
import GlobalStyle from "../styles/global";
import { Rotmg } from "../components/Rotmg";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={teste}>
      <div className="principal">
        <GlobalStyle />
        <HeadV />
        <Menu />
        <Rotmg/>
        <MainV />
        <FooterV />
      </div>
    </ThemeProvider>
  );
};

export default Home;
