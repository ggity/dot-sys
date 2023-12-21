import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const Logo = () => {
  return (
    <Stack position="relative" zIndex="1">
      <SearchIcon
        color="primary"
        fontSize="medium"
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          transform: "translate(5%, -55%)",
        }}
      />
      <LocalShippingOutlinedIcon fontSize="large" color="primary" />
    </Stack>
  );
};

export default Logo;
