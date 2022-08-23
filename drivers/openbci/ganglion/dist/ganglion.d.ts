export class Ganglion {
    constructor(options?: {});
    options: {};
    gatt: BluetoothRemoteGATTServer | null;
    device: BluetoothDevice | null;
    deviceName: string | null | undefined;
    service: BluetoothRemoteGATTService | null;
    characteristics: {} | null;
    onDisconnect$: Subject<any>;
    boardName: string;
    channelSize: number;
    rawDataPacketToSample: {
        accelArray: number[];
        channelSettings: {
            channelNumber: any;
            powerDown: boolean;
            gain: number;
            inputType: string;
            bias: boolean;
            srb2: boolean;
            srb1: boolean;
        }[];
        decompressedSamples: any[][];
        lastSampleNumber: number;
        rawDataPacket: ArrayBufferLike;
        rawDataPackets: never[];
        scale: boolean;
        sendCounts: boolean;
        timeOffset: number;
        verbose: boolean;
    };
    connectionStatus: BehaviorSubject<boolean>;
    stream: import("rxjs").Observable<{
        data: any;
    }>;
    accelData: import("rxjs").Observable<{
        data: any;
    }>;
    eventToBufferMapper(event: any): Uint8Array;
    setRawDataPacket(buffer: any): void;
    connect(): Promise<void>;
    setCharacteristics(characteristics: any): void;
    start(): Promise<void>;
    addDisconnectedEvent(): void;
    disconnect(): void;
}
export default Ganglion;
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
