import { Box, Card, CardContent, Skeleton } from "@mui/material";

const GameCardSkelaton = () => {
  return (
    <Card sx={{ maxWidth: 395, borderRadius: 2 }}>
      <Skeleton variant="rectangular" width={400} height={220} />
      <CardContent
        sx={{
          width: "100%",
          height: 130,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap: 2,
          px: 3,
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height={30}
          sx={{ borderRadius: 2 }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            variant="rectangular"
            width="65%"
            height={30}
            sx={{ borderRadius: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width={40}
            height={30}
            sx={{ borderRadius: 2 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default GameCardSkelaton;
