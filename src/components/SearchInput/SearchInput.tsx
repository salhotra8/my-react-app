import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";
import { FormEvent, useRef } from "react";
import useGameQuery from "../../hooks/useGameQuery";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  const formRef = useRef<HTMLInputElement>(null);
  const { gameQuery, setGameQuery } = useGameQuery();

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
