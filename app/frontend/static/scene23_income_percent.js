let _income_data_percent = [['City', 'Mean Income', 'Negative Twitter Percentage', 'Neutral Twitter Percentage', 'Positive Twitter Percentage']];
    function myFunc(data, income, scenario, Percent) {
        if (scenario === 2){
            scenario_str = "Vaccine "
        }else{
            scenario_str = "5G "
        }

        income = JSON.parse(income)
        data = JSON.parse(data)
        for(let i=0;i<income.length;i++){
            let index = 0;
            for (let k=0; k<data.length;k++){

                if(data[k].key[0] === null){
                    continue
                }
                if(data[k].key[0].toLowerCase() === income[i].city){
                    index = k;
                    break;
                }
            }

            let total_tweet = data[index].value + data[index+1].value + data[index+2].value;
            _income_data_percent.push(
                [
                data[index].key[0],
                parseInt(income[i]['mean_income']),
                data[index].value/total_tweet,
                data[index+1].value/total_tweet,
                data[index+2].value/total_tweet
                ]
            )
        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_income_data_percent);
        var options = {
          chart: {
            title: scenario_str + 'Twitter Percentage Compared with Mean Income',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          series:{
              0: {axis: 'income'},
              1: {axis: 'twitter_amount'},
              2: {axis: 'twitter_amount'},
              3: {axis: 'twitter_amount'},

          },
          axes: {
            x: {
              twitter_amount: {label: 'Twitter Percentage'}, // Bottom x-axis.
              income: {side: 'top', label: 'Mean Income'} // Top x-axis.
                }
            },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById('barchart3_percent'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }