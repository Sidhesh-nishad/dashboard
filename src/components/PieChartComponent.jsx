// PieChartComponent.jsx

import Stack from "@mui/material/Stack";

import { PieChart } from "@mui/x-charts/PieChart";

import { pieChartsParams } from "../utils/chartsParams";

const PieChartComponent = () => {
    const highlighted = "item";
    const faded = "global";

    return (
        <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
            <PieChart
                {...pieChartsParams}
                series={pieChartsParams.series.map((series) => ({
                    ...series,
                    highlightScope: {
                        highlighted,
                        faded,
                    },
                }))}
            />
        </Stack>
    );
};

export default PieChartComponent;
