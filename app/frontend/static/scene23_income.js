
    function myFunc(data, income, scenario, Percent) {
        if (Percent){
            _income_data = [['City', 'Mean Income', 'Negative Twitter Percentage', 'Neutral Twitter Percentage', 'Positive Twitter Percentage']];
            element_id = "barchart3_percent"
        }else{
            _income_data = [['City', 'Mean Income', 'Negative Twitter Amount', 'Neutral Twitter Amount', 'Positive Twitter Amount']];
            element_id = "barchart3"
        }
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

            if(Percent){
                let total_tweet = data[index].value + data[index+1].value + data[index+2].value;
                console.log(parseInt(income[i]['mean_income']));
                _income_data.push(
                    [
                    data[index].key[0],
                    parseInt(income[i]['mean_income']),
                    data[index].value/total_tweet,
                    data[index+1].value/total_tweet,
                    data[index+2].value/total_tweet
                    ]
                )
                console.log(_income_data[1])
            }else{
                _income_data.push(
                    [
                    data[index].key[0],
                    parseInt(income[i]['mean_income']),
                    data[index].value,
                    data[index+1].value,
                    data[index+2].value
                    ]
                )
            }
        }
        google.charts.setOnLoadCallback(drawChart(_income_data, element_id));
    }

      function drawChart(_income_data, element_id) {
        if(element_id === "barchart3"){
            graph_name = " Numbers"
        }else{
            graph_name = " Percentage"
        }

        var data = google.visualization.arrayToDataTable(_income_data);
        var options = {
          chart: {
            title: scenario_str + 'Twitter '+graph_name+' Compared with Mean Income',
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
              twitter_amount: {label: 'Twitter ' + graph_name}, // Bottom x-axis.
              income: {side: 'top', label: 'Mean Income'} // Top x-axis.
                }
          },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById(element_id));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }