import React from "react";
import BarChart from "./BarChart";
import { PieChart } from "./PieChart";

const Graph = (props) => {
  return (
    <div className="chartSection">
      <div className="barChart chartItem">
        <BarChart countryList={props?.countryList || {}} />
      </div>
      {/* <div className="pieChart chartItem">
        <PieChart />
      </div> */}
      {/* <div className="barChart chartItem"></div> */}
    </div>
  );
};

export default Graph;
