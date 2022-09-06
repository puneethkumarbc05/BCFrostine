import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'

const data = [
    { "Doctorname": "P  SUSKAR[11:37]", "SubArea": "", "datee": "2019-03-07T11:37:38Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.994427800000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "VAIBHAV  MOTE[11:37]", "SubArea": "", "datee": "2019-03-07T11:37:47Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993853000000", "longitude": "75.752053000000", "place": "" },
    { "Doctorname": "DR.VIKAS  JOGDAND[11:38],DIVAKAR GULAJKAR[11:38]", "SubArea": "", "datee": "2019-03-07T11:38:12Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993837100000", "longitude": "75.752502200000", "place": "" },
    { "Doctorname": "PRUTHVIRAJ CHAVHAN[11:38],P.K.KULKARNI[11:38]", "SubArea": "", "datee": "2019-03-07T11:38:38Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993983200000", "longitude": "75.752219600000", "place": "" },
    { "Doctorname": "PRASHANT SANAP[11:38],SANJAY VEER[11:39]", "SubArea": "", "datee": "2019-03-07T11:39:08Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.995153700000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "SUNIL TIDAKE[11:39]", "SubArea": "", "datee": "2019-03-07T11:39:24Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.994790700000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "SANJAY JANVHALE[11:39]", "SubArea": "", "datee": "2019-03-07T11:39:40Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993969400000", "longitude": "75.752047200000", "place": "" }
]

const details = data.map(item => {
    return {
        lat: Number(item.latitude),
        lng: Number(item.longitude)
    }
})

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const mylocation = {
    lat: 18.994427800000,
    lng: 75.751866600000
}

const distination = {
    lat: 12.971599,
    lng: 77.594566
}

// const center = {
//     lat: 27.2046,
//     lng: 77.4977
// };

export const Googlemap = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDEwXzUTFubdWwIbJZYqK1NGxt_fd_6Uhw"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={100}
            onLoad={onLoad}
        >
            {details.map((detail, index) => {
                return <Marker key={index} position={detail} />
            })}

            <Marker key={1} position={mylocation} />
            <Marker key={2} position={distination} />
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

