

let _aurin_data_for_percentage = [['City', '0-14', '15-64', 'over 65', 'Twitter Discussion Heat']];

function myFunc(data, age_data) {

  age_data = JSON.parse(age_data)
  data = JSON.parse(data)
  for (let i = 0; i < age_data.length; i++) {
    let total_person = 0;
    let percentage_of_0_to_14 = 0
    let percentage_of_15_to_64 = 0
    let percentage_of_over_65 = 0
    total_person += parseInt(age_data[i]['0_to_14']);
    total_person += parseInt(age_data[i]['15_to_64']);
    total_person += parseInt(age_data[i]['over_65']);
    percentage_of_0_to_14 = parseInt(age_data[i]['0_to_14']) / total_person;
    percentage_of_15_to_64 = parseInt(age_data[i]['15_to_64']) / total_person;
    percentage_of_over_65 = parseInt(age_data[i]['over_65']) / total_person;

    let index = 0;
    for (let k = 0; k < data.length; k++) {
      if (data[k].key.toLowerCase() === age_data[i].city) {
        index = k;
        break;
      }
    }
    _aurin_data_for_percentage.push(
      [
        data[index].key,
        percentage_of_0_to_14,
        percentage_of_15_to_64,
        percentage_of_over_65,
        data[index].value
      ]
    )
  }
  console.log(_aurin_data_for_percentage)
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable(_aurin_data_for_percentage);
  var options = {
    chart: {
      title: 'AFL Twitter Discussion Heat Compared with Age distribution',
    },
    bars: 'horizontal', // Required for Material Bar Charts.
    series: {
      0: { axis: 'population' },
      1: { axis: 'population' },
      2: { axis: 'population' },
      3: { axis: 'twitter_amount' },

    },
    axes: {
      x: {
        twitter_amount: { label: 'Twitter Discussion Heat' }, // Bottom x-axis.
        population: { side: 'top', label: 'Age Distribution Percentage' } // Top x-axis.
      }
    },
    isStacked: true
  };


  var chart = new google.charts.Bar(document.getElementById('barchart2'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
