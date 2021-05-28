// var name = "rob";
// var data = fetch("https://api.alternative.me/fng/").then((res) => res.json()).then((data) => console.log(data)));;
// console.log(results);

const target = document.getElementById("target");
const classification = document.getElementById("classification");
const timetillupdate = document.getElementById("timetillupdate");

const data = fetch("https://api.alternative.me/fng/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    target.textContent = `Fear and Index value is ${data.data[0].value}`;
    classification.textContent = `This is a class ${data.data[0].value_classification}`;
    timetillupdate.textContent = `Next update is only ${(
      data.data[0].time_until_update / 3600
    ).toFixed(2)} hours away.`;
  });

console.log(data);
