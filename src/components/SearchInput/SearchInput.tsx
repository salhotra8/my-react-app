import SearchIcon from "@mui/icons-material/Search";
import styles from "./SearchInput.module.scss";
import { Box, TextField } from "@mui/material";
import { FormEvent, useContext, useRef } from "react";
import { GameQueryContext } from "../../App";

const SearchInput = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        ml: 2,
        mr: 1,
      }}
    >
      <form
        action="submit"
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          if (formRef.current) {
            setGameQuery({ ...gameQuery, searchText: formRef.current.value });
            formRef.current.value = "";
          }
        }}
      >
        <TextField
          inputRef={formRef}
          placeholder="Search a game"
          id="outlined-basic"
          variant="outlined"
          fullWidth
          InputProps={{
            className: styles.searchInput,
            startAdornment: <SearchIcon />,
          }}
        />
      </form>
    </Box>
  );
};

export default SearchInput;
