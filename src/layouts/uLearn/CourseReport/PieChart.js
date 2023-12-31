// import * as React from "react";
// import { PieChart, pieArcLabelClasses, Pie } from "@mui/x-charts/PieChart";
// import { useDrawingArea } from "@mui/x-charts/hooks";
// import { styled } from "@mui/material/styles";

// const data = [
//   { value: 35, label: "Started", color: "red" },
//   { value: 7, label: "Incomplete", color: "yellow" },
//   { value: 7, label: "Finish", color: "green" },
// ];
// const data1 = [
//   { value: 5, label: "Started", color: "red" },
//   { value: 3, label: "Finish", color: "green" },
// ];

// const size = {
//   width: 600,
//   height: 300,
// };

// const StyledText = styled("text")(({ theme }) => ({
//   fill: theme.palette.text.primary,
//   textAnchor: "middle",
//   dominantBaseline: "central",
//   fontSize: 16,
// }));

// const PieChartContainer = styled("div")({
//   position: "relative",
//   width: size.width,
//   height: size.height,
// });

// const CenterLabel = styled("div")(({ theme }) => ({
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   color: "black",
//   fontSize: "18px",
// }));

// // eslint-disable-next-line react/prop-types
// export default function PieChartWithCenterLabel({ uPolicyReport }) {
//   const { width, height, left, top } = useDrawingArea();

//   return uPolicyReport ? (
//     <PieChartContainer>
//       <PieChart
//         series={[
//           {
//             data1,
//             innerRadius: 100,
//             cx: size.width / 3,
//             cy: size.height / 2,

//             arcLabel: (item) => `${item.value}`,
//             arcLabelMinAngle: 45,
//             data,
//           },
//         ]}
//         sx={{
//           [`& .${pieArcLabelClasses.root}`]: {
//             fill: "black",
//             fontSize: "18px",
//           },
//         }}
//         {...size}
//       />

//       <CenterLabel></CenterLabel>
//     </PieChartContainer>
//   ) : (
//     <PieChartContainer>
//       <PieChart
//         series={[
//           {
//             data,
//             innerRadius: 100,
//             cx: size.width / 3,
//             cy: size.height / 2,

//             arcLabel: (item) => `${item.value}`,
//             arcLabelMinAngle: 45,
//             data,
//           },
//         ]}
//         sx={{
//           [`& .${pieArcLabelClasses.root}`]: {
//             fill: "black",
//             fontSize: "18px",
//           },
//         }}
//         {...size}
//       />

//       <CenterLabel></CenterLabel>
//     </PieChartContainer>
//   );
// }

import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 35, label: "Started", color: "red" },
  { value: 7, label: "Incomplete", color: "yellow" },
  { value: 7, label: "Finish", color: "green" },
];

const data1 = [
  { value: 5, label: "Started", color: "red" },
  { value: 3, label: "Finish", color: "green" },
];

const size = {
  width: 600,
  height: 300,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 16,
}));

const PieChartContainer = styled("div")({
  position: "relative",
  width: size.width,
  height: size.height,
});

const CenterLabel = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
  fontSize: "18px",
}));

export default function PieChartWithCenterLabel(uPolicyReport) {
  const { width, height, left, top } = useDrawingArea();
  const chartData = uPolicyReport ? data1 : data;

  return (
    <PieChartContainer>
      <PieChart
        series={[
          {
            data: chartData,
            innerRadius: 100,
            cx: size.width / 3,
            cy: size.height / 2,
            arcLabel: (item) => `${item.value}`,
            arcLabelMinAngle: 45,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "black",
            fontSize: "18px",
          },
        }}
        {...size}
      />
      <CenterLabel>{/* Your center label content goes here */}</CenterLabel>
    </PieChartContainer>
  );
}
