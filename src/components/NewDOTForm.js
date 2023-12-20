import { v4 as uuid } from "uuid";

import {
  Button,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const NewDOTForm = ({ open, onClose, handleAddDotRecord }) => {
  const [truckId, setTruckId] = useState("");
  const [dotDate, setDotDate] = useState(dayjs(Date.now()));

  const handleTruckIdChange = (e) => {
    const inputValue = e.target.value;
    const validatorRegex = /^[\d\b]+$/;
    if (!inputValue) setTruckId("");
    if (validatorRegex.test(inputValue)) setTruckId(inputValue);
    return;
  };

  // const addDotRecord = () => {
  // }
    

const handleAddNewDotRecord = async (record) => {
  await fetch("http://192.168.0.61:3000/dots", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(record)
  });
};

  return open ? (
    <div className="overlay">
      <Card>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            paddingBlock: ".25rem",
            backgroundColor: "primary.main",
            paddingLeft: ".5rem",
            color: "white",
          }}
        >
          <Typography>Create new DOT record</Typography>
          <IconButton
            onClick={() => {
              onClose();
              setTruckId("");
              setDotDate(dayjs(Date.now()));
            }}
            size="small"
            sx={{
              color: "white",
            }}
          >
            <HighlightOffIcon />
          </IconButton>
        </Stack>
        <Stack spacing={1} padding="1rem">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Add new DOT inspection record</Typography>
          </Stack>
          <Divider />
          <Stack direction="row" spacing={2} paddingTop=".75rem">
            <TextField
              value={truckId}
              onChange={handleTruckIdChange}
              size="small"
              label="Truck ID"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalShippingIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                maxWidth: "15ch",
              }}
            />
            <DatePicker
              //   value={dayjs(Date.now())}
              value={dayjs(dotDate)}
              maxDate={dayjs(Date.now())}
              //   views={["day"]}
              onChange={(newDate) => setDotDate(newDate)}
              size="small"
              label="DOT date"
              slotProps={{
                textField: {
                  size: "small",
                  inputProps: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalShippingIcon />
                      </InputAdornment>
                    ),
                  },
                },
              }}
              sx={{
                maxWidth: "20ch",
              }}
            />
            <Button
              disabled={!truckId}
              onClick={async () => {
                // pokrece loader
              const  newRecord = {
                 id: uuid(),
                  truckId,
                  dotDate: dotDate.toJSON(),
                };
                await handleAddNewDotRecord(newRecord);
                // kada uradi ovo, gasi loader 
                // dodaje dot...

                handleAddDotRecord(newRecord);
                setTruckId("");
                setDotDate(dayjs(Date.now()));
                onClose();
              }}
              variant="contained"
              startIcon={<AddCircleIcon />}
            >
              Add
            </Button>
          </Stack>
        </Stack>
      </Card>
    </div>
  ) : null;
};

export default NewDOTForm;
