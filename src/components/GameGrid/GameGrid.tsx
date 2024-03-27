import { Container, Grid, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../../hooks/useGameStore";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkelaton from "../GameCardSkelaton/GameCardSkelaton";
import styles from "./GameGrid.module.scss";

function gameCardSkelationArray() {
  return Array(10)
    .fill("")
    .map((_, index) => (
      <Grid item xs={3} sm={3} md={4} key={index}>
        <GameCardSkelaton />
      </Grid>
    ));
}

const GameGrid = () => {
  const { gameQuery } = useGameQueryStore();

  const { data, error, fetchNextPage, hasNextPage, isLoading } = useGames({
    gameQuery: gameQuery,
  });

  const gamesLength =
    data?.pages.reduce((acc, games) => acc + games.results.length, 0) || 0;

  return (
    <Container className={styles.main} sx={{ mt: 3 }}>
      {error && <Typography>{error.message}</Typography>}
      <InfiniteScroll
        dataLength={gamesLength}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <Grid
            container
            rowSpacing={4}
            spacing={{ xs: 2, md: 2, lg: 4 }}
            columns={{ xs: 2, sm: 6, md: 12 }}
            sx={{ borderRadius: 20 }}
          >
            {gameCardSkelationArray()}
          </Grid>
        }
      >
        <Grid
          container
          rowSpacing={4}
          spacing={{ xs: 2, md: 2, lg: 4 }}
          columns={{ xs: 2, sm: 6, md: 12 }}
          sx={{ borderRadius: 20 }}
        >
          {isLoading
            ? gameCardSkelationArray()
            : data?.pages.map((gamesPages) =>
                gamesPages.results.map((game) => (
                  <Grid item xs={3} sm={3} md={4} key={game.id}>
                    <GameCard game={game} />
                  </Grid>
                ))
              )}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default GameGrid;
