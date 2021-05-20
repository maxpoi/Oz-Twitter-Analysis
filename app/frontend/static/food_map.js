
function myFunc(data, rest) {
    mapboxgl.accessToken = 'pk.eyJ1IjoianhzdGFyMTEiLCJhIjoiY2tvZnc0MWhkMDh3azJvcDczZGwxMjRhZyJ9.2l6q_gmBx5SiGcNOkXyE6A';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        // style: 'mapbox://styles/mapbox/streets-v11', // style URL
        style:'mapbox://styles/jxstar11/ckogsst551ool17nwlv98jq5p',
        center: [133.8, -28], // starting position [lng, lat]
        zoom: 3.9 // starting zoom
    });

//    data = [{"key": "Adelaide", "value": 6108}, {"key": "Brisbane", "value": 2694}, {"key": "Canberra", "value": 1322}, {"key": "Hobart", "value": 10}, {"key": "Melbourne", "value": 21392}, {"key": "Perth", "value": 7605}, {"key": "Sydney", "value": 7711}]
    let features = []
//    var vardict = {'Melbourne': 0, 'Adelaide': 0, 'Sydney': 0, 'Brisbane':0, 'Canberra':0, 'Hobart':0, 'Perth':0}
    data = JSON.parse(data)

    let foodtype = ""
    switch(rest){
        case 0:
            foodtype = "American food"
            break
        case 1:
            foodtype = "Chinese food"
            break
        case 2:
            foodtype = "French food"
            break
        case 3:
            foodtype = "Italian food"
            break
        case 4:
            foodtype = "Japanese food"
            break
        case 5:
            foodtype = "Korean food"
            break
    }


    for(let i=0;i<data.length;i++){
        if (foodtype != data[i].key[1]) {
            continue
        }
        let coordinates =[]

        switch(data[i].key[0]){
            case 'Melbourne':
                coordinates = [145, -37.8]
                break
            case 'Adelaide':
                coordinates = [138.6, -35]
                break
            case 'Sydney':
                coordinates = [151.2, -33.9]
                break
            case 'Brisbane':
                coordinates = [153, -27.5]
                break
            case 'Canberra':
                coordinates = [149.1, -35.3]
                break
           case 'Hobart':
                coordinates = [147.3, -42.9]
                break
           case 'Perth':
                coordinates = [115.9, -32]
                break
           default:
                break
        }

        if(coordinates.length === 0){
            continue
        }

        let scale = 10
        switch(rest){
            case 0:
                scale = 20
                break
            case 1:
                scale = 5
                break
            case 2:
                scale = 10
                break
            case 3:
                scale = 40
                break
            case 4:
                scale = 15
                break
            case 5:
                scale = 2
                break
        }

        features.push(
            {
                'type': 'Feature',
                'properties': {
                    'message': data[i].key + ': ' + data[i].value,
                    'iconSize': [data[i].value/scale, data[i].value/scale]
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': coordinates
                }
            }
        )
    }

    var geojson = {
        'type': 'FeatureCollection',
        'features':features
    };

    // add markers to map
    geojson.features.forEach(function (marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';

        el.style.backgroundImage =
            'url(./static/assets/images/red.jpg)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';
        el.style.backgroundSize = '100%';

        el.addEventListener('click', function () {
            window.alert(marker.properties.message);
        });

        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });
}







