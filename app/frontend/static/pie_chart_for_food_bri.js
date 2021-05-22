let food_data_pie_bri = [['Attitude', 'TwitterCount']];

function myFunc(data) {
  data = JSON.parse(data)
  for (let i = 0; i < data.length; i++) {
    if (data[i].key[0] === "Brisbane"){
        food_data_pie_bri.push(
            [data[i].key[1], data[i].value]
        )
    }
  }
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var figure_data = google.visualization.arrayToDataTable(food_data_pie_bri);
  var options = {
    title: "Brisbane Food Twitter Distribution"
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_food_brisbane'));
  chart.draw(figure_data, options);
}
