import { Container, Grid, Typography } from "@mui/material";
import styles from "./gameGrid.module.scss";
import useGames from "../../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <Container className={styles.main}>
      {error && <Typography>{error}</Typography>}
      <Grid
        container
        rowSpacing={12}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 5, sm: 8, md: 12 }}
      >
        {games.map((game) => (
          <Grid item xs={2} sm={4} md={4} key={game.id}>
            <Typography>{game.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GameGrid;
