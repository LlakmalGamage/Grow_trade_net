import { Box } from "@mui/material";
import Header from "../../Components/Admin Components/Header";
import PieChart from "../../Components/Admin Components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
