import {
  Alert,
  AlertTitle,
  Button,
  Fade,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import "./App.css";

import CreateIcon from "@mui/icons-material/Create";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import NewDOTForm from "./components/NewDOTForm";
import DOTTable from "./components/DOTTable";

import LoopIcon from "@mui/icons-material/Loop";

const LOADING_TIMEOUT = 2;

function App() {
  const [loading, setLoading] = useState(true);

  const [dotRecords, setDotRecords] = useState([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [feedback, setFeedback] = useState(null);

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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFeedback(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Snackbar
          open={feedback}
          onClose={handleClose}
          autoHideDuration={3000}
          // TransitionComponent={Fade}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={feedback?.type}>
            <AlertTitle>
              <Typography type="h6">{feedback?.type}</Typography>
            </AlertTitle>
            {feedback?.message}
          </Alert>
        </Snackbar>
        <NewDOTForm
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onSuccess={(successMsg) => {
            setFeedback({
              type: "success",
              message: successMsg,
            });
          }}
          onError={(errorMsg) => {
            setFeedback({
              type: "error",
              message: errorMsg,
            });
          }}
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
            <Stack
              padding="1rem"
              sx={
                {
                  // backgroundColor: "primary.dark",
                  // color: "white",
                }
              }
            >
              <Typography variant="h6">
                DOT Inspections In Last 7 Days
              </Typography>
            </Stack>

            <Stack
              justifyContent="space-between"
              spacing={2}
              padding="2rem 1rem 1rem"
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
                  startIcon={<CreateIcon />}
                  onClick={() => setDialogOpen(true)}
                >
                  New DOT
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
