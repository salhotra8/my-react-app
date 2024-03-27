import { Box, Button, Stack, Typography, alpha } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import useGameQueryStore from "../../hooks/useGameStore";
import useGenres from "../../hooks/useGenres";
import GenresItemSkelaton from "../GenresItemSkelaton/GenresItemSkelaton";

const GenresList = ({ isDrawerOpen }: { isDrawerOpen: boolean }) => {
  const { data, isLoading } = useGenres();

  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s => s.setGenreId);

  return (
    <Stack spacing={1} sx={{ overflowY: "auto", overflowX: "hidden" }}>
      {isLoading
        ? Array(10)
            .fill("")
            .map((_, index) => <GenresItemSkelaton key={index} />)
        : data?.results.map((genre) => {
            return (
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
                    genre.id === genreId
                      ? alpha(blueGrey[300], 0.3)
                      : "transparent",
                }}
                onClick={() => setGenreId(genre.id)}
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
