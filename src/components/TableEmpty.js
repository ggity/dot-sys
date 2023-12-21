import { Typography } from "@mui/material";

const TableEmpty = () => {
  return (
    <div className="loader-overlay">
      <Typography>No DOT inspections in previous 7 days</Typography>
    </div>
  );
};

export default TableEmpty;
