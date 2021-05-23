let data_pie23_ade = [['Attitude', 'TwitterCount']];

function myFunc(data) {

    data = JSON.parse(data)
    for (let i = 0; i < data.length; i++) {
        if (data[i].key[0] === "Hobart" || data[i].key[0] === null){
            continue;
        }
        if (data[i].key[0] === "Adelaide"){
            data_pie23_ade.push(
            ["Negative", data[i].value],
            ["Neutral", data[i+1].value],
            ["Positive", data[i+2].value])
            break;
        }
    }
    google.charts.setOnLoadCallback(drawChart);
}

    function drawChart() {
        var figure_data = google.visualization.arrayToDataTable(data_pie23_ade);
        var options = {
            title: "Adelaide Twitter Sentiment Percentage"
        };

        var chart = new google.visualization.PieChart(document.getElementById("piechart_23_adelaide"));
        chart.draw(figure_data, options);
    }

