import { CircularProgress, LinearProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <CircularProgress />
      {/* <LinearProgress /> */}
    </div>
  );
};

export default Loader;
