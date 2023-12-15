import {
  Badge,
  Button,
  Card,
  Chip,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";

const tableHeaderStyle = {
  backgroundColor: "rgba(135, 135, 135, .25)",
  fontWeight: "bold",
};

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading((prev) => !prev);
  //   }, 5000);
  // }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Card
          sx={{
            padding: "3rem 1rem .75rem",
            // aspectRatio: "1/1.5 ",
            backgroundColor: "#555",
            borderRadius: "1rem",
          }}
        >
          <Card
            sx={{
              // padding: "2rem 1rem rem",
              // aspectRatio: "1/1.5 ",
              position: "relative",
              height: "100%",
            }}
          >
            <Stack spacing={2} padding=".5rem 1rem" height="100%">
              <Stack direction="row" justifyContent="end">
                <Button
                  variant="contained"
                  startIcon={<CreateIcon />}
                  // onClick={() => setDialogOpen(true)}
                  onClick={() => {
                    setDialogOpen(true);
                    console.log("kkkk");
                  }}
                >
                  New DOT
                </Button>
              </Stack>

              {
                // dialogOpen ? :
              }

              {dialogOpen ? (
                <div className="overlay">
                  <Card
                    sx={
                      {
                        // padding: "1rem 2rem",
                      }
                    }
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        backgroundColor: "rgba(135, 135, 135, 1)",
                        paddingLeft: ".5rem",
                        color: "white",
                      }}
                    >
                      <Typography>Add new DOT</Typography>
                      <IconButton
                        onClick={() => setDialogOpen(false)}
                        size="small"
                        sx={{
                          color: "white",
                        }}
                      >
                        <HighlightOffIcon />
                      </IconButton>
                    </Stack>
                    <Stack direction="row" spacing={2} padding="2rem 1rem 1rem">
                      <TextField
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
                        size="small"
                        label="DOT date"
                        slotProps={{
                          textField: {
                            // helperText: 'MM/DD/YYYY',
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
                      <Button variant="contained" startIcon={<AddCircleIcon />}>
                        Add
                      </Button>
                    </Stack>
                  </Card>
                </div>
              ) : null}

              {/* dodaj  */}

              {/* kraj dodaj */}

              <Stack direction="row" alignItems="center" spacing={1}>
                <Stack position="relative" zIndex="1">
                  <SearchIcon
                    fontSize="medium"
                    sx={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      transform: "translate(5%, -55%)",
                    }}
                  />
                  <LocalShippingOutlinedIcon fontSize="large" />
                </Stack>
                <Typography variant="h6" fontWeight="bold">
                  DOT Inspections In Last 7 Days
                </Typography>
              </Stack>
              <TableContainer
                component={Paper}
                sx={{
                  height: "100%",
                  // backgroundColor: "yellow",
                  position: "relative",
                }}
              >
                {loading ? (
                  <div className="loader-overlay">
                    <div className="loader"></div>
                  </div>
                ) : null}
                <Table
                //  size="small"
                >
                  {/* <caption>A basic table example with a caption</caption> */}
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" sx={tableHeaderStyle}>
                        Truck ID
                      </TableCell>
                      <TableCell sx={tableHeaderStyle}>DOT date</TableCell>
                      <TableCell sx={tableHeaderStyle}>
                        Do NOT edit logs (from - to)
                      </TableCell>
                      <TableCell sx={tableHeaderStyle}>CAN edit logs</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={
                      {
                        // height: "100%",
                        // backgroundColor: "red",
                      }
                    }
                  >
                    <TableRow>
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <LocalShippingIcon />
                          <Typography variant="p" fontWeight="bold">
                            304
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarMonthIcon />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventBusyIcon color="warning" />
                          <Typography variant="p" fontWeight="bold">
                            {/* 09.12.2023 - Today */}
                            07.12.2023 - 09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventAvailableIcon color="success" />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023 - Today
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <LocalShippingIcon />
                          <Typography variant="p" fontWeight="bold">
                            304
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarMonthIcon />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventBusyIcon color="warning" />
                          <Typography variant="p" fontWeight="bold">
                            {/* 09.12.2023 - Today */}
                            07.12.2023 - 09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventAvailableIcon color="success" />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023 - Today
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <LocalShippingIcon />
                          <Typography variant="p" fontWeight="bold">
                            304
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarMonthIcon />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventBusyIcon color="warning" />
                          <Typography variant="p" fontWeight="bold">
                            {/* 09.12.2023 - Today */}
                            07.12.2023 - 09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventAvailableIcon color="success" />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023 - Today
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <LocalShippingIcon />
                          <Typography variant="p" fontWeight="bold">
                            304
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarMonthIcon />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventBusyIcon color="warning" />
                          <Typography variant="p" fontWeight="bold">
                            {/* 09.12.2023 - Today */}
                            07.12.2023 - 09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventAvailableIcon color="success" />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023 - Today
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <LocalShippingIcon />
                          <Typography variant="p" fontWeight="bold">
                            304
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarMonthIcon />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventBusyIcon color="warning" />
                          <Typography variant="p" fontWeight="bold">
                            {/* 09.12.2023 - Today */}
                            07.12.2023 - 09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventAvailableIcon color="success" />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023 - Today
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <LocalShippingIcon />
                          <Typography variant="p" fontWeight="bold">
                            304
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarMonthIcon />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventBusyIcon color="warning" />
                          <Typography variant="p" fontWeight="bold">
                            {/* 09.12.2023 - Today */}
                            07.12.2023 - 09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventAvailableIcon color="success" />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023 - Today
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="center">
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <LocalShippingIcon />
                          <Typography variant="p" fontWeight="bold">
                            304
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarMonthIcon />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventBusyIcon color="warning" />
                          <Typography variant="p" fontWeight="bold">
                            {/* 09.12.2023 - Today */}
                            07.12.2023 - 09.12.2023
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <EventAvailableIcon color="success" />
                          <Typography variant="p" fontWeight="bold">
                            09.12.2023 - Today
                          </Typography>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Card>
        </Card>
      </div>
    </LocalizationProvider>
  );
}

export default App;
