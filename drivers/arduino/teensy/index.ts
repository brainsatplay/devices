import { ondata } from './device.utils'


export const device = {
    label: 'teensy', 
    ondata: ondata,
    usbVendorId: 0x16C0,
    usbProductId: 0x0476, // SERIAL ONLY: 0x0483
    bufferSize: 1000,
    baudRate: 115200, // TODO: Get correct baudrate
    protocols: ['serial'],
}

export default device