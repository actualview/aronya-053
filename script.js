window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Brachio',
            location: {
                lat: 35.152156,
                lng: 129.137740,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.152156}; longitude: ${129.137740};`);
        model.setAttribute('gltf-model', './assets/brachio.gltf');
        model.setAttribute('rotation', '0 15 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '1.7 1.7 1.7');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
