// LineChartComponent.jsx

import Stack from "@mui/material/Stack";

import { LineChart } from "@mui/x-charts/LineChart";

import { lineChartsParams } from "../utils/chartsParams";

const LineChartComponent = () => {
    const withArea = false;
    const highlighted = "item";
    const faded = "global";

    return (
        <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
            <LineChart
                {...lineChartsParams}
                series={lineChartsParams.series.map((series) => ({
                    ...series,
                    area: withArea,
                    highlightScope: {
                        highlighted,
                        faded,
                    },
                }))}
            />
        </Stack>
    );
};

export default LineChartComponent;
