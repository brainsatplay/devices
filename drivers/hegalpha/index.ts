import { ondata } from './device.utils'


export const device = {

    // ----------------- Attributes -----------------
    label: 'hegduino', 

    // ----------------- Behavior -----------------
    ondata: ondata,

    // ----------------- Protocols -----------------
    // Bluetooth
    namePrefix: 'HEG', // Filter for specified name from Bluetooth results (required if device should be selectable with a loose constraint (e.g. {bluetooth: true}))
    serviceUUID: '6e400001-b5a3-f393-e0a9-e50e24dcca9e',
    characteristics: {
        transmit: '6e400003-b5a3-f393-e0a9-e50e24dcca9e',
        receive: '6e400002-b5a3-f393-e0a9-e50e24dcca9e',
    }, 

    // Serial / USB
    usbVendorId: 4292,
    usbProductId: 60000,
    bufferSize: 1000,
    baudRate: 115200,

    protocols: ['bluetooth', 'serial'],
}

export default device