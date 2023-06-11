import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function SideBar() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (toggle: boolean) => () => {
    setOpen(toggle);
  };

  return (
    <>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ minWidth: 150, padding:1}}>
          <p>content</p>
          <p>content</p>
        </Box>
      </Drawer>
      <Box sx={{ position:'absolute', width:'100%', height:"40px", borderBottom:1, borderColor: 'primary.main' }}>
        <MenuIcon color="primary" fontSize="large" sx={{margin:'0 5px'}} onClick={toggleDrawer(true)}></MenuIcon>
      </Box>
    </>
  );
}
