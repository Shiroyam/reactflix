import { FC } from "react";
import s from "./slider.module.scss";
import { Skeleton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slider: FC = () => {
  const loading = false;
  return (
    <>
      <div className={s.slider}>
        {loading ? (
          <div className={s.slider__img}></div>
        ) : (
          <>
            <Skeleton
              className={s.slider__skeleton}
              animation="wave"
              variant="rectangular"
              width={800}
              height={200}
            >
              <ArrowBackIosIcon className={s.slider__arrow} />
              <ArrowForwardIosIcon className={s.slider__arrow} />
            </Skeleton>
          </>
        )}
      </div>
    </>
  );
};

export default Slider;
