// @team 35
// @author Jiacheng Ye   904973      Shanghai, China
// @author Shiyi Xu      780801      Melbourne, Australia
// @author Yuyao Ma      1111182     Yinchuan, China
// @author Yujing Guan   1011792     Fuzhou, China
// @author Zexin Yu      10328021    Dalian, China

function myFunc() {
    mapboxgl.accessToken = 'pk.eyJ1IjoianhzdGFyMTEiLCJhIjoiY2tvZnc0MWhkMDh3azJvcDczZGwxMjRhZyJ9.2l6q_gmBx5SiGcNOkXyE6A';
    var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/jxstar11/ckogsst551ool17nwlv98jq5p', // style URL
    center: [133.8, -28], // starting position [lng, lat]
    zoom: 3.9 // starting zoom
    });
}
