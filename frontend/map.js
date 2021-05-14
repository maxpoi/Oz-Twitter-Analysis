mapboxgl.accessToken = 'pk.eyJ1IjoianhzdGFyMTEiLCJhIjoiY2tvZnc0MWhkMDh3azJvcDczZGwxMjRhZyJ9.2l6q_gmBx5SiGcNOkXyE6A';
var map = new mapboxgl.Map({
    container: 'map', // container id
    // style: 'mapbox://styles/mapbox/streets-v11', // style URL
    style:'mapbox://styles/jxstar11/ckogsst551ool17nwlv98jq5p',
    center: [133.8, -28], // starting position [lng, lat]
    zoom: 3.9 // starting zoom
});

var dict = {'Melbourne': 54, 'Adelaide': 14, 'Sydney': 12}

var geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Melbourne' + ': ' + dict['Melbourne'],
                'iconSize': [dict['Melbourne'], dict['Melbourne']]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [145, -37.8]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Sydney' + ': ' + dict['Sydney'],
                'iconSize': [dict['Sydney'], dict['Sydney']]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [151.2, -33.9]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Adelaide' + ': ' + dict['Adelaide'],
                'iconSize': [dict['Adelaide'], dict['Adelaide']]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [138.6, -35]
            }
        }
    ]
};

// add markers to map
geojson.features.forEach(function (marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 
        'url(https://placekitten.com/g/' +
        marker.properties.iconSize.join('/') +
        '/)';
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


