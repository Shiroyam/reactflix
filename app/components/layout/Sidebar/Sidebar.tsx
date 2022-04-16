import { FC } from "react";
import Popular from "./Popular/Popular";
import Search from "./Search/Search";
import s from "./sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <div className={s.sidebar}>
      <Search />
      <Popular />
    </div>
  );
};

export default Sidebar;
