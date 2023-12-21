import {
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
import Loader from "./Loader";
import TableEmpty from "./TableEmpty";

const tableHeaderStyle = {
  backgroundColor: "lightgray",
  // borderInline: "1px solid black",
  fontWeight: "bold",
  // color: "white",
};

const DOTTable = ({ dotRecords = [], loading }) => {
  return (
    <Stack
      sx={{
        position: "relative",
        minHeight: "285px",
      }}
    >
      {loading ? <Loader /> : null}
      {!loading && dotRecords.length === 0 ? <TableEmpty /> : null}
      <TableContainer>
        <Table>
          {dotRecords.length !== 0 ? (
            <caption>
              <Stack spacing={1}>
                <Typography>Legend:</Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <EventBusyIcon color="warning" />
                  <Typography variant="p" fontWeight="bold">
                    - Can't edit logs from date to date
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <EventAvailableIcon color="success" />
                  <Typography variant="p" fontWeight="bold">
                    - Can edit logs from date do today
                  </Typography>
                </Stack>
              </Stack>
            </caption>
          ) : null}
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
          <TableBody>
            {dotRecords.map((record) => {
              return (
                <TableRow>
                  <TableCell
                  // align="center"
                  >
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
                        {dayjs(Date.now()).subtract(7, "d").format("DD.MM.YY")}-{" "}
                        {dayjs(record.dotDate).format("DD.MM.YY")}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <EventAvailableIcon color="success" />
                      <Typography variant="p" fontWeight="bold">
                        {dayjs(record.dotDate).format("DD.MM.YY")} - Today
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
