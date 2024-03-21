import { Box, Skeleton } from "@mui/material";

const GenresItemSkelaton = () => {
  return (
    <>
      <Box
        sx={{
          px: 1.2,
          py: 1,
          display: "flex",
          gap: 2,
          minWidth: 230,
          alignItems: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          width={52}
          height={52}
          sx={{
            borderRadius: 3,
          }}
        />
        <Skeleton
          variant="rectangular"
          width={140}
          height={40}
          sx={{
            borderRadius: 2,
          }}
        />
      </Box>
    </>
  );
};

export default GenresItemSkelaton;
