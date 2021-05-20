    let _age_data = [['City', '0-14', '15-64', 'over 65', 'Negative Twitter Amount', 'Neutral Twitter Amount', 'Positive Twitter Amount']];

    function myFunc(data, age_data, scenario) {
        if (scenario === 2){
            scenario_str = "Vaccine "
        }else{
            scenario_str = "5G "
        }

        age_data = JSON.parse(age_data)
        data = JSON.parse(data)
        for(let i=0;i<age_data.length;i++){
            let index = 0;
            for (let k=0; k<data.length;k++){
                if(data[k].key[0] === null){
                    continue
                }
                if(data[k].key[0].toLowerCase() === age_data[i].city){
                    index = k;
                    break;
                }
            }
            _age_data.push(
                [
                data[index].key[0],
                parseInt(age_data[i]['0_to_14']),
                parseInt(age_data[i]['15_to_64']),
                parseInt(age_data[i]['over_65']),
                data[index].value,
                data[index+1].value,
                data[index+2].value
                ]
            )
        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_age_data);
        var options = {
          chart: {
            title: scenario_str + 'Twitter Numbers Compared with Age distribution',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          series:{
              0: {axis: 'population'},
              1: {axis: 'population'},
              2: {axis: 'population'},
              3: {axis: 'twitter_amount'},
              4: {axis: 'twitter_amount'},
              5: {axis: 'twitter_amount'},

          },
          axes: {
            x: {
              twitter_amount: {label: 'Twitter Numbers'}, // Bottom x-axis.
              population: {side: 'top', label: 'Age Distribution'} // Top x-axis.
                }
            },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById('barchart2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }