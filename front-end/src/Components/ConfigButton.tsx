import SensorsIcon from "@mui/icons-material/Sensors";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { api, sensor } from "../Services/Api";
import socket from "../Config/Socket";

interface Props {
  selectedSensor: string;
  setSelectedSensor: React.Dispatch<React.SetStateAction<string>>;
}

export default function ConfigButton({
  selectedSensor,
  setSelectedSensor,
}: Props) {
  const [sensors, setSensors] = useState<sensor[]>([]);
  const [open, setOpen] = useState(false);

  async function loadSensors() {
    const { data }: { data: sensor[] } = await api.getSensors();
    setSensors(data);
  }

  function changeSensor(newSensor: string) {
    const oldSensor = selectedSensor;
    if (oldSensor != newSensor) {
      console.log(`leave ${oldSensor}`);
      socket.emit("leave", { name: oldSensor });
      setSelectedSensor(newSensor);
    }
    setOpen(false);
  }

  useEffect(() => {
    loadSensors();
  }, []);

  return (
    <>
      <Button
        endIcon={
          <SensorsIcon
            color="primary"
            fontSize="large"
            sx={{ margin: "0 5px" }}
          />
        }
        onClick={() => setOpen(true)}
      >
        <Typography variant="body1">
          {selectedSensor ? selectedSensor : "select sensor"}
        </Typography>
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Sensors</DialogTitle>
        <List>
          {sensors.length > 0 ? (
            sensors.map((sensor) => {
              return (
                <ListItem disableGutters key={sensor.name}>
                  <ListItemButton onClick={() => changeSensor(sensor.name)}>
                    <ListItemAvatar>
                      <Avatar>
                        <SensorsIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={sensor.name} />
                  </ListItemButton>
                </ListItem>
              );
            })
          ) : (
            <></>
          )}
        </List>
      </Dialog>
    </>
  );
}
