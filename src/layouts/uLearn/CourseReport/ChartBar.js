import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js";
import { Typography } from "@mui/material";

function ChartBar(uPolicyChartBar) {
  const [data, setData] = useState({
    labels: [
      "0-10",
      "11-20",
      "21-30",
      "31-40",
      "41-50",
      "51-60",
      "61-70",
      "71-80",
      "81-90",
      "91-100",
    ],
    datasets: [
      {
        label: "Data",
        data: [0, 0, 0, 0, 0, 0, 2, 1, 1, 2],
        borderWidth: 1,
        backgroundColor: "rgb(32, 156, 232)",
      },
    ],
    datasets1: [
      {
        label: "Data",
        data: [0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
        borderWidth: 1,
        backgroundColor: "rgb(32, 156, 232)",
      },
    ],
  });

  useEffect(() => {
    // Update the values for specific categories
    const updateValues = () => {
      setData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: prevData.datasets[0].data.map((value, index) => {
              return value; // Keep the rest unchanged
            }),
          },
        ],
      }));
    };

    updateValues();
  }, [uPolicyChartBar]);

  return (
    <div>
      <Bar
        data={data}
        options={{
          scales: {
            x: {
              type: "category",
              title: {
                display: true,
                text: "Score %",
              },
              grid: {
                display: false, // Hide vertical gridlines
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of completed Courses",
              },
            },
          },
          animation: false, // Disable animation
        }}
        width={400}
        height={300}
      />
    </div>
  );
}

export default ChartBar;
