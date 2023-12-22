import { Button, Paper, Stack, Typography } from "@mui/material";
import "./App.css";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import DOTTable from "./components/DOTTable";

import LoopIcon from "@mui/icons-material/Loop";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import CreateNewDotDialog from "./components/CreateNewDotDialog";

const LOADING_TIMEOUT = 2;

function App() {
  const [loading, setLoading] = useState(true);

  const [dotRecords, setDotRecords] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/dots");
    const records = await response.json();
    setDotRecords(records);
  };

  const loadData = async () => {
    if (!loading) setLoading(true);
    setTimeout(async () => {
      await fetchData();
      setLoading(false);
    }, LOADING_TIMEOUT * 1000);
  };

  const refresh = () => {
    loadData();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <CreateNewDotDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          refresh={refresh}
        />
        <Paper
          elevation={9}
          sx={{
            minWidth: "740px",
            height: "fit-content",
          }}
        >
          <Stack>
            <Stack padding="1rem">
              <Typography variant="h6" color="primary.dark" fontWeight="bold">
                DOT Inspections in the past 7 Days
              </Typography>
            </Stack>
            <Stack
              justifyContent="space-between"
              spacing={2}
              padding=".5rem 1rem 1rem"
            >
              <Stack direction="row" justifyContent="space-between">
                <Button
                  variant="outlined"
                  startIcon={<LoopIcon color="primary" />}
                  onClick={loadData}
                >
                  Refresh
                </Button>
                <Button
                  variant="contained"
                  startIcon={<AddCircleIcon />}
                  onClick={() => setDialogOpen(true)}
                >
                  Add new
                </Button>
              </Stack>
              <Stack>
                <DOTTable dotRecords={dotRecords} loading={loading} />
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      </div>
    </LocalizationProvider>
  );
}

export default App;
