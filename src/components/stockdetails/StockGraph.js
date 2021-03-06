import React from "react";

// Redux
import { connect } from "react-redux";

// Chart.js
import { Bar } from "react-chartjs-2";

const StockGraph = (props) => {
  const { stock, activeTab } = props;

  let activeData = stock[activeTab.id];

  let filteredData = [];
  Object.keys(activeData).forEach((key) => {
    if (activeData[key]["checked"] === true) {
      filteredData.push(activeData[key]);
    }
  });

  const data = {
    labels: filteredData.map((item) => item.label) || "Loading",
    datasets: [
      {
        label: "Value",
        data: filteredData.map((item) => item.value) || 0,
        backgroundColor: "rgba(0,0,255, 0.2)",
        borderColor: "rgba(0,0,255, 1.0)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
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
    // https://www.chartjs.org/docs/latest/charts/bar.html
    <Bar data={data} width={100} height={200} options={options} />
  );
};

const mapStateToProps = (state) => {
  return {
    stock: state.stock,
    activeTab: state.stock.activeTab,
  };
};

export default connect(mapStateToProps, {})(StockGraph);
