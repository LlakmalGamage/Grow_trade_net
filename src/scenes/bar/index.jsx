import { Box } from "@mui/material";
import Header from "../../Components/Dashboard/Header";
import BarChart from "../../Components/Dashboard/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
