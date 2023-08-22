import { useState, useEffect } from "react";

 

 

const Location = () => {

    const [myPos, setMyPos] = useState();

    const [dynPos, setDynPos] = useState();

    const [ipAddress, setIpAddress] = useState("");

 

    // Get user's ip adress

    useEffect(() => {

      const fetchIp = async () => {

        try {

          const response = await fetch("https://api.ipify.org?format=json");

          const data = await response.json();

          setIpAddress(data.ip);

        } catch (error) {

          console.error(error);

        }

      };

      fetchIp();

    }, []);

 

 

    useEffect(() => {

        if('geolocation' in navigator) {

            navigator.geolocation.getCurrentPosition((position) => {

                setMyPos(position)

            })

        }

    }, []);

 

 

    const handleDynamicPosition = (position) => {

        setDynPos(position)

    }

 

    const handleDynamicPositionError = (err) => {

        console.log(err)

    }

 

    navigator.geolocation.watchPosition(handleDynamicPosition, handleDynamicPositionError, {timeout: 5000})

 

    return (

        <>

            <p>Location page</p>

 

            <p>Latitude: {myPos?.coords.latitude}</p>

            <p>Longitude: {myPos?.coords.longitude}</p>

            <p>Speed: {myPos?.coords.speed}</p>

            <p>Accuracy: {myPos?.coords.accuracy}</p>

            <p>Your ip adress: {ipAddress}</p>

 

            <h1>This is dynamic position</h1>

            <p>Latitude: {dynPos?.coords.latitude}</p>

            <p>Longitude: {dynPos?.coords.longitude}</p>

            <p>Speed: {dynPos?.coords.speed}</p>

            <p>Accuracy: {dynPos?.coords.accuracy}</p>

        </>

     );

}

 

export default Location;