let data_pie23_bri = [['Attitude', 'TwitterCount']];

function myFunc(data) {

    data = JSON.parse(data)
    for (let i = 0; i < data.length; i++) {
        if (data[i].key[0] === "Hobart" || data[i].key[0] === null){
            continue;
        }
        if (data[i].key[0] === "Brisbane"){
            data_pie23_bri.push(
            ["Negative", data[i].value],
            ["Neutral", data[i+1].value],
            ["Positive", data[i+2].value])
            break;
        }
    }
    google.charts.setOnLoadCallback(drawChart);
}

    function drawChart() {
        var figure_data = google.visualization.arrayToDataTable(data_pie23_bri);
        var options = {
            title: "Brisbane Twitter Sentiment Percentage"
        };

        var chart = new google.visualization.PieChart(document.getElementById("piechart_23_brisbane"));
        chart.draw(figure_data, options);
    }


