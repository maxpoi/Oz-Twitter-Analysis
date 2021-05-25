// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

let _age_data_percent = [['City', '0-14', '15-64', 'over 65', 'American', 'Chinese', 'French', 'Italian', 'Japanese', 'Korean']];
    function myFunc(data, age_data) {
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
            total_age = parseInt(age_data[i]['0_to_14'])+parseInt(age_data[i]['15_to_64'])+parseInt(age_data[i]['over_65'])
            total_tweet = data[index].value + data[index+1].value + data[index+2].value + data[index+3].value + data[index+4].value + data[index+5].value
            _age_data_percent.push(
                [
                data[index].key[0],
                parseInt(age_data[i]['0_to_14'])/total_age,
                parseInt(age_data[i]['15_to_64'])/total_age,
                parseInt(age_data[i]['over_65'])/total_age,
                data[index].value/total_tweet,
                data[index+1].value/total_tweet,
                data[index+2].value/total_tweet,
                data[index+3].value/total_tweet,
                data[index+4].value/total_tweet,
                data[index+5].value/total_tweet
                ]
            )

        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_age_data_percent);
        var options = {
          chart: {
            title: 'Food Twitter Percentage Compared with Age distribution',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          series:{
              0: {axis: 'population'},
              1: {axis: 'population'},
              2: {axis: 'population'},
              3: {axis: 'twitter_amount'},
              4: {axis: 'twitter_amount'},
              5: {axis: 'twitter_amount'},
              6: {axis: 'twitter_amount'},
              7: {axis: 'twitter_amount'},
              8: {axis: 'twitter_amount'},

          },
          axes: {
            x: {
              twitter_amount: {label: 'Food Twitter Percentage'}, // Bottom x-axis.
              population: {side: 'top', label: 'Age Distribution'} // Top x-axis.
                }
            },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById('barchart2_percent'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }