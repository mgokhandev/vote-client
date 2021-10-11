import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ activeVoteOne, activeVoteTwo }) => {
  const data = {
    labels: ["Team One", "Team Two"],
    datasets: [
      {
        label: "# of Votes",
        data: [activeVoteOne, activeVoteTwo],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="Chart">
      <Bar data={data} options={options} />{" "}
    </div>
  );
};

export default Chart;
