

    let _data = [['City', 'Negative Twitter Numbers', 'Neutral Twitter Numbers', 'Positive Twitter Numbers']];

    function myFunc(data, scenario) {
        if (scenario === 2){
            scenario_str = "Vaccine "
        }else{
            scenario_str = "5G "
        }

        data = JSON.parse(data)
        for(let i=0;i<data.length;){
            if (data[i].key[0] === "Hobart" || data[i].key[0] === null){
                i+=1;
                continue
            }
            _data.push(
                [
                data[i].key[0],
                data[i].value,
                data[i+1].value,
                data[i+2].value,
                ]
            )
            i+=3
        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_data);
        var options = {
          chart: {
            title: scenario_str + 'Twitter Numbers',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
        };


        var chart = new google.charts.Bar(document.getElementById('barchart1'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
