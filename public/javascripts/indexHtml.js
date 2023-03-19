const showLoc = document.getElementById('showLoc')
console.log('Running')

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation)
    } else {
        showLoc.innerText = "GPS not supported"
    }
}

function showLocation(pos){
    showLoc.innerHTML = "Latitude: " + pos.coords.latitude + 
  "<br>Longitude: " + pos.coords.longitude;
}