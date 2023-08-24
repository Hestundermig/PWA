import { useState, useEffect } from "react";

const Gyro = () => {
    const [deviceAplha, setDeviceAplha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();

    useEffect(() => {
        window.addEventListener("deviceorientation", e => {
            setDeviceAplha(e.aplha.toFixed(1))
            setDeviceBeta(e.beta.toFixed(1))
            setDeviceGamma(e.gamma.toFixed(1))
        })    
    }, []);

    return ( 
        <>
            <h1>Gyroskop</h1>

            <h2>Værdier fra gyroskopet:</h2>
            <p>Aplha: {deviceAplha}</p>
            <p>Beta: {deviceBeta}</p>
            <p>Gamma: {deviceGamma}</p>
        </>
     );
}
 
export default Gyro;