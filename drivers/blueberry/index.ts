import { 
    ondata, 
    // onconnect, 
    // ondisconnect, 
    // encode, 
    decode 
} from './device.utils'

// import { 
//     Blueberry, 
// } from './blueberry.js'

const device = {

    // ----------------- Required Device Attributes -----------------
    label: 'blueberry', // Unique device name to reference

    // ----------------- Device Behavior -----------------

    // device: Blueberry, // Class with connect / disconnect methods (optional)
    // onconnect, // Connection Callback (optional)
    // ondisconnect, // Disconnection callback (optional)
    // encode, // Message encoder (optional, defaults to using a TextEncoder)
    decode, // Message decoder (optional, defaults to using a TextDecoder)
    ondata, // Callback to load decoded data into an array for DataTrack parsing (optional)
    onerror, // Error callback (optional)

    // ----------------- Device Protocols -----------------

    // ----------------- Bluetooth -----------------
    namePrefix: 'blueberry', // Filter for specified name from Bluetooth results (required if device should be selectable with a loose constraint (e.g. {bluetooth: true}))
    serviceUUID: '0f0e0d0c-0b0a-0908-0706-050403020100',
    characteristics: {
        write: '1f1e1d1c-1b1a-1918-1716-151413121110',
        receive: '3f3e3d3c-3b3a-3938-3736-353433323130',
    }, 

    // ----------------- Serial / USB -----------------
    // usbVendorId: 4292,
    // usbProductId: 60000,
    // bufferSize: 1000,
    // baudRate: 115200,

    // ----------------- WebSocket / Wifi -----------------
    // url: 'https://localhost',

    protocols: [
        // 'serial', 
        'bluetooth', 
        // 'websocket'
    ]

}

export default device