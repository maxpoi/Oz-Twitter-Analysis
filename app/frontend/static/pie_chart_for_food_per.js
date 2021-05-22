let food_data_pie_per = [['Attitude', 'TwitterCount']];

function myFunc(data) {
//    if (food_data_pie_ade.length  !== 1) {
//        return
//    }
  data = JSON.parse(data)
  for (let i = 0; i < data.length; i++) {
    if (data[i].key[0] === "Perth"){
        food_data_pie_per.push(
            [data[i].key[1], data[i].value]
        )
    }
  }
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var figure_data = google.visualization.arrayToDataTable(food_data_pie_per);
  var options = {
    title: "Perth Food Twitter Distribution"
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_food_perth'));
  chart.draw(figure_data, options);
}
