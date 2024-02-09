// chartParams.js
export const lineChartsParams = {
    series: [
        { data: [3, 4, 1, 6, 5], label: "A", area: false, stack: "total" },
        { data: [4, 3, 1, 5, 8], label: "B", area: false, stack: "total" },
        { data: [4, 2, 5, 4, 1], label: "C", area: false, stack: "total" },
    ],
    xAxis: [{ data: [1, 2, 3, 4, 5], type: "linear" }],
    height: 400,
};

export const pieChartsParams = {
    series: [
        {
            data: [{ value: 5 }, { value: 10 }, { value: 15 }],
            label: "Series 1",
            outerRadius: 80,
            highlighted: { additionalRadius: 10 },
        },
        {
            data: [{ value: 5 }, { value: 10 }, { value: 15 }],
            label: "Series 1",
            innerRadius: 90,
            highlighted: { additionalRadius: 10 },
        },
    ],
    height: 400,
    margin: { top: 50, bottom: 50 },
};
