import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart, { Legend } from "chart.js/auto";
import axios from "axios";

function BarChart() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      axios.get("/api/test").then((result) => {
        console.log(result.data.message);
        setMsg(result.data.message);
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [msg]);
  console.log("re rendered");
  return (
    <div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "data1",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 0, 0, 0.5)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 159, 64, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
            {
              label: "data2",
              data: [60, 12, 25, 35, 54, 10],
              backgroundColor: [
                "rgba(255, 0, 0, 0.3)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={200}
        width={600}
        options={{
          maintainAspectRatio: true,
          scales: {
            yield: {
              beginAtZero: false,
            },
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                color: "rgb(24, 150, 255)",

                // Độ lớn chữ
                font: {
                  size: "16",
                },
              },
            },
          },
        }}
      />
      <h1>{msg}</h1>
      {/* <button onClick={clickhadler}></button> */}
    </div>
  );
}

export default BarChart;
