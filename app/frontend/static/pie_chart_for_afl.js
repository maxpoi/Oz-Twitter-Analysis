let data_pie = [['Attitude', 'TwitterCount']];
function myFunc(data) {

    data = JSON.parse(data)
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].key)
        console.log(data[i].value)
        data_pie.push(
        [data[i].key, data[i].value]
        )
    }

  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var figure_data = google.visualization.arrayToDataTable(data_pie);
  var options = {
    title: 'Twitter Discussion Percentage'
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_afl'));
  chart.draw(figure_data, options);
}
