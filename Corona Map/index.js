
function updatemap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                
                cases = element.infected;
                if (cases>1000) {
                    color = "rgb(255, 0, 0)";
                }
                else{color=`rgb(${cases} , 0 , 0)`}

                // Mark on the map
                new maplibregl.Marker({
                    // draggable: true
                    color : color 
                })
                    .setLngLat([longitude,latitude])
                    .addTo(map);
            });
        })
}
updatemap();