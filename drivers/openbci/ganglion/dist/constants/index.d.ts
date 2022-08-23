export const GANGLION_SERVICE_ID: 65156;
export const BOARD_NAME: "ganglion";
export namespace CHARACTERISTICS {
    const reader: string;
    const writer: string;
    const connection: string;
}
export const CHARACTERISTIC_EVENT: "characteristicvaluechanged";
export const DISCONNECTED_EVENT: "gattserverdisconnected";
export namespace DEVICE_OPTIONS {
    const filters: {
        namePrefix: string;
    }[];
    const optionalServices: number[];
}
export namespace COMMAND_STRINGS {
    const start: string;
    const accelData: string;
}
