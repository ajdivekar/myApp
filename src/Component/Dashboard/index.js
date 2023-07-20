import React, { useState, useEffect} from "react";
import Graph from "../Graph/index";
import CountryList from "../../JSON/countryList.json";
const Dashboard = () => {
  const [ddVal, setDdValue] = useState();
  const [dataValue, setDataValue] = useState({});
  
  const handleChange = (e) => {
    setDdValue(e.target.value);
  };

  useEffect(() => {
    console.log("CountryList",CountryList);
    const labels = CountryList?.map((x) =>  x.countryName);
    const population = CountryList?.map((x) =>  x.population);

    let dataTest = {
        labels,
        datasets: [
            {
            label: 'Country',
            data: labels?.map((x) =>  x),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          },
          {
            label: 'Population',
            data: population?.map((y) => y),
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
          },
        ]
      };
    setDataValue({...dataTest});
  }, [CountryList]);

  return (
    <div>
      <section className="dropdownSection">
        <span>{ddVal}</span>
        <select value={ddVal} onChange={handleChange}>
            <option value={""}></option>
          {CountryList?.map((x) => {
            return (
              <option key={x.countryName} value={x.currency}>
                {x.countryName}
              </option>
            );
          })}
        </select>
      </section>
      <section className="graphSection">
        {Object.keys(dataValue).length && <Graph countryList={dataValue} />}
      </section>
    </div>
  );
};

export default Dashboard;
