// Your code goes here!
import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";
import { modulo, percentage, percentageOf, difference } from "./percentage.js";

// Modulo
const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

// Percentage

const percentage1 = document.querySelector("#percentage_1");
const percentage2 = document.querySelector("#percentage_2");
const percentage_result = document.querySelector("#percentage_result");

// PercentageOf

const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2 = document.querySelector("#percentageOf_2");
const percentageOf_result = document.querySelector("#percentageOf_result");

// Difference

const difference1 = document.querySelector("#difference_1");
const difference2 = document.querySelector("#difference_2");
const difference_result = document.querySelector("#difference_result");

// Aspect Ratio

const originalWidth = document.querySelector("#ratio_1");
const originalHeight = document.querySelector("#ratio_2");
const newWidth = document.querySelector("#ratio_result-width");
const newHeight = document.querySelector("#ratio_result-height");

/////////////////////////////////////////

// Modulo Event Listener

modulo1.addEventListener("input", () => {
  const outputModulo = modulo(+modulo1.value, +modulo2.value);
  moduloResult.value = outputModulo;
});

modulo2.addEventListener("input", () => {
  const outputModulo = modulo(+modulo1.value, +modulo2.value);
  moduloResult.value = outputModulo;
});

// Percentage Event Listener

percentage1.addEventListener("input", () => {
  const outputPercentage = percentage(+percentage1.value, +percentage2.value);
  percentage_result.value = outputPercentage;
});

percentage2.addEventListener("input", () => {
  const outputPercentage = percentage(+percentage1.value, +percentage2.value);
  percentage_result.value = outputPercentage;
});

// Percentage Of Event Listener

percentageOf1.addEventListener("input", () => {
  const outputPercentageOf = percentageOf(
    +percentageOf1.value,
    +percentageOf2.value
  );
  percentageOf_result.value = outputPercentageOf;
});

percentageOf2.addEventListener("input", () => {
  const outputPercentageOf = percentageOf(
    +percentageOf1.value,
    +percentageOf2.value
  );
  percentageOf_result.value = outputPercentageOf;
});

// Difference Event Listener

difference1.addEventListener("input", () => {
  const outputDifference = difference(+difference1.value, +difference2.value);
  difference_result.value = outputDifference;
});

difference2.addEventListener("input", () => {
  const outputDifference = difference(+difference1.value, +difference2.value);
  difference_result.value = outputDifference;
});

// Aspect Ratio Event Listener

originalWidth.addEventListener("input", () => {
  const aspectOutput = calculateAspectRatio(
    +originalHeight.value,
    +originalWidth.value,
    +newWidth.value,
    "h"
  );
  newHeight.value = aspectOutput;
});

originalHeight.addEventListener("input", () => {
  const aspectOutput = calculateAspectRatio(
    +originalHeight.value,
    +originalWidth.value,
    +newWidth.value,
    "h"
  );
  newHeight.value = aspectOutput;
});
