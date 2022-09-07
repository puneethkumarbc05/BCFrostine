import React from 'react'
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer, InfoWindow, } from "@react-google-maps/api"
import "../App.css"

const datas = [
    { "Doctorname": "P SUSKAR", "SubArea": "", "datee": "2019-03-07T11:37:38Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.994427800000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "VAIBHAV  MOTE", "SubArea": "", "datee": "2019-03-07T11:37:47Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993853000000", "longitude": "75.752053000000", "place": "" },
    { "Doctorname": "DR.VIKAS  JOGDAND,DIVAKAR GULAJKAR", "SubArea": "", "datee": "2019-03-07T11:38:12Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993837100000", "longitude": "75.752502200000", "place": "" },
    { "Doctorname": "PRUTHVIRAJ CHAVHAN,P.K.KULKARNI", "SubArea": "", "datee": "2019-03-07T11:38:38Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993983200000", "longitude": "75.752219600000", "place": "" },
    { "Doctorname": "PRASHANT SANAP,SANJAY VEER", "SubArea": "", "datee": "2019-03-07T11:39:08Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.995153700000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "SUNIL TIDAKE", "SubArea": "", "datee": "2019-03-07T11:39:24Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.994790700000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "SANJAY JANVHALE", "SubArea": "", "datee": "2019-03-07T11:39:40Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993969400000", "longitude": "75.752047200000", "place": "" }
]

export const Map = () => {



    const [current, setCurrent] = React.useState({
        lat: '',
        lng: ''
    })
    const [details, setDetails] = React.useState()

    const center = React.useMemo(() => (
        {
            lat: 48.8584, lng: 2.2945
        }), [])

    // const [map, setMap] = React.useState(null)
    const [directionResponse, setDirectionResponse] = React.useState(null)
    const [distance, setDistance] = React.useState(null)
    const [Start, setStart] = React.useState(
        // { lat: 48.8584, lng: 2.2945 }
    )
    const [End, setEnd] = React.useState(
        // {lat: 12.971599, lng: 77.594566}
    )
    const [destination, setDestination] = React.useState(
        { lat: 12.971599, lng: 77.594566 }
    )



    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDEwXzUTFubdWwIbJZYqK1NGxt_fd_6Uhw"
    })

    React.useEffect(() => {
        const tempDetails = datas.map(data => {
            return {
                location: {
                    lat: Number(data.latitude),
                    lng: Number(data.longitude)
                },
                doctorName: data.Doctorname
            }
        })
        setDetails(tempDetails)
        setStart(tempDetails[0].location)
        setEnd(tempDetails[tempDetails.length - 1].location)
        calculateRoute()
        navigator.geolocation.getCurrentPosition(function (position) {
            setCurrent({ ...current, lat: position.coords.latitude, lng: position.coords.longitude })
        });
    }, [])

    const calculateRoute = () => {
        // const google = (window.google = window.google ? window.google : {});
        // const DirectionsService = new google.maps.DirectionsService()
        // DirectionsService.route(
        //     {
        //         origin: new google.maps.LatLng(12.971599, 77.594566),
        //         destination: new google.maps.LatLng(12.295810, 76.639381),
        //         travelMode: google.maps.TravelMode.DRIVING,
        //     },
        //     (results, status) => {
        //         if (status === google.maps.DirectionsStatus.OK) {
        //             console.log('succesfull')
        //             setDistance (results)
        //         } else {
        //             console.error(`error fetching direction ${results}`)
        //         }
        //     }
        // )
    }

    return isLoaded ? (
        <div style={{}}>
            <GoogleMap
                center={Start}
                zoom={17}
                mapContainerStyle={{ width: "100vw", height: "100vh" }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,

                }}
            >
                {details.map((detail, index) => {
                    return <Marker
                        key={index}
                        position={detail.location}
                        onClick={() => {
                            setDirectionResponse(detail)
                        }}
                        label={`${index}`}
                    />
                })}

                <Marker position={current} />
                {distance && <DirectionsRenderer directions={distance} />}
                {directionResponse &&
                    <InfoWindow
                        position={directionResponse.location}
                        onCloseClick={() => { setDirectionResponse(null) }}
                        options={{ closeBoxURL: ``, enableEventPropagation: true }}>
                        <div style={{ fontWidth: 'bolder' }}>
                            <div style={{ color: 'red' }}>
                                xcvbhnjkl
                            </div>
                        </div>
                    </InfoWindow>}
            </GoogleMap>
        </div>
    ) : null
}
