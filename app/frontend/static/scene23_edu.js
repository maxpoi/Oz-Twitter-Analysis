// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

let _edu_data = [['City', 'Certificate', 'Graduated Diploma and Certificate', 'Advanced Diploma', 'Bachelor', 'Postgraduate', 'Negative Twitter Numbers', 'Neutral Twitter Numbers', 'Positive Twitter Numbers']];

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
            _edu_data.push(
                [
                data[index].key[0],
                parseInt(education[i]['Certificate_Level']),
                parseInt(education[i]['Graduate_Diploma_and_Graduate_Certificate_Level']),
                parseInt(education[i]['Advanced_Diploma_and_Diploma_Level']),
                parseInt(education[i]['Bachelor_Degree_Level']),
                parseInt(education[i]['Postgraduate_Degree_Level']),
                data[index].value,
                data[index+1].value,
                data[index+2].value
                ]
            )
        }
        google.charts.setOnLoadCallback(drawChart);
    }

      function drawChart() {
        var data = google.visualization.arrayToDataTable(_edu_data);
        var options = {
          chart: {
            title: scenario_str + 'Twitter Numbers Compared with Mean Income',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          series:{
              0: {axis: 'education'},
              1: {axis: 'education'},
              2: {axis: 'education'},
              3: {axis: 'education'},
              4: {axis: 'education'},
              5: {axis: 'twitter_amount'},
              6: {axis: 'twitter_amount'},
              7: {axis: 'twitter_amount'},

          },
          axes: {
            x: {
              twitter_amount: {label: 'Twitter Numbers'}, // Bottom x-axis.
              education: {side: 'top', label: 'Education Level'} // Top x-axis.
                }
          },
          isStacked: true
        };


        var chart = new google.charts.Bar(document.getElementById('barchart4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }