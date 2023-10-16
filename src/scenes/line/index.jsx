import { Box } from "@mui/material";
import Header from "../../Components/Dashboard/Header";
import LineChart from "../../Components/Dashboard/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
