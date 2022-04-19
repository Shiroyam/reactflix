import { FC } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import s from "./search.module.scss";

const Search: FC = () => {
  return (
    <>
      <Input
        placeholder="Search"
        className={s.search}
        color={"primary"}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon style={{ color: "#999AA5" }} />
          </InputAdornment>
        }
      />
    </>
  );
};

export default Search;
