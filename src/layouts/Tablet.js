import { Card } from "@mui/material";

const Tablet = ({ children }) => {
  return (
    <Card
      sx={{
        padding: "3rem 1rem .75rem",
        backgroundColor: "#555",
        borderRadius: "1rem",
      }}
    >
      <Card
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        {children}
      </Card>
    </Card>
  );
};

export default Tablet;
