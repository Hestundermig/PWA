// import React, { useState, useEffect } from "react";

// const Location = () => {
//     const [ip, setIp] = useState("");
//     const [dynPos, setDynPos] = useState(null);
//     const [myPos, setMyPos] = useState(null);

//     const getIp = async () => {
//         try {
//             const response = await fetch("https://ipapi.co/json/");
//             const data = await response.json();
//             setIp(data.ip);
//         } catch (error) {
//             console.error("Error fetching IP:", error);
//         }
//     };

//     useEffect(() => {
//         getIp();
//     }, []);

//     useEffect(() => {
//         if ("geolocation" in navigator) {
//             const handlePosition = (position) => {
//                 console.log(position);
//                 setMyPos(position);
//             };

//             const handlePositionError = (error) => {
//                 console.error("Error getting position:", error);
//             };

//             const geoOptions = {
//                 timeout: 10000, // Increase timeout for better accuracy
//             };

//             const geoWatchId = navigator.geolocation.watchPosition(
//                 handlePosition,
//                 handlePositionError,
//                 geoOptions
//             );

//             return () => {
//                 navigator.geolocation.clearWatch(geoWatchId);
//             };
//         }
//     }, []);

//     const handleDynamicPosition = (position) => {
//         setDynPos(position);
//     };

//     useEffect(() => {
//         const dynamicGeoWatchId = navigator.geolocation.watchPosition(
//             handleDynamicPosition,
//             handleDynamicPosition,
//             { timeout: 2000 }
//         );

//         return () => {
//             navigator.geolocation.clearWatch(dynamicGeoWatchId);
//         };
//     }, []);

//     return (
//         <>
//             <p>Din ip adresse er: {ip}.</p>

//             <h1>Locations</h1>
//             <p>Latitude: {myPos?.coords.latitude}</p>
//             <p>Longitude: {myPos?.coords.longitude}</p>
//             <p>Altitude: {myPos?.coords.altitude}</p>
//             <p>Speed: {myPos?.coords.speed}</p>
//             <p>Accuracy: {myPos?.coords.accuracy}</p>

//             <h1>Dynamic position</h1>
//             <p>Latitude: {dynPos?.coords.latitude}</p>
//             <p>Longitude: {dynPos?.coords.longitude}</p>
//             <p>Altitude: {dynPos?.coords.altitude}</p>
//             <p>Speed: {dynPos?.coords.speed}</p>
//             <p>Accuracy: {dynPos?.coords.accuracy}</p>
//         </>
//     );
// };

// export default Location;




import React, { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";

const Location = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
        
        // const [ip, setIp] = useState("");
        // const getIp = async () => {
        //             try {
        //                 const response = await fetch("https://ipapi.co/json/");
        //                 const data = await response.json();
        //                 setIp(data.ip);
        //             } catch (error) {
        //                 console.error("Error fetching IP:", error);
        //             }
        //         };
            
        //         useEffect(() => {
        //             getIp();
        //         }, []);

        // <p>Din ip adresse er: {ip}.</p>

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
        ); 
};

export default Location;