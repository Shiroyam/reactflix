import { FC } from "react";
import s from "./menu.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import RefreshIcon from "@mui/icons-material/Refresh";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const Menu: FC = () => {
  return (
    <div className={s.menu}>
      <div className={s.menu__header}>Menu</div>
      <div
        className={
          true
            ? `${s.menu__iconContainer} ${s.active}`
            : `${s.menu__iconContainer}`
        }
      >
        <HomeIcon className={s.menu__icon} />
        <div className={s.menu__headerIcon}>Home</div>
      </div>
      <div
        className={
          false
            ? `${s.menu__iconContainer} ${s.active}`
            : `${s.menu__iconContainer}`
        }
      >
        <ExploreIcon className={s.menu__icon} />
        <div className={s.menu__headerIcon}>Discovery</div>
      </div>
      <div
        className={
          false
            ? `${s.menu__iconContainer} ${s.active}`
            : `${s.menu__iconContainer}`
        }
      >
        <RefreshIcon className={s.menu__icon} />
        <div className={s.menu__headerIcon}>Fresh movies</div>
      </div>
      <div
        className={
          false
            ? `${s.menu__iconContainer} ${s.active}`
            : `${s.menu__iconContainer}`
        }
      >
        <LocalFireDepartmentIcon className={s.menu__icon} />
        <div className={s.menu__headerIcon}>Trending now</div>
      </div>
    </div>
  );
};

export default Menu;
