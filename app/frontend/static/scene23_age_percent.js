let _age_data_percent = [['City', '0-14', '15-64', 'over 65', 'Negative Twitter Percentage', 'Neutral Twitter Percentage', 'Positive Twitter Percentage']];
    function myFunc(data, age_data, scenario) {
        age_data = JSON.parse(age_data)
        data = JSON.parse(data)

        if (scenario === 2){
            scenario_str = "Vaccine "
        }else{
            scenario_str = "5G "
        }

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
           total_person = parseInt(age_data[i]['0_to_14']) + parseInt(age_data[i]['15_to_64']) +  parseInt(age_data[i]['over_65']);
           total_tweet = data[index].value + data[index+1].value + data[index+2].value;
            _age_data_percent.push(
               [
               data[index].key[0],
               parseInt(age_data[i]['0_to_14'])/total_person,
               parseInt(age_data[i]['15_to_64'])/total_person,
               parseInt(age_data[i]['over_65'])/total_person,
               data[index].value/total_tweet,
               data[index+1].value/total_tweet,
               data[index+2].value/total_tweet
               ]
           )
        }
        google.charts.setOnLoadCallback(drawCountChart);
    }

      function drawCountChart() {
        var data = google.visualization.arrayToDataTable(_age_data_percent);
        var options = {
          chart: {
            title: scenario_str + 'Twitter Percentage Compared with Age Percentage',
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
              population: {side: 'top', label: 'Age Percentage'} // Top x-axis.
                }
            },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById('barchart2_percent'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }














