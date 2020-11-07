import React from "react";
import {
  Bar,
  BarChart,
  Label,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Title from "./Title";

export default function Chart({ data, countryDisplay }) {
  return (
    <React.Fragment>
      <Title>Score statistics</Title>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 20,
            left: 24,
          }}
        >
          <XAxis dataKey={countryDisplay ? "country" : "gender"}>
            <Label
              dy={25}
              angle={0}
              position="center"
              style={{ textAnchor: "left" }}
            >
              {countryDisplay ? "Country" : "Gender"}
            </Label>
          </XAxis>
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
              Average score
            </Label>
          </YAxis>
          <Bar type="monotone" dataKey="score" fill="#556CD6" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
