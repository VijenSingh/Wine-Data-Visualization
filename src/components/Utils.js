

// Useful functions for calculating mean
const calculateMean = (data) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  };
  

  
  // Useful functions for calculating Median
  const calculateMedian = (data) => {
    const sortedData = [...data].sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 === 0
      ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
      : sortedData[middleIndex];
  };
  
  

// Useful functions for calculating Mode
 const calculateMode = (data) => {
    const frequencyMap = new Map();
    data.forEach((value) => {
      if (frequencyMap.has(value)) {
        frequencyMap.set(value, frequencyMap.get(value) + 1);
      } else {
        frequencyMap.set(value, 1);
      }
    });
  
    let maxCount = 0;
    let modes = [];
  
    frequencyMap.forEach((count, value) => {
      if (count > maxCount) {
        maxCount = count;
        modes = [value];
      } else if (count === maxCount) {
        modes.push(value);
      }
    });
  
    return modes.slice(0, 5); 
  };
  
  
  const roundToThreeDecimals = (number) => {
    return Math.round(number * 1000) / 1000;
  };
  
  export { calculateMean, calculateMedian, calculateMode, roundToThreeDecimals };
  