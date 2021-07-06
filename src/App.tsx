import "./styles.css";
import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import { all_data } from "./data";

const App = () => {
  const data = all_data;

  const [waterKey, setWaterKey] = useState("");
  const [chemKey, setChemKey] = useState("");
  const [healthKey, setHealthKey] = useState("");
  const [soEconKey, setSoEconKey] = useState("");

  const water = ["groundwater threats", "impaired waterbodies"];
  const chemical = [
    "pollution",
    "lead risk",
    "cleanup sites",
    "toxic release",
    "hazardous waste"
  ];
  const health = ["cardiovascular disease", "low birth weight", "asthma"];
  const socioeconomic = [
    "poverty",
    "unemployment",
    "education",
    "traffic",
    "linguistic isolation"
  ];

  const buttonToData = (label: string) => {
    const bToD = {
      "groundwater threats": "groundwater_threats",
      "impaired waterbodies": "impaired_waterbodies",
      pollution: "pollution",
      "toxic release": "tox_release",
      "hazardous waste": "haz_waste",
      "lead risk": "lead",
      "cleanup sites": "cleanup_sites",
      "low birth weight": "low_birth_weight",
      "cardiovascular disease": "cardiovascular_disease",
      asthma: "asthma",
      poverty: "poverty",
      unemployment: "unemployment",
      education: "education",
      "linguistic isolation": "linguistic_isolation",
      traffic: "traffic",
      "housing burden": "housing_burden"
    };
    const category = bToD[label];

    if (water.includes(label)) {
      setWaterKey(category);
    } else if (chemical.includes(label)) {
      setChemKey(category);
    } else if (health.includes(label)) {
      setHealthKey(category);
    } else {
      setSoEconKey(category);
    }
  };

  return (
    <div className="App">
      {water.map((buttonLabel, i) => (
        <button
          className="fill"
          key={i}
          name={buttonLabel}
          onClick={() => buttonToData(buttonLabel)}
        >
          {buttonLabel}
        </button>
      ))}
      <p className="legend-title"> Housing burden percentile</p>
      <ScatterPlot data={data} xDataKey={"zip"} yDataKey={waterKey} />
      {chemical.map((buttonLabel, i) => (
        <button
          className="fill"
          key={i}
          name={buttonLabel}
          onClick={() => buttonToData(buttonLabel)}
        >
          {buttonLabel}
        </button>
      ))}
      <p className="legend-title"> Housing burden percentile</p>
      <ScatterPlot data={data} xDataKey={"zip"} yDataKey={chemKey} />
      {health.map((buttonLabel, i) => (
        <button
          className="fill"
          key={i}
          name={buttonLabel}
          onClick={() => buttonToData(buttonLabel)}
        >
          {buttonLabel}
        </button>
      ))}
      <p className="legend-title"> Housing burden percentile</p>
      <ScatterPlot data={data} xDataKey={"zip"} yDataKey={healthKey} />
      {socioeconomic.map((buttonLabel, i) => (
        <button
          className="fill"
          key={i}
          name={buttonLabel}
          onClick={() => buttonToData(buttonLabel)}
        >
          {buttonLabel}
        </button>
      ))}
      <p className="legend-title"> Housing burden percentile</p>
      <ScatterPlot data={data} xDataKey={"zip"} yDataKey={soEconKey} />
    </div>
  );
};

export default App;
