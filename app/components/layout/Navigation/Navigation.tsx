import Image from "next/image";
import { FC } from "react";
import Logo from "../../../assets/svg/reactflixLogo2.svg";
import General from "./General/General";
import Genres from "./Genres/Genres";
import Menu from "./Menu/Menu";
import s from "./navigation.module.scss";

const Navigation: FC = () => {
  return (
    <div className={s.navigation}>
      <Image src={Logo} width={260} height={100} alt="reactflix" />
      <Menu />
      <Genres />
      <General />
    </div>
  );
};

export default Navigation;
