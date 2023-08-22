import React, { useState, useEffect } from "react";


const Location = () => {
    const [ip, setIp] = useState();
    const [dynPos, setDynPos] = useState();
    const [myPos, setmyPos] = useState(null);

    const getIp = async () => {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setIp(data.ip);
    };

    useEffect(() => {
        getIp();
    }, []);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                setmyPos(position);
            });
        }
    }, []);

    const handleDynamicPosition = (position) => {
        setDynPos(position)
    }

    navigator.geolocation.watchPosition(handleDynamicPosition, handleDynamicPosition, {timeout: 2000})

    return (
        <>
            <p>Din ip adresse er: {ip}.</p>

            <h1>Locations</h1>
            <p>Latitude: {myPos?.coords.latitude}</p>
            <p>Longitude: {myPos?.coords.longitude}</p>
            <p>Altitude: {myPos?.coords.altitude}</p>
            <p>Speed: {myPos?.coords.speed}</p>
            <p>Accuracy: {myPos?.coords.accuracy}</p>

            <h1>Dynamic position</h1>
            <p>Latitude: {dynPos?.coords.latitude}</p>
            <p>Longitude: {dynPos?.coords.longitude}</p>
            <p>Altitude: {dynPos?.coords.altitude}</p>
            <p>Speed: {dynPos?.coords.speed}</p>
            <p>Accuracy: {dynPos?.coords.accuracy}</p>
        </>
    );
};

export default Location;