function initMap() {
 map = new google.maps.Map(document.getElementById('map'),{
  center: { lat: 26.922070 , lng: 75.778885},
  zoom: 18 ,
  mapId: 'be4ee38b06f1ca0' , 
  mapTypeControl: false ,
  fullscreenControl: false ,
  streetViewControl: false
 });

    const markers = [
     ['You are here' ,26.821800,75.543800,'pointer.svg',30,47.8,],
     ['Bridge' , 22.565571 , 88.370209, 'bridge.svg' , 40,48,],
     ['Castle' ,28.704060,77.102493,'castle.svg',40,53,],
     ['Warp Pipe' ,23.033863,72.585022,'pipe.svg',38,42.5,],
     ['Star World' ,19.076090,72.877426,'star.svg',38,38,],
    ];

    for(let i=0; i< markers.length; i++) {
     const currMarker = markers[i];

     const marker = new google.maps.Marker({
        position: { lat: currMarker[1], lng: currMarker[2] },
        map,
        title: currMarker[0],
        icon: {
         url: currMarker[3],
         scaledSize: new google.maps.Size(currMarker[4] , currMarker[5]),
        },
        animation: google.maps.Animation.DROP,
     });
     

     const infowindow = new google.maps.Infowindow({
      content: currMarker[0],
     });

     marker.addListener('Click', () => {
      infowindow.open(map, marker);
     });
    }
}