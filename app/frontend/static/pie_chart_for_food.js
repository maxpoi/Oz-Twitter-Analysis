let food_data_pie = [['Attitude', 'TwitterCount']];

function myFunc(data, city) {
  data = JSON.parse(data)
  us_food = 0
  cn_food = 0
  fr_food = 0
  it_food = 0
  jp_food = 0
  kr_food = 0
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

  var chart = new google.visualization.PieChart(document.getElementById('piechart_food_overall'));
  chart.draw(figure_data, options);
}
