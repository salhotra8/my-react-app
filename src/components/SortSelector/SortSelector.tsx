import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import useGameQueryStore from "../../hooks/useGameStore";
export interface SortOrder {
  value: string;
  label: string;
}
const SortSelector = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  function onMenuItemClick(sortOrder: SortOrder): void {
    setSortOrder(sortOrder);
    handleClose();
  }

  const menuItems: SortOrder[] = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 2, borderRadius: 2.2, pr: 0.6 }}
        onClick={handleClick}
      >
        {sortOrder ? sortOrder.label : "Order By: Relavance"}
        <ArrowDropDownIcon sx={{ fontSize: 30 }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 232, marginTop: 0.6, borderRadius: 2.5 },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => onMenuItemClick(item)}
            sx={{ px: 2, py: 1.2, fontSize: 15 }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SortSelector;
