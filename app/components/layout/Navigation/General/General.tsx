import { FC } from "react";
import s from "./general.module.scss";
import LoginIcon from "@mui/icons-material/Login";

const General: FC = () => {
  return (
    <div className={s.general}>
      <div className={s.general__header}>General</div>
      <div className={s.general__iconContainer}>
        <LoginIcon className={s.general__icon} />
        <div className={s.general__headerIcon}>Login</div>
      </div>
    </div>
  );
};

export default General;
