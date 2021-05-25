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
        if (data[i].key[1] === "American food"){
            us_food += data[i].value
        }else if(data[i].key[1] === "Chinese food"){
            cn_food += data[i].value
        }else if(data[i].key[1] === "French food"){
            fr_food += data[i].value
        }else if(data[i].key[1] === "Italian food"){
            it_food += data[i].value
        }else if(data[i].key[1] === "Japanese food"){
            jp_food += data[i].value
        }else if(data[i].key[1] === "Korean food"){
            kr_food += data[i].value
        }
      }

    food_data_pie.push(
        ["American food", us_food],
        ["Chinese food", cn_food],
        ["French food", fr_food],
        ["Italian food", it_food],
        ["Japanese food", jp_food],
        ["Korean food", kr_food],
    )
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var figure_data = google.visualization.arrayToDataTable(food_data_pie);
  var options = {
    title: "Overall Food Twitter Distribution"
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_food_overall'));
  chart.draw(figure_data, options);
}
