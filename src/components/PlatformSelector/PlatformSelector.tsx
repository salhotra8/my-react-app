import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button, Menu, MenuItem } from "@mui/material";
import usePlatform from "../../hooks/usePlatforms";

import { useState } from "react";
import useGameQueryStore from "../../hooks/useGameStore";
import usePlatformLookup from "../../hooks/usePlatformLookup";

const PlatformSelector = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, error } = usePlatform();

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const platform = usePlatformLookup(platformId);

  function onMenuItemClick(platformId: number | undefined): void {
    setPlatformId(platformId);
    handleClose();
  }

  if (error) return null;
  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 2, borderRadius: 2.2, pr: 0.6 }}
        onClick={handleClick}
      >
        {platform?.name || "Platform"}
        <ArrowDropDownIcon sx={{ fontSize: 30 }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            minWidth: 220,
            marginTop: 1,
            maxHeight: "52%",
            borderRadius: 2.5,
          },
        }}
      >
        <MenuItem
            onClick={() => onMenuItemClick(undefined)}
            sx={{ px: 2, py: 1.1, fontSize: 16 }}
          >
            All Platforms
          </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onMenuItemClick(platform.id)}
            sx={{ px: 2, py: 1.1, fontSize: 16 }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PlatformSelector;
