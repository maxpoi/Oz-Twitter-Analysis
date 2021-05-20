let _aurin_data = [['City', '0-14', '15-64', 'over 65', 'Twitter amount']];

function myFunc(data, age_data) {

  age_data = JSON.parse(age_data)
  data = JSON.parse(data)
  for (let i = 0; i < age_data.length; i++) {
    let index = 0;
    // console.log(age_data[i])
    for (let k = 0; k < data.length; k++) {
      // console.log(data[k])
      console.log(age_data[i].city)
      if (data[k].key.toLowerCase() === age_data[i].city) {
        index = k;
        break;
      }
    }
    _aurin_data.push(
      [
        data[index].key,
        parseInt(age_data[i]['0_to_14']),
        parseInt(age_data[i]['15_to_64']),
        parseInt(age_data[i]['over_65']),
        data[index].value
      ]
    )
  }
  google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
  var data = google.visualization.arrayToDataTable(_aurin_data);
  var options = {
    chart: {
      title: 'AFL Twitter Numbers Compared with Age distribution',
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
        twitter_amount: { label: 'Twitter Numbers' }, // Bottom x-axis.
        population: { side: 'top', label: 'Age Distribution' } // Top x-axis.
      }
    },
    isStacked: true
  };

  var chart = new google.charts.Bar(document.getElementById('barchart1'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}