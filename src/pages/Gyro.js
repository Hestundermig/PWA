import { useState, useEffect } from "react";

const Gyro = () => {
    const [deviceAplha, setDeviceAplha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();
    const [isIos, setIsIos] = useState(false);

    useEffect(() => {
        if(navigator.userAgent.match(/iPhone/i)) {
            setIsIos(true)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("deviceorientation", e => {
            setDeviceAplha(e.aplha.toFixed(1))
            setDeviceBeta(e.beta.toFixed(1))
            setDeviceGamma(e.gamma.toFixed(1))
        })    
    }, []);

    const enableDeviceOrientation = () => {
        DeviceOrientationEvent.requestPermission().then(response => {
            if(response === "granted") {
                window.addEventListener("deviceorientation", e => {
                    setDeviceAplha(e.aplha.toFixed(1))
                    setDeviceBeta(e.beta.toFixed(1))
                    setDeviceGamma(e.gamma.toFixed(1))
                })
            }
        })
    }
 
    return ( 
        <>
            <h1>Gyroskop</h1>
            { isIos && <p>Du er på en iphone</p> }
            <h2>Værdier fra gyroskopet:</h2>
            <p>Aplha: {deviceAplha}</p>
            <p>Beta: {deviceBeta}</p>
            <p>Gamma: {deviceGamma}</p>
            { isIos && !deviceAplha ? <button onClick={enableDeviceOrientation} >Enable on iphone</button> : null }
        </>
     );
}
 
export default Gyro;