import { FC } from "react";
import s from "./favourites.module.scss";

const Favourites: FC = () => {
  return (
    <div className={s.favourites}>
      <div className={s.favourites__text}>
        For viewing favourites please authorize!
      </div>
    </div>
  );
};

export default Favourites;
