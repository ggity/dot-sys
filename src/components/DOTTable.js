import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import dayjs from "dayjs";

const tableHeaderStyle = {
  backgroundColor: "primary.main",
  fontWeight: "bold",
  color: "white",
};

const DOTTable = ({ dotRecords = [], loading }) => {
  console.log("iz tabelem pricam");
  console.log(dotRecords);
  return (
    <Stack>
      <TableContainer>
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
              <TableCell sx={tableHeaderStyle}>CAN'T edit logs</TableCell>
              <TableCell sx={tableHeaderStyle}>CAN edit logs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            {!loading && dotRecords.length < 1 ? (
              <div className="loader-overlay">d</div>
            ) : null}
            {dotRecords.map((record) => {
              return (
                <TableRow>
                  <TableCell align="center">
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <LocalShippingIcon />
                      <Typography variant="p" fontWeight="bold">
                        {record.truckId}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <CalendarMonthIcon />
                      <Typography variant="p" fontWeight="bold">
                        {dayjs(record.dotDate).format("DD.MM.YYYY")}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <EventBusyIcon color="warning" />
                      <Typography variant="p" fontWeight="bold">
                        {dayjs(Date.now()).subtract(7, "d").format("DD.MM")}-{" "}
                        {dayjs(record.dotDate).format("DD.MM")}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <EventAvailableIcon color="success" />
                      <Typography variant="p" fontWeight="bold">
                        {dayjs(record.dotDate).format("DD.MM")} - Today
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default DOTTable;
