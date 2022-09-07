// import google from 'google'
import { BicyclingLayer } from '@react-google-maps/api'
import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, DirectionsRenderer } from "react-google-maps"



function Maap() {
  const [locations, setLocations] = React.useState(null)
  const [selectedLocation, setSelectedLocation] = React.useState(null)

  const datas = [
    { "Doctorname": "P SUSKAR", "SubArea": "", "datee": "2019-03-07T11:37:38Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.994427800000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "VAIBHAV  MOTE", "SubArea": "", "datee": "2019-03-07T11:37:47Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993853000000", "longitude": "75.752053000000", "place": "" },
    { "Doctorname": "DR.VIKAS  JOGDAND,DIVAKAR GULAJKAR", "SubArea": "", "datee": "2019-03-07T11:38:12Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993837100000", "longitude": "75.752502200000", "place": "" },
    { "Doctorname": "PRUTHVIRAJ CHAVHAN,P.K.KULKARNI", "SubArea": "", "datee": "2019-03-07T11:38:38Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993983200000", "longitude": "75.752219600000", "place": "" },
    { "Doctorname": "PRASHANT SANAP,SANJAY VEER", "SubArea": "", "datee": "2019-03-07T11:39:08Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.995153700000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "SUNIL TIDAKE", "SubArea": "", "datee": "2019-03-07T11:39:24Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.994790700000", "longitude": "75.751866600000", "place": "" },
    { "Doctorname": "SANJAY JANVHALE", "SubArea": "", "datee": "2019-03-07T11:39:40Z", "dwrfscode": "1", "fscode": "AM0077", "latitude": "18.993969400000", "longitude": "75.752047200000", "place": "" }
  ]

  const google = (window.google = window.google ? window.google : {});
  React.useEffect(() => {
    const DirectionsService = new google.maps.DirectionsService()
    DirectionsService.route(
      {
        origin: new google.maps.LatLng(12.971599, 77.594566),
        destination: new google.maps.LatLng(12.295810, 76.639381),
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (results, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log('succesfull')
          setLocations(results)
        } else {
          console.error(`error fetching direction ${results}`)
        }
      }
    )
  }, [])

  return <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: Number(datas[0].latitude), lng: Number(datas[0].longitude) }}
  >
    {datas.map((data, index) => {
      return <Marker
        key={index}
        position={{ lat: Number(data.latitude), lng: Number(data.longitude) }}
        onClick={() => { setSelectedLocation(data) }}
        label={`${index}`}
      />
    })}

    {selectedLocation &&
      <InfoWindow
        position={{
          lat: Number(selectedLocation.latitude),
          lng: Number(selectedLocation.longitude)
        }}
        onCloseClick={() => { setSelectedLocation(null) }}
        options={{ closeBoxURL: ``, enableEventPropagation: false }}
      >
        <div style={{ color: 'red' }}>
          {selectedLocation.Doctorname}
        </div>
      </InfoWindow>}
    <Marker position={{ lat: 12.971599, lng: 77.594566 }} key={10} onClick={() => { setSelectedLocation({ lat: 12.971599, lng: 77.594566 }) }} />
    {locations && <DirectionsRenderer directions={locations} />}
  </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Maap))

export const Maapp2 = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEwXzUTFubdWwIbJZYqK1NGxt_fd_6Uhw`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
