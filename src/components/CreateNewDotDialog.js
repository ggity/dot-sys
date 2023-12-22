import { v4 as uuid } from "uuid";

import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  Slide,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import CancelIcon from "@mui/icons-material/Cancel";
import CreateIcon from "@mui/icons-material/Create";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";

const CreateNewDotDialog = ({ open = false, onClose, refresh }) => {
  const [truckId, setTruckId] = useState("");
  const [dotDate, setDotDate] = useState(dayjs(Date.now()));
  const [feedback, setFeedback] = useState(null);

  const handleTruckIdChange = (e) => {
    const inputValue = e.target.value;
    const validatorRegex = /^[\d\b]+$/;
    if (!inputValue) setTruckId("");
    if (validatorRegex.test(inputValue)) setTruckId(inputValue);
    return;
  };

  const reset = () => {
    setTruckId("");
    setDotDate(dayjs(Date.now()));
    setFeedback(null);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSuccess = (successMsg) => {
    setFeedback({
      type: "success",
      message: successMsg,
    });
  };
  const onError = (errorMsg) => {
    setFeedback({
      type: "error",
      message: errorMsg,
    });
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFeedback(null);
  };

  const postData = async (record) => {
    await fetch("http://localhost:3000/dots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });
  };

  return (
    <>
      <Snackbar
        sx={{
          boxShadow: 6,
        }}
        open={feedback}
        onClose={handleCloseNotification}
        autoHideDuration={3000}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={feedback?.type} color="info">
          <AlertTitle>{feedback?.type}</AlertTitle>
          {feedback?.message} <strong></strong>
        </Alert>
      </Snackbar>

      <Dialog
        open={open}
        onClose={handleClose}
        disableRestoreFocus
        TransitionComponent={Slide}
      >
        <DialogTitle color="primary.dark" fontWeight="bold">
          Add new DOT inspection record
        </DialogTitle>
        <DialogContent>
          <DialogContentText fontSize="small">
            To create new DOT inspection record you need to:
          </DialogContentText>
          <DialogContentText fontWeight="bold" fontSize="small">
            - Enter truck ID,
          </DialogContentText>
          <DialogContentText fontWeight="bold" fontSize="small">
            - Select DOT inspection date - default date is today
          </DialogContentText>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            padding="1.5rem 0rem 0rem"
          >
            <TextField
              value={truckId}
              onChange={handleTruckIdChange}
              autoFocus
              size="small"
              label="Truck ID"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalShippingIcon />
                  </InputAdornment>
                ),
              }}
            />
            <DatePicker
              value={dayjs(dotDate)}
              maxDate={dayjs(Date.now())}
              onChange={(newDate) => setDotDate(newDate)}
              size="small"
              label="DOT date"
              slotProps={{
                textField: {
                  size: "small",
                },
                openPickerButton: {
                  color: "primary",
                },
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="error"
            startIcon={<CancelIcon />}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            disabled={!truckId}
            onClick={async () => {
              const newRecord = {
                id: uuid(),
                truckId,
                dotDate: dotDate.toJSON(),
              };
              await postData(newRecord);
              refresh();
              handleClose();
              onSuccess(`Successfuly added DOT record for ${truckId}`);
            }}
            variant="contained"
            startIcon={<CreateIcon />}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateNewDotDialog;
