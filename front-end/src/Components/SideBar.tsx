import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ConfigButton from "./ConfigButton";

interface Props {
  selectedSensor: string;
  setSelectedSensor: React.Dispatch<React.SetStateAction<string>>;
}

export default function SideBar({ selectedSensor, setSelectedSensor }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (toggle: boolean) => () => {
    setOpen(toggle);
  };

  return (
    <>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ minWidth: 150, padding: 1 }}>
          <p>content</p>
          <p>content</p>
        </Box>
      </Drawer>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "primary.main",
        }}
      >
        <MenuIcon
          color="primary"
          fontSize="large"
          sx={{ margin: "0 5px" }}
          onClick={toggleDrawer(true)}
        ></MenuIcon>
        <ConfigButton
          selectedSensor={selectedSensor}
          setSelectedSensor={setSelectedSensor}
        ></ConfigButton>
      </Box>
    </>
  );
}
