import type { NextPage } from "next";
import { FooterV } from "../components/Footer";
import { MainV } from "../components/Main";
import { Menu } from "../components/Menu";
import { HeadV } from "../components/Head";
import { Rotmg } from "../components/Rotmg";

const Home: NextPage = () => {
  return (
    <div className="principal">
      <HeadV />
      <Menu />
      <Rotmg/>
      <MainV />     
      <FooterV />
    </div>
  );
};

export default Home;