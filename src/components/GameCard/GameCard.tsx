import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { Games } from "../../interfaces/Games";
import PlatfromIcon from "../PlatformIcon/PlatformIcon";
import { amber, lightGreen } from "@mui/material/colors";
import imageCropUrl from "../../utilities/imageCropUrl";
import noImage from "../../assets/noImage.png";

interface GameProps {
  game: Games;
}

const GameCard = ({ game }: GameProps) => {
  function defineColor() {
    return game.metacritic > 80
      ? { bgColor: lightGreen[700], color: lightGreen[100] }
      : { bgColor: amber[500], color: amber[100] };
  }
  const scoreColor = defineColor();

  return (
    <Card sx={{ maxWidth: 400, borderRadius: 2 }}>
      <CardMedia
        component="img"
        alt={game.name}
        height="230"
        image={imageCropUrl(game.background_image) || noImage}
 
      />
      <CardContent
        sx={{
          minHeight: 145,
          maxHeight: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 1,
          gap: 1,
        }}
      >
        <Typography gutterBottom variant="h5" fontWeight="600">
          {game.name}
        </Typography>
        <Container
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <PlatfromIcon
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          {game.metacritic !== null && (
            <Box
              sx={{
                fontSize: 18,
                fontWeight: 600,
                borderRadius: 2,
                px: 1,
                color: scoreColor.color,
                bgcolor: scoreColor.bgColor,
              }}
            >
              {game.metacritic}
            </Box>
          )}
        </Container>
      </CardContent>
    </Card>
  );
};

export default GameCard;
