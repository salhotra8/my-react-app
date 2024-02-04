import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Games } from "../../hooks/useGames";

interface GameProps {
  game: Games;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius:2 }}>
      <CardMedia
        component="img"
        alt={game.name}
        height="200"
        image={game.background_image}
      />
      <CardContent
        sx={{
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h6" fontWeight="600" component="div">
          {game.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
