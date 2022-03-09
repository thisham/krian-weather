import { testingData, trainingData } from "./utils/dataload";

let Bayes = require('bayes-classifier');
let classifier = new Bayes();

trainingData.forEach(weather => {
  classifier.addDocument(JSON.stringify(weather.data), weather.rainyDay);
});

classifier.train();

testingData.forEach(weather => {
  classifier.classify(JSON.stringify(weather.data));
});

console.log('data baru: ', classifier.classify(JSON.stringify({
  southMount: "invisible",
  northEast: "clear",
  windDirection: "west",
  cloudMovement: 2,
  javaneseMonth: 6
})));