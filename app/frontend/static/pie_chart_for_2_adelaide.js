

let data_adelaide = [['Attitude', 'TwitterCount']];

function myFunc(data, age_data) {

  age_data = JSON.parse(age_data)
  data = JSON.parse(data)
  for (let i = 0; i < age_data.length; i++) {
    // let total_person = 0;
    // let percentage_of_0_to_14 = 0
    // let percentage_of_15_to_64 = 0+
    // let percentage_of_over_65 = 0
    // console.log(age_data[i])
    // total_person += parseInt(age_data[i]['0_to_14']);
    // total_person += parseInt(age_data[i]['15_to_64']);
    // total_person += parseInt(age_data[i]['over_65']);
    // percentage_of_0_to_14 = parseInt(age_data[i]['0_to_14']) / total_person;
    // percentage_of_15_to_64 = parseInt(age_data[i]['15_to_64']) / total_person;
    // percentage_of_over_65 = parseInt(age_data[i]['over_65']) / total_person;

    // let index = 0;
    // for (let k = 0; k < data.length; k++) {
    //   if (data[k].key.toLowerCase() === age_data[i].city) {
    //     index = k;
    //     break;
    //   }
    // }
    // _aurin_data_1.push(
    //   [
    //     percentage_of_0_to_14,
    //     percentage_of_15_to_64,
    //     percentage_of_over_65
    //   ]
    // )
    // console.log(_aurin_data_1)
    data_adelaide.push(
      [
        'Negative',
        data[6].value,
      ],
      [
        'Netural',
        data[7].value,
      ],
      [
        'Positive',
        data[8].value,
      ]
    )
    console.log(data_adelaide)
    break;
  }
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var figure_data = google.visualization.arrayToDataTable(data_adelaide);
  var options = {
    title: 'Adelaide'
    // pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('pie_chart_adelaide'));
  chart.draw(figure_data, options);
}
