let _edu_per_data = [['City', 'Certificate and Diploma', 'Bachelor', 'Postgraduate', 'Negative Twitter Percentage', 'Neutral Twitter Percentage', 'Positive Twitter Percentage']];

    function myFunc(data, education, scenario) {

        if (scenario === 2){
            scenario_str = "Vaccine "
        }else{
            scenario_str = "5G "
        }

        education = JSON.parse(education)
        data = JSON.parse(data)
        for(let i=0;i<education.length;i++){
            let index = 0;
            for (let k=0; k<data.length;k++){

                if(data[k].key[0] === null){
                    continue
                }
                if(data[k].key[0].toLowerCase() === education[i].city){
                    index = k;
                    break;
                }
            }
            if(education[i].city === 'canberra'){
                continue
            }
            total_tweet = data[index].value + data[index+1].value + data[index+2].value
            total_edu = parseInt(education[i]['Certificate_Level']) + parseInt(education[i]['Graduate_Diploma_and_Graduate_Certificate_Level']) + parseInt(education[i]['Advanced_Diploma_and_Diploma_Level']) + parseInt(education[i]['Bachelor_Degree_Level']) + parseInt(education[i]['Postgraduate_Degree_Level'])
            _edu_per_data.push(
                [
                data[index].key[0],
                (parseInt(education[i]['Graduate_Diploma_and_Graduate_Certificate_Level']) + parseInt(education[i]['Advanced_Diploma_and_Diploma_Level']) + parseInt(education[i]['Certificate_Level']))/total_edu,
                parseInt(education[i]['Bachelor_Degree_Level'])/total_edu,
                parseInt(education[i]['Postgraduate_Degree_Level'])/total_edu,
                data[index].value/total_tweet,
                data[index+1].value/total_tweet,
                data[index+2].value/total_tweet
                ]
            )
        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_edu_per_data);
        var options = {
          chart: {
            title: scenario_str + 'Twitter Sentiment Percentage Compared with Education Level',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          series:{
              0: {axis: 'education'},
              1: {axis: 'education'},
              2: {axis: 'education'},
              3: {axis: 'twitter_amount'},
              4: {axis: 'twitter_amount'},
              5: {axis: 'twitter_amount'},

          },
          axes: {
            x: {
              twitter_amount: {label: 'Twitter Percentage'}, // Bottom x-axis.
              education: {side: 'top', label: 'Education Percentage'} // Top x-axis.
                }
          },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById('barchart5'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }