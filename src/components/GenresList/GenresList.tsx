import { Box, Stack, Typography } from "@mui/material";
import useGenres from "../../hooks/useGenres";

const GenresList = () => {
  const { genres } = useGenres();
  if (genres) {
    return (
      <Stack
        spacing={3}
        sx={{ ml: 1, py: 2, overflowY: "scroll", overflowX: "hidden" }}
      >
        {genres.map((genre) => (
          <Stack direction="row" spacing={2} key={genre.id}>
            <Box
              component="img"
              sx={{
                width: 40,
                height: 40,
                objectFit: "cover",
                borderRadius: 3,
              }}
              src={genre.image_background}
            ></Box>
            <Typography sx={{ alignSelf: "center", fontWeight: 600 }}>
              {genre.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    );
  } else return null;
};

export default GenresList;
