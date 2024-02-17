import { Skeleton, Stack } from "@mui/material";

const GenresItemSkelaton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Skeleton
        variant="rectangular"
        width={40}
        height={40}
        sx={{
          borderRadius: 3,
        }}
      />
    </Stack>
  );
};

export default GenresItemSkelaton;
