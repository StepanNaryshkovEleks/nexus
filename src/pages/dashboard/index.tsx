import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Dashboard = () => {
  console.log("here!!");
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
      </Box>
      Dashboard
      <Link to="/">Sign</Link>
    </>
  );
};

export default Dashboard;
