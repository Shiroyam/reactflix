import { FC } from "react";
import s from "./genres.module.scss";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Genres: FC = () => {
  return (
    <div className={s.genres}>
      <div className={s.genres__header}>Popular genres</div>
      <div
        className={
          false
            ? `${s.genres__iconContainer} ${s.active}`
            : `${s.genres__iconContainer}`
        }
      >
        <EmojiEmotionsIcon className={s.genres__icon} />
        <div className={s.genres__headerIcon}>Comedy</div>
      </div>
      <div
        className={
          false
            ? `${s.genres__iconContainer} ${s.active}`
            : `${s.genres__iconContainer}`
        }
      >
        <FamilyRestroomIcon className={s.genres__icon} />
        <div className={s.genres__headerIcon}>Cartoons</div>
      </div>
      <div
        className={
          false
            ? `${s.genres__iconContainer} ${s.active}`
            : `${s.genres__iconContainer}`
        }
      >
        <AutoFixNormalIcon className={s.genres__icon} />
        <div className={s.genres__headerIcon}>Fantasy</div>
      </div>
      <div
        className={
          false
            ? `${s.genres__iconContainer} ${s.active}`
            : `${s.genres__iconContainer}`
        }
      >
        <MenuBookIcon className={s.genres__icon} />
        <div className={s.genres__headerIcon}>Biography</div>
      </div>
    </div>
  );
};

export default Genres;
