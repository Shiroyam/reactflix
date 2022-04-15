import { FC } from "react";
import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";
import s from "./layout.module.scss";
import { ILayout } from "./layout.interface";

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Navigation />
      <div className={s.center}>{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
