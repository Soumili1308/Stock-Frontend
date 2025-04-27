async function askBot() {
  const stock = document.getElementById("stockInput").value;
  const res = await fetch("/predict", {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ stock })
  });
  const data = await res.json();
  document.getElementById("chat").innerText = data.message;
  drawChart();
}

function drawChart() {
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length: 10}, (_, i) => T$,{i}),
      datasets: [{
        label: "Sample Stock Data",
        borderColor: 'blue',
        backgroundColor: 'green',
        data: Array.from({length: 10}, () => Math.random() * 100)
      }]
}
});
}
