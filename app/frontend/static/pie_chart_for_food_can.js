// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

let food_data_pie_can = [['Attitude', 'TwitterCount']];

function myFunc(data) {
  data = JSON.parse(data)
  for (let i = 0; i < data.length; i++) {
    if (data[i].key[0] === "Canberra"){
        food_data_pie_can.push(
            [data[i].key[1], data[i].value]
        )
    }
  }
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var figure_data = google.visualization.arrayToDataTable(food_data_pie_can);
  var options = {
    title: "Canberra Food Twitter Distribution"
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_food_canberra'));
  chart.draw(figure_data, options);
}
