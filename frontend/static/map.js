//    mapboxgl.accessToken = 'pk.eyJ1IjoianhzdGFyMTEiLCJhIjoiY2tvZnc0MWhkMDh3azJvcDczZGwxMjRhZyJ9.2l6q_gmBx5SiGcNOkXyE6A';
//    var map = new mapboxgl.Map({
//        container: 'map', // container id
//        // style: 'mapbox://styles/mapbox/streets-v11', // style URL
//        style:'mapbox://styles/jxstar11/ckogsst551ool17nwlv98jq5p',
//        center: [133.8, -28], // starting position [lng, lat]
//        zoom: 3.9 // starting zoom
//    });

function myFunc() {
    mapboxgl.accessToken = 'pk.eyJ1IjoianhzdGFyMTEiLCJhIjoiY2tvZnc0MWhkMDh3azJvcDczZGwxMjRhZyJ9.2l6q_gmBx5SiGcNOkXyE6A';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jxstar11/ckogsst551ool17nwlv98jq5p', // style URL
    center: [133.8, -28], // starting position [lng, lat]
    zoom: 3.9 // starting zoom
    });
}
