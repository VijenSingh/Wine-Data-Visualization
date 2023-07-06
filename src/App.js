import './App.css';

import React from 'react';
import data from './components/Wine-Data.json';
import { calculateMean, calculateMedian, calculateMode, roundToThreeDecimals } from './components/Utils';


const calculateFlavanoidsStats = (data) => {
  const class1Flavanoids = data
  .filter((item) => item.Alcohol === 1)
  .map((item) => item.Flavanoids);
const class2Flavanoids = data
  .filter((item) => item.Alcohol === 2)
  .map((item) => item.Flavanoids);
  
  const class3Flavanoids = data
  .filter((item) => item.Alcohol === 3)
  .map((item) => parseFloat(item.Flavanoids))
  .filter((item) => !isNaN(item));

  return {
    class1: {
      mean: roundToThreeDecimals(calculateMean(class1Flavanoids)),
      median: roundToThreeDecimals(calculateMedian(class1Flavanoids)),
      mode: calculateMode(class1Flavanoids),
    },
    class2: {
      mean: roundToThreeDecimals(calculateMean(class2Flavanoids)),
      median: roundToThreeDecimals(calculateMedian(class2Flavanoids)),
      mode: calculateMode(class2Flavanoids),
    },
    class3: {
      mean: roundToThreeDecimals(calculateMean(class3Flavanoids)),
      median: roundToThreeDecimals(calculateMedian(class3Flavanoids)),
      mode: [roundToThreeDecimals(calculateMode(class3Flavanoids)[0])],
    },
  };
};

const calculateGammaStats = (data) => {
  const class1Gamma = [];
  const class2Gamma = [];
  const class3Gamma = [];

  data.forEach((item) => {
    const gamma = (item.Ash * item.Hue) / item.Magnesium;

    if (!isNaN(gamma)) {
      if (item.Alcohol === 1) {
        class1Gamma.push(gamma);
      } else if (item.Alcohol === 2) {
        class2Gamma.push(gamma);
      } else if (item.Alcohol === 3) {
        class3Gamma.push(gamma);
      }

    }
  });

  return {
    class1: {
      mean: roundToThreeDecimals(calculateMean(class1Gamma)),
      median: roundToThreeDecimals(calculateMedian(class1Gamma)),
      mode: [roundToThreeDecimals(calculateMode(class1Gamma)[0])],
    },
    class2: {
      mean: roundToThreeDecimals(calculateMean(class2Gamma)),
      median: roundToThreeDecimals(calculateMedian(class2Gamma)),
      mode: [roundToThreeDecimals(calculateMode(class2Gamma)[0])],
    },
    class3: {
      mean: roundToThreeDecimals(calculateMean(class3Gamma)),
      median: roundToThreeDecimals(calculateMedian(class3Gamma)),
      mode: [roundToThreeDecimals(calculateMode(class3Gamma)[0])],
    },
  };
};


const App = () => {
  const flavanoidsStats = calculateFlavanoidsStats(data);
  const gammaStats = calculateGammaStats(data);

  return (
    <div className="table-container">
      
      <h2>Flavanoids Stats</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            <td>{flavanoidsStats.class1.mean}</td>
            <td>{flavanoidsStats.class2.mean}</td>
            <td>{flavanoidsStats.class3.mean}</td>
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            <td>{flavanoidsStats.class1.median}</td>
            <td>{flavanoidsStats.class2.median}</td>
            <td>{flavanoidsStats.class3.median}</td>
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td>{flavanoidsStats.class1.mode.join(', ')}</td>
            <td>{flavanoidsStats.class2.mode.join(', ')}</td>
            <td>{flavanoidsStats.class3.mode.join(', ')}</td>
          </tr>
        </tbody>
      </table>

      <h2>Gamma Stats</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            <td>{gammaStats.class1.mean}</td>
            <td>{gammaStats.class2.mean}</td>
            <td>{gammaStats.class3.mean}</td>
          </tr>
          <tr>
            <td>Gamma Median</td>
            <td>{gammaStats.class1.median}</td>
            <td>{gammaStats.class2.median}</td>
            <td>{gammaStats.class3.median}</td>
          </tr>
          <tr>
            <td>Gamma Mode</td>
            <td>{gammaStats.class1.mode.join(', ')}</td>
            <td>{gammaStats.class2.mode.join(', ')}</td>
            <td>{gammaStats.class3.mode.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;

