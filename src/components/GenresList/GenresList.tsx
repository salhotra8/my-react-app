import { Box, Button, Stack, Typography, alpha } from "@mui/material";
import useGenres from "../../hooks/useGenres";
import GenresItemSkelaton from "../GenresItemSkelaton/GenresItemSkelaton";
import { GameQueryContext } from "../../App";
import { useContext } from "react";
import { blueGrey } from "@mui/material/colors";
import { Genres } from "../../interfaces/Genres";

const GenresList = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  const { genres, isLoading } = useGenres();

  const { gameQuery, setGameQuery } = useContext(GameQueryContext);

  function handleGenreClick(genre: Genres): void {
    setGameQuery({ ...gameQuery, genre: genre });
  }

  return (
    <Stack spacing={3} sx={{ overflowY: "scroll", overflowX: "hidden" }}>
      {genres.map((genre) => {
        return isLoading ? (
          <GenresItemSkelaton key={genre.id} />
        ) : (
          <Button
            key={genre.id}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              gap: 2,

              py: 1,
              borderRadius: 3,
              backgroundColor:
                genre.id === gameQuery.genre?.id
                  ? alpha(blueGrey[300], 0.3)
                  : "transparent",
            }}
            onClick={() => handleGenreClick(genre)}
          >
            <Box
              component="img"
              sx={{
                minWidth: 50,
                minHeight: 50,
                maxWidth: 50,
                maxHeight: 50,
                objectFit: "cover",
                borderRadius: 4,
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);",
              }}
              src={genre.image_background}
            ></Box>
            {isDrawerOpen === true && (
              <Typography
                sx={{
                  alignSelf: "center",
                  textWrap: genre.name.length > 12 ? "wrap" : "nowrap",
                  fontWeight: 600,
                  textAlign: "justify",
                }}
              >
                {genre.name}
              </Typography>
            )}
          </Button>
        );
      })}
    </Stack>
  );
};

export default GenresList;
