import axios from "axios";

const searchApi  = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoidmFyZ3V4IiwiYSI6ImNreHJwcDN5ZDUxazMycHFxbHgzNTNqa2wifQ.NXyWFkrz_jNLucXxrNBIjQ',
    }
})

export default searchApi;