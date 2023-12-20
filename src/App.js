import { Button, Paper, Stack, Typography } from "@mui/material";
import "./App.css";

import CreateIcon from "@mui/icons-material/Create";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import NewDOTForm from "./components/NewDOTForm";
import Tablet from "./layouts/Tablet";
import DOTTable from "./components/DOTTable";
// import dayjs from "dayjs";

import SearchIcon from "@mui/icons-material/Search";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dotRecords, setDotRecords] = useState([]);

  useEffect(() => {
    const fetchDots = async () => {
      const response = await fetch("http://localhost:3000/dots");
      const records = await response.json();
      setDotRecords(records);
    };
    fetchDots();
  }, []);

  console.log(dotRecords);

  const handleAddDotRecord = (record) => {
    const newRecords = [...dotRecords, record];
    setDotRecords(newRecords);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Paper
          elevation={2}
          square={false}
          sx={{
            minWidth: "700px",
            padding: "2rem 1rem 1.5rem",
            height: "fit-content",
          }}
        >
          <Stack spacing={2}>
            {/* header sa tasterom samo i naslovom   */}
            <Stack justifyContent="space-between">
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

              <Button
                sx={{
                  alignSelf: "end",
                }}
                variant="contained"
                startIcon={<CreateIcon />}
                onClick={() => setDialogOpen(true)}
              >
                New DOT
              </Button>
            </Stack>

            <NewDOTForm
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              handleAddDotRecord={handleAddDotRecord}
            />

            <Stack
              sx={{
                position: "relative",
                minHeight: "285px",
              }}
            >
              {loading ? (
                <div className="loader-overlay">
                  <div className="loader"></div>
                </div>
              ) : null}
              <DOTTable dotRecords={dotRecords} />
            </Stack>
          </Stack>
        </Paper>
      </div>
    </LocalizationProvider>
  );
}

export default App;
