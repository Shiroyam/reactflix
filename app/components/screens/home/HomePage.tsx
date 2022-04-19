import { FC } from "react";
import Layout from "../../layout/Layout";
import Slider from "./Slider/Slider";
import { IHomePage } from "./homePage.interface";
import s from "./homePage.module.scss";

const HomePage: FC<IHomePage> = () => {
  return (
    <div className={s.homePage}>
        <div className={s.homePage__center}>
          <Slider />
        </div>
    </div>
  );
};

export default HomePage;
