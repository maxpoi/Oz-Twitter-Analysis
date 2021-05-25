// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

    let income_data = [['City', 'Mean Income', 'Twitter Discussion Heat']];

    function myFunc(data, income) {

        income = JSON.parse(income)
        data = JSON.parse(data)
        for(let i=0;i<income.length;i++){
            let index = 0;
            for (let k=0; k<data.length;k++){
                console.log(data[k].key)
                console.log(income[i].city)
                if(data[k].key.toLowerCase() === income[i].city){
                    index = k;
                    break;
                }
            }
            console.log(income[i]['mean_income'])
            income_data.push(
                [
                data[index].key,
                parseInt(income[i]['mean_income']),
                data[index].value
                ]
            )
        }
        google.charts.setOnLoadCallback(drawCountChart);
    }

      function drawCountChart() {
        var data = google.visualization.arrayToDataTable(income_data);
        var options = {
          chart: {
            title: 'AFL Twitter Discussion Heat Compared with Income',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          series:{
              0: {axis: 'mean_income'},
              1: {axis: 'twitter_amount'},
          },
          axes: {
            x: {
              twitter_amount: {label: 'Twitter Discussion Heat'}, // Bottom x-axis.
              mean_income: {side: 'top', label: 'Mean Income'} // Top x-axis.
                }
            },
        };


        var chart = new google.charts.Bar(document.getElementById('barchart3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
