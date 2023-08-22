import { useState, useEffect } from "react";

const Location = () => {

    const [myPos, setmyPos] = useState();

    useEffect(() => {
        if ("geolocation" in navigator) {
            /* geolocation is available */
          } navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            setmyPos(position)
          })
    }, []);

    return ( 
        <>
            <h1>Location page</h1>

            <p>Latitude: {myPos?.coords.latitude}</p>
            <p>Longitude: {myPos?.coords.longitude}</p>
            <p>Altitude: {myPos?.coords.altitude}</p>
            <p>Speed: {myPos?.coords.speed}</p>
            <p>Accuracy: {myPos?.coords.accuracy}</p>
        
        </>
     );
}
 
export default Location;