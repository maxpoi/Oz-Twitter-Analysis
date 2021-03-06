// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

    let _data = [['City', 'American', 'Chinese', 'French', 'Italian', 'Japanese', 'Korean']];

    function myFunc(data) {

        data = JSON.parse(data)
        for(let i=0;i<data.length;){
            _data.push(
                [
                data[i].key[0],
                data[i].value,
                data[i+1].value,
                data[i+2].value,
                data[i+3].value,
                data[i+4].value,
                data[i+5].value
                ]
            )
            i+=6
        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_data);
        var options = {
          chart: {
            title: 'Food Related Twitter Discussion Heat',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
        };


        var chart = new google.charts.Bar(document.getElementById('barchart1'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
