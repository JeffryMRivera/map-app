import axios from "axios";

const directionsApi  = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoidmFyZ3V4IiwiYSI6ImNreHJwcDN5ZDUxazMycHFxbHgzNTNqa2wifQ.NXyWFkrz_jNLucXxrNBIjQ',
    }
})

export default directionsApi;