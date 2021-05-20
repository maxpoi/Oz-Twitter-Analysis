

    let _aurin_data = [['City', '0-14', '15-64', 'over 65']];

    function myFunc(data, aurin_data) {
        google.charts.load('current', {'packages':['bar']});

        aurin_data = JSON.parse(aurin_data)
        for(let i=0;i<aurin_data.length;i++){
            _aurin_data.push(
                [
                aurin_data[i].city,
                parseInt(aurin_data[i]['0_to_14']),
                parseInt( aurin_data[i]['15_to_64']),
                parseInt(aurin_data[i]['over_65']),
                ]
            )
        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_aurin_data);
        var options = {
          chart: {
            title: 'Age Distribution',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }