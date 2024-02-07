import React, {useEffect, useRef, useState} from 'react';
import mapboxgl, {ReactMapGL} from 'mapbox-gl';

function MapBox({latitude, longitude}) {
    mapboxgl.accessToken  = 'pk.eyJ1IjoiYW11bmkiLCJhIjoiY2sxNmo0MDM5MDk1dTNtbXJqcXM4eTFqNSJ9.1hiopLNKY1XJ097xXveZCg';

    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [longitude, latitude],
            zoom: 16,
        });

        new mapboxgl.Marker({
            color: "#22c35d",
            scale: 1.5
        })
            .setLngLat([longitude, latitude])
            .addTo(map.current);

    },[latitude, longitude]);
    return (
        <div className="h-90 flex-auto text-left  mt-7 mb-7">
            <div className="text-4xl  text-justify font-bold mb-7">Where you will be</div>
            <div style={{ height: '600px' }} className=" bg-green-700 ">
                <div ref={mapContainer} className="bg-amber-950 w-full h-full" />
            </div>
        </div>
    );
}

export default MapBox;