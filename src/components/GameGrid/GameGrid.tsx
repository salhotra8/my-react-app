import { Container, Grid, Typography } from "@mui/material";
import styles from "./gameGrid.module.scss";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <Container className={styles.main}>
      {error && <Typography>{error}</Typography>}
      <Grid
        container
        rowSpacing={6}
        spacing={{ xs: 2, md: 5 }}
        columns={{ xs: 2, sm: 6, md: 12 }}
        sx={{ borderRadius:20}}
      >
        {games.map((game) => (
          <Grid item xs={3} sm={3} md={4} key={game.id}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GameGrid;
