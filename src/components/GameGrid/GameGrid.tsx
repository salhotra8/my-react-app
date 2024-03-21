import { Container, Grid, Typography } from "@mui/material";
import styles from "./GameGrid.module.scss";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkelaton from "../GameCardSkelaton/GameCardSkelaton";
import { useContext } from "react";
import { GameQueryContext } from "../../App";

const GameGrid = () => {
  const { gameQuery } = useContext(GameQueryContext);

  const { data, error, isLoading } = useGames({ gameQuery: gameQuery });

  return (
    <Container className={styles.main} sx={{ mt: 3 }}>
      {error && <Typography>{error.message}</Typography>}
      <Grid
        container
        rowSpacing={4}
        spacing={{ xs: 2, md: 2, lg: 4 }}
        columns={{ xs: 2, sm: 6, md: 12 }}
        sx={{ borderRadius: 20 }}
      >
        {isLoading
          ? Array(10)
              .fill("")
              .map((_, index) => (
                <Grid item xs={3} sm={3} md={4} key={index}>
                  <GameCardSkelaton />
                </Grid>
              ))
          : data?.results.map((game) => (
              <Grid item xs={3} sm={3} md={4} key={game.id}>
                <GameCard game={game} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
};

export default GameGrid;
