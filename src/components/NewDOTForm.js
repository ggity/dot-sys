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

// ostaje hendlovati klik i poslati/sacuvati podatke nedje

// import SearchIcon from "@mui/icons-material/Search";
// import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const NewDOTForm = ({ open, onClose, handleAddDotRecord }) => {
  const [truckId, setTruckId] = useState("");
  const [dotDate, setDotDate] = useState(dayjs(Date.now()));

  useEffect(() => {
    console.log("Datum se promjenio");
    console.log(dotDate);
  }, [dotDate]);

  const handleTruckIdChange = (e) => {
    const inputValue = e.target.value;
    const validatorRegex = /^[\d\b]+$/;
    if (!inputValue) setTruckId("");
    if (validatorRegex.test(inputValue)) setTruckId(inputValue);
    return;
  };

  return open ? (
    <div className="overlay">
      <Card>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
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
        <Stack spacing={1} padding="1.5rem 1rem 1rem">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Add new DOT inspection record</Typography>
            {/* <Stack position="relative" zIndex="1">
                    <SearchIcon
                        fontSize="small"
                        sx={{
                        //   color: "gray",
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "fit-content",
                        transform: "translate(5%, -55%)",
                        }}
                    />
                    <LocalShippingOutlinedIcon
                        fontSize="large"
                        sx={{
                        color: "gray",
                        }}
                    />
                    </Stack> */}
          </Stack>
          <Divider />
          <Stack direction="row" spacing={2} paddingTop=".5rem">
            <TextField
              value={truckId}
              //   onChange={(e) => {
              //     setTruckId(e.target.value);
              //   }}
              onChange={handleTruckIdChange}
              //   error
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
              onClick={() => {
                handleAddDotRecord({
                  truckId,
                  dotDate: dotDate.toJSON(),
                });
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
