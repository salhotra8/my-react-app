import { Container, Grid, Typography } from "@mui/material";
import styles from "./gameGrid.module.scss";
import { useEffect, useState } from "react";
import axios from "../../services/game-client-api";

interface Game {
  id: number;
  name: string;
}

interface GamesResposne {
  count: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get<GamesResposne>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        setError(error);
      });
  });

  return (
    <Container className={styles.main}>
    <Grid container rowSpacing={12} spacing={{ xs: 2, md: 3  }} columns={{ xs: 5, sm: 8, md: 12 }}>
      {games.map((game: Game) => (
        <Grid item xs={2} sm={4} md={4} key={game.id}>
          <Typography>{game.name}</Typography>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default GameGrid;
