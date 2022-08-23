import { 
    ondata, 
    // onconnect, 
    // ondisconnect, 
    // encode, 
    decode 
} from './device.utils'

const device = {

    // ----------------- Required Device Attributes -----------------
    label: 'polar', // Unique device name to reference

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
    namePrefix: 'Polar', // Filter for specified name from Bluetooth results (required if device should be selectable with a loose constraint (e.g. {bluetooth: true}))
    serviceUUID: 'FB005C80-02E7-F387-1CAD-8ACD2D8DF0C8',
    characteristics: {
        write: 'FB005C81-02E7-F387-1CAD-8ACD2D8DF0C8',
        receive: 'FB005C82-02E7-F387-1CAD-8ACD2D8DF0C8',
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