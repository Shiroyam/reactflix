import { FC } from "react";
import Favourites from "./Favourites/Favourites";
import Popular from "./Popular/Popular";
import Search from "./Search/Search";
import s from "./sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__search}>
        <Search />
      </div>
      <div className={s.sidebar__popular}>
        <Popular />
      </div>
      <div className={s.sidebar__favourites}>
        <Favourites />
      </div>
    </div>
  );
};

export default Sidebar;
