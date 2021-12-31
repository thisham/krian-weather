import { SouthMountCounterType } from "../types/counterData";
import { WeatherDataType, SouthMountEnum } from "../types/data";

function countAllData(weatherData: WeatherDataType[]): number {
  return weatherData.length;
}

function countSouthMountData(weatherData: WeatherDataType[]): object {
  let southMountConditionsCount = {};

  weatherData.forEach((weather) => {
    let southMountVisibility = weather.data.southMount;

    if (southMountConditionsCount[southMountVisibility] > 0) 
      southMountConditionsCount[southMountVisibility]++;
    else southMountConditionsCount[southMountVisibility] = 1
  });

  return southMountConditionsCount;
}

function countWindDirectionData(weatherData: WeatherDataType[]): object {
  let northEastConditionsCount = {};

  weatherData.forEach((weather) => {
    let northEastCondition = weather.data.northEast;
    
    if (northEastConditionsCount[northEastCondition] > 0) 
      northEastConditionsCount[northEastCondition]++;
    else northEastConditionsCount[northEastCondition] = 1
  });

  return northEastConditionsCount;
}

function countCloudVelocityData(weatherData: WeatherDataType[]): object {
  let cloudVelocitiesCount = {};

  weatherData.forEach((weather) => {
    let cloudVelocityCondition = weather.data.cloudMovement;
    
    if (cloudVelocitiesCount[cloudVelocityCondition] > 0) 
      cloudVelocitiesCount[cloudVelocityCondition]++;
    else cloudVelocitiesCount[cloudVelocityCondition] = 1
  });

  return cloudVelocitiesCount;
}

function countPranotomongsoMonth(weatherData: WeatherDataType[]): object {
  let pranotomongsoMonthCount = {};

  weatherData.forEach((weather) => {
    let currentPranotomongso = weather.data.javaneseMonth;
    
    if (pranotomongsoMonthCount[currentPranotomongso] > 0) 
      pranotomongsoMonthCount[currentPranotomongso]++;
    else pranotomongsoMonthCount[currentPranotomongso] = 1
  });

  return pranotomongsoMonthCount;
}

export {
  countAllData,

  countSouthMountData,
  countWindDirectionData,
  countCloudVelocityData,
  countPranotomongsoMonth
}