

function myFunc(data, city) {
    let data_pie23 = [['Attitude', 'TwitterCount']];
    data = JSON.parse(data)
    element_id = "piechart_23_" + city.toLowerCase()
    for (let i = 0; i < data.length; i++) {
        if (data[i].key[0] === "Hobart" || data[i].key[0] === null){
            continue;
        }
        if (city === data[i].key[0]){
            data_pie23.push(
            ["Negative", data[i].value],
            ["Neutral", data[i+1].value],
            ["Positive", data[i+2].value])
            break;
        }
    }
    google.charts.setOnLoadCallback(drawChart(data_pie23, city));
}

function drawChart(data_pie23, city) {
    var figure_data = google.visualization.arrayToDataTable(data_pie23);
    var options = {
        title: city + "Twitter Sentiment Percentage"
    // pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById(element_id));
    chart.draw(figure_data, options);
}
