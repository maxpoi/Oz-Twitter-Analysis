// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

let _income_data = [['City', 'Mean Income', 'Negative Twitter Numbers', 'Neutral Twitter Numbers', 'Positive Twitter Numbers']];
    function myFunc(data, income, scenario) {
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
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {

        var data = google.visualization.arrayToDataTable(_income_data);
        var options = {
          chart: {
            title: scenario_str + 'Twitter Numbers Compared with Mean Income',
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
              twitter_amount: {label: 'Twitter Amount'}, // Bottom x-axis.
              income: {side: 'top', label: 'Mean Income'} // Top x-axis.
                }
          },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById('barchart3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }