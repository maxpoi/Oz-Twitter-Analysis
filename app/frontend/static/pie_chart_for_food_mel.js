// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

let food_data_pie_mel = [['Attitude', 'TwitterCount']];

function myFunc(data) {
//    if (food_data_pie_ade.length  !== 1) {
//        return
//    }
  data = JSON.parse(data)
  for (let i = 0; i < data.length; i++) {
    if (data[i].key[0] === "Melbourne"){
        food_data_pie_mel.push(
            [data[i].key[1], data[i].value]
        )
    }
  }
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var figure_data = google.visualization.arrayToDataTable(food_data_pie_mel);
  var options = {
    title: "Melbourne Food Twitter Distribution"
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_food_melbourne'));
  chart.draw(figure_data, options);
}
