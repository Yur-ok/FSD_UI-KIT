function initMap() {

    var map = document.getElementById('map');
    var options = {
        zoom: 5,
        center: {lan: 547.904, lng: 549.870}
    };

    var myMap = new google.maps.Map(map, options);

}