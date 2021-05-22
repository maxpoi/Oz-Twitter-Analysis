

function myFunc(data, city) {
  food_data_pie = [['Attitude', 'TwitterCount']];
  element_id = "piechart_food_" + city.toLowerCase()
  data = JSON.parse(data)
  for (let i = 0; i < data.length; i++) {
    if (city === data[i].key[0]){
        food_data_pie.push(
            [data[i].key[1], data[i].value]
        )
    }
  }
  google.charts.setOnLoadCallback(drawChart(food_data_pie, element_id, city));
}

function drawChart(food_data_pie, element_id, city) {
  var figure_data = google.visualization.arrayToDataTable(food_data_pie);
  var options = {
    title: city + " Food Twitter Distribution"
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById(element_id));
  chart.draw(figure_data, options);
}
