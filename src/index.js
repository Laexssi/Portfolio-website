import "./scss/main.scss";
require("regenerator-runtime/runtime");

const API_KEY = "D-qTnXA-fn3CMsz3xYB5";
const testUrl =
  "https://www.codewars.com/api/v1/code-challenges/valid-braces?access_key=some-D-qTnXA-fn3CMsz3xYB5";
const statsUrl =
  "https://www.codewars.com/api/v1/users/Laexssi/code-challenges/completed?page=0";

const kataStats = document.querySelector(".codewars__stats > span");
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  kataStats.textContent = `Completed Kata: ${data.totalItems}`;
}

document.addEventListener("DOMContentLoaded", () => fetchData(statsUrl));

console.log(kataStats);
