let data_pie23 = [['Attitude', 'TwitterCount']];

function myFunc(data) {

    data = JSON.parse(data)
    negative_tweet = 0
    neutral_tweet = 0
    positive_tweet = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].key[0] === "Hobart" || data[i].key[0] === null){
            continue;
        }
        if (data[i].key[1] == -1){
            negative_tweet += data[i].value
        }else if(data[i].key[1] == 0){
            neutral_tweet += data[i].value
        }else{
            positive_tweet += data[i].value
        }
    }

    data_pie23.push(
        ["Negative", negative_tweet],
        ["Neutral", neutral_tweet],
        ["Positive", positive_tweet]
    )

    google.charts.setOnLoadCallback(drawChart);
}

function drawChart() {
    var figure_data = google.visualization.arrayToDataTable(data_pie23);
    var options = {
        title: "Total Twitter Sentiment Percentage"
    // pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_23_overall'));
    chart.draw(figure_data, options);
}
