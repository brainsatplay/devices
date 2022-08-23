/**
 * Used to route samples for Ganglion
 * @param o {RawDataToSample} - Used to hold data and configuration settings
 * @returns {*}
 */
export function processRouteSampleData(o: {
    /**
     * - An array of rawDataPackets
     */
    rawDataPackets: any[];
    /**
     * - A single raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * - This buffer is used to build up multiple messages over ble and emit them at once
     */
    multiPacketBuffer: Uint8Array;
    /**
     * - The channel settings array
     */
    channelSettings: any[];
    /**
     * (optional) for non time stamp use cases i.e. 0xC0 or 0xC1 (default and raw aux)
     */
    timeOffset: number;
    /**
     * (optional) for non time stamp use cases
     */
    accelArray: any[];
    /**
     * (optional) for verbose output
     */
    verbose: boolean;
    /**
     * (optional) - The last sample number
     */
    lastSampleNumber: number;
    /**
     * (optional) Default `true`. A gain of 24 for Cyton will be used and 51 for ganglion by default.
     */
    scale: boolean;
    /**
     * - An array to hold delta compression items
     */
    decompressedSamples: any[];
    /**
     * - True if you want raw A/D counts or scaled counts in samples
     */
    sendCounts: boolean;
}): any;
export default utilitiesModule;
declare namespace utilitiesModule {
    export function extractRawDataPackets(dataBuffer: Uint8Array): {
        /**
         * The remaining buffer. Can be null.
         */
        buffer: any;
        /**
         * The extracted raw data packets
         */
        rawDataPackets: any[];
    };
    export function extractRawBLEDataPackets(dataBuffer: any): any[];
    export { transformRawDataPacketToSample };
    export { transformRawDataPacketsToSample };
    export { convertGanglionArrayToBuffer };
    export { getRawPacketType };
    export { getFromTimePacketAccel };
    export { getFromTimePacketTime };
    export { getFromTimePacketRawAux };
    export { ganglionFillRawDataPacket };
    export { parsePacketStandardAccel };
    export { parsePacketStandardRawAux };
    export { parsePacketTimeSyncedAccel };
    export { parsePacketTimeSyncedRawAux };
    export { parsePacketImpedance };
    export function convertSampleToPacketStandard(sample: any): Uint8Array;
    export function convertSampleToPacketRawAux(sample: any, rawAux: Uint8Array): Uint8Array;
    export function convertSampleToPacketAccelTimeSyncSet(sample: Uint8Array, time: number): Uint8Array;
    export { convertSampleToPacketAccelTimeSynced };
    export function convertSampleToPacketRawAuxTimeSyncSet(sample: Uint8Array, time: number, rawAux: Uint8Array): Uint8Array;
    export { convertSampleToPacketRawAuxTimeSynced };
    export function debugPrettyPrint(sample: any): void;
    export function samplePrintHeader(): string;
    export function samplePrintLine(sample: any): Promise<any>;
    export { floatTo3ByteBuffer };
    export { floatTo2ByteBuffer };
    export function impedanceCalculationForChannel(sampleObject: any, channelNumber: any): Promise<any>;
    export function impedanceCalculationForAllChannels(sampleObject: any): Promise<any>;
    export function interpret16bitAsInt32(twoByteBuffer: any): number;
    export function interpret24bitAsInt32(threeByteBuffer: any): number;
    export function impedanceArray(numberOfChannels: any): {
        channel: any;
        P: {
            raw: number;
            text: string;
        };
        N: {
            raw: number;
            text: string;
        };
    }[];
    export { newImpedanceObject as impedanceObject };
    export function impedanceSummarize(singleInputObject: any): void;
    export { newSample };
    export { newSampleNoScale };
    export { SCALE_FACTOR_ACCEL as scaleFactorAux };
    export function impedanceCalculateArray(sample: Object, impedanceTest: Object): Object | null;
    export function impedanceTestObjDefault(impedanceTestObj: any): any;
    export function samplePacket(sampleNumber: any): Uint8Array;
    export function samplePacketZero(sampleNumber: any): Uint8Array;
    export function samplePacketReal(sampleNumber: any): Uint8Array;
    export function samplePacketStandardRawAux(sampleNumber: any): Uint8Array;
    export function samplePacketAccelTimeSyncSet(sampleNumber: any): Uint8Array;
    export function samplePacketAccelTimeSynced(sampleNumber: any): Uint8Array;
    export function samplePacketRawAuxTimeSyncSet(sampleNumber: any): Uint8Array;
    export function samplePacketRawAuxTimeSynced(sampleNumber: any): Uint8Array;
    export function samplePacketImpedance(channelNumber: any): Uint8Array;
    export function samplePacketUserDefined(): Uint8Array;
    export function samplePacketCytonBLE(sampleNumber: any): Uint8Array;
    export { getBiasSetFromADSRegisterQuery };
    export { getBooleanFromRegisterQuery };
    export { getChannelDataArray };
    export { getChannelDataArrayNoScale };
    export { getDataArrayAccel };
    export { getDataArrayAccelNoScale };
    export { getFirmware };
    export { getSRB1FromADSRegisterQuery };
    export { getNumFromThreeCSVADSRegisterQuery };
    export { isEven };
    export { isOdd };
    export { isStopByte };
    export { isTimeSyncSetConfirmationInBuffer };
    export { makeDaisySampleObject };
    export { makeDaisySampleObjectWifi };
    export { makeTailByteFromPacketType };
    export { newSyncObject };
    export { setChSetFromADSRegisterQuery };
    export { stripToEOTBuffer };
    export { syncChannelSettingsWithRawData };
    export function droppedPacketCheck(previousSampleNumber: number, newSampleNumber: number): any[];
    export { convert18bitAsInt32 };
    export { convert19bitAsInt32 };
    export { decompressDeltas18Bit };
    export { decompressDeltas19Bit };
    export function sampleCompressedData(sampleNumber: any): Uint8Array;
    export function sampleBLERaw(): Uint8Array;
    export function sampleImpedanceChannel1(): Uint8Array;
    export function sampleImpedanceChannel2(): Uint8Array;
    export function sampleImpedanceChannel3(): Uint8Array;
    export function sampleImpedanceChannel4(): Uint8Array;
    export function sampleImpedanceChannelReference(): Uint8Array;
    export function sampleMultiBytePacket(data: any): any;
    export function sampleMultiBytePacketStop(data: any): any;
    export function sampleOtherData(data: any): any;
    export function sampleUncompressedData(): Uint8Array;
    export { parseGanglion };
    export { processMultiBytePacket };
    export { processMultiBytePacketStop };
}
/**
 * @description Used transform raw data packets into fully qualified packets
 * @param o {RawDataToSample} - Used to hold data and configuration settings
 * @return {Array} samples An array of {Sample}
 * @author AJ Keller (@aj-ptw)
 */
declare function transformRawDataPacketToSample(o: {
    /**
     * - An array of rawDataPackets
     */
    rawDataPackets: any[];
    /**
     * - A single raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * - This buffer is used to build up multiple messages over ble and emit them at once
     */
    multiPacketBuffer: Uint8Array;
    /**
     * - The channel settings array
     */
    channelSettings: any[];
    /**
     * (optional) for non time stamp use cases i.e. 0xC0 or 0xC1 (default and raw aux)
     */
    timeOffset: number;
    /**
     * (optional) for non time stamp use cases
     */
    accelArray: any[];
    /**
     * (optional) for verbose output
     */
    verbose: boolean;
    /**
     * (optional) - The last sample number
     */
    lastSampleNumber: number;
    /**
     * (optional) Default `true`. A gain of 24 for Cyton will be used and 51 for ganglion by default.
     */
    scale: boolean;
    /**
     * - An array to hold delta compression items
     */
    decompressedSamples: any[];
    /**
     * - True if you want raw A/D counts or scaled counts in samples
     */
    sendCounts: boolean;
}): any[];
/**
 * @description Used transform raw data packets into fully qualified packets
 * @param o {RawDataToSample} - Used to hold data and configuration settings
 * @return {Array} samples An array of {Sample}
 * @author AJ Keller (@aj-ptw)
 */
declare function transformRawDataPacketsToSample(o: {
    /**
     * - An array of rawDataPackets
     */
    rawDataPackets: any[];
    /**
     * - A single raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * - This buffer is used to build up multiple messages over ble and emit them at once
     */
    multiPacketBuffer: Uint8Array;
    /**
     * - The channel settings array
     */
    channelSettings: any[];
    /**
     * (optional) for non time stamp use cases i.e. 0xC0 or 0xC1 (default and raw aux)
     */
    timeOffset: number;
    /**
     * (optional) for non time stamp use cases
     */
    accelArray: any[];
    /**
     * (optional) for verbose output
     */
    verbose: boolean;
    /**
     * (optional) - The last sample number
     */
    lastSampleNumber: number;
    /**
     * (optional) Default `true`. A gain of 24 for Cyton will be used and 51 for ganglion by default.
     */
    scale: boolean;
    /**
     * - An array to hold delta compression items
     */
    decompressedSamples: any[];
    /**
     * - True if you want raw A/D counts or scaled counts in samples
     */
    sendCounts: boolean;
}): any[];
/**
 * Used to convert a ganglions decompressed back into a buffer
 * @param arr {Array} - An array of four numbers
 * @param data {Uint8Array} - A buffer to store into
 */
declare function convertGanglionArrayToBuffer(arr: any[], data: Uint8Array): void;
declare function getRawPacketType(stopByte: any): number;
/**
 * @description Grabs an accel value from a raw but time synced packet. Important that this utilizes the fact that:
 *      X axis data is sent with every sampleNumber % 10 === 7
 *      Y axis data is sent with every sampleNumber % 10 === 8
 *      Z axis data is sent with every sampleNumber % 10 === 9
 * @param o {Object}
 * @param o.accelArray {Array} - A 3 element array that allows us to have inter packet memory of x and y axis data and emit only on the z axis packets.
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw time synced accel packet
 * @param o.scale {Boolean} - Do you want to scale the results? Default is true
 * @returns {boolean} - A boolean that is true only when the accel array is ready to be emitted... i.e. when this is a Z axis packet
 */
declare function getFromTimePacketAccel(o: {
    accelArray: any[];
    rawDataPacket: Uint8Array;
    scale: boolean;
}): boolean;
/**
* @description Extract a time from a time packet in ms.
* @param dataBuf - A raw packet with 33 bytes of data
* @returns {Number} - Board time in milli seconds
* @author AJ Keller (@aj-ptw)
*/
declare function getFromTimePacketTime(dataBuf: any): number;
/**
* @description Grabs a raw aux value from a raw but time synced packet.
* @param dataBuf {Uint8Array} - The 33byte raw time synced raw aux packet
* @returns {Uint8Array|SafeBuffer|Buffer2} - Fulfills a 2 byte buffer
*/
declare function getFromTimePacketRawAux(dataBuf: Uint8Array): Uint8Array | SafeBuffer | Buffer2;
/**
 * @description This function takes a raw data buffer of 4 3-byte signed integers for ganglion
 * @param o {Object} - The input object
 * @param o.data {Uint8Array} - An allocated and filled buffer of length 12
 * @param o.rawDataPacket {Uint8Array} - An allocated buffer of length 33
 * @param o.sampleNumber {Number} - The sample number to load into the `rawDataPacket`
 */
declare function ganglionFillRawDataPacket(o: {
    data: Uint8Array;
    rawDataPacket: Uint8Array;
    sampleNumber: number;
}): void;
/**
 * @description This method parses a 33 byte OpenBCI V3 packet and converts to a sample object
 * @param o {Object} - The input object
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw packet
 * @param o.channelSettings {Array} - An array of channel settings that is an Array that has shape similar to the one
 *                  calling k.channelSettingsArrayInit(). The most important rule here is that it is
 *                  Array of objects that have key-value pair {gain:NUMBER}
 * @param o.scale {Boolean} - Do you want to scale the results? Default true
 * @param o.lastSampleNumber {Number} - The last sample number
 * @returns {Sample} - A sample object. NOTE: Only has accelData if this is a Z axis packet.
 */
declare function parsePacketStandardAccel(o: {
    rawDataPacket: Uint8Array;
    channelSettings: any[];
    scale: boolean;
    lastSampleNumber: number;
}): {
    /**
     * of floats of accel data. not always present in object.
     */
    accelData: any[];
    /**
     * The sample number
     */
    sampleNumber: number;
    /**
     * The extracted channel data
     */
    channelData: any[];
    /**
     * The raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * If the sample is valid
     */
    valid: boolean;
};
/**
 * @description This method parses a 33 byte OpenBCI V3 packet and converts to a sample object
 * @param o {Object} - The input object
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw packet
 * @param o.channelSettings {Array} - An array of channel settings that is an Array that has shape similar to the one
 *                  calling k.channelSettingsArrayInit(). The most important rule here is that it is
 *                  Array of objects that have key-value pair {gain:NUMBER}
 * @param o.scale {Boolean} - Do you want to scale the results? Default is true
 * @param o.lastSampleNumber {Number} - The last sample number
 * @returns {Sample} - A sample object. NOTE: Only has accelData if this is a Z axis packet.
 */
declare function parsePacketStandardRawAux(o: {
    rawDataPacket: Uint8Array;
    channelSettings: any[];
    scale: boolean;
    lastSampleNumber: number;
}): {
    /**
     * of floats of accel data. not always present in object.
     */
    accelData: any[];
    /**
     * The sample number
     */
    sampleNumber: number;
    /**
     * The extracted channel data
     */
    channelData: any[];
    /**
     * The raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * If the sample is valid
     */
    valid: boolean;
};
/**
 * @description Grabs an accel value from a raw but time synced packet. Important that this utilizes the fact that:
 *      X axis data is sent with every sampleNumber % 10 === 0
 *      Y axis data is sent with every sampleNumber % 10 === 1
 *      Z axis data is sent with every sampleNumber % 10 === 2
 * @param o {Object} - The input object
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw time synced accel packet
 * @param o.channelSettings {Array} - An array of channel settings that is an Array that has shape similar to the one
 *                  calling OpenBCIConstans.channelSettingsArrayInit(). The most important rule here is that it is
 *                  Array of objects that have key-value pair {gain:NUMBER}
 * @param o.timeOffset {Number} - The difference between board time and current time calculated with sync methods.
 * @param o.accelArray {Array} - A 3 element array that allows us to have inter packet memory of x and y axis data and emit only on the z axis packets.
 * @param o.scale {Boolean} - Do you want to scale the results? Default is true
 * @returns {Sample} - A sample object. NOTE: Only has accelData if this is a Z axis packet.
 */
declare function parsePacketTimeSyncedAccel(o: {
    rawDataPacket: Uint8Array;
    channelSettings: any[];
    timeOffset: number;
    accelArray: any[];
    scale: boolean;
}): {
    /**
     * of floats of accel data. not always present in object.
     */
    accelData: any[];
    /**
     * The sample number
     */
    sampleNumber: number;
    /**
     * The extracted channel data
     */
    channelData: any[];
    /**
     * The raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * If the sample is valid
     */
    valid: boolean;
};
/**
 * @description Raw aux
 * @param o {Object} - The input object
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw time synced accel packet
 * @param o.channelSettings {Array} - An array of channel settings that is an Array that has shape similar to the one
 *                  calling k.channelSettingsArrayInit(). The most important rule here is that it is
 *                  Array of objects that have key-value pair {gain:NUMBER}
 * @param o.timeOffset {Number} - The difference between board time and current time calculated with sync methods.
 * @param o.scale {Boolean} - Do you want to scale the results? Default is true
 * @param o.lastSampleNumber {Number} - The last sample number
 * @returns {Sample} - A sample object. NOTE: The aux data is placed in a 2 byte buffer
 */
declare function parsePacketTimeSyncedRawAux(o: {
    rawDataPacket: Uint8Array;
    channelSettings: any[];
    timeOffset: number;
    scale: boolean;
    lastSampleNumber: number;
}): {
    /**
     * of floats of accel data. not always present in object.
     */
    accelData: any[];
    /**
     * The sample number
     */
    sampleNumber: number;
    /**
     * The extracted channel data
     */
    channelData: any[];
    /**
     * The raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * If the sample is valid
     */
    valid: boolean;
};
/**
 * @description Raw aux
 * @param o {Object} - The input object
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw time synced accel packet
 * @returns {Impedance} - An impedance object.
 */
declare function parsePacketImpedance(o: {
    rawDataPacket: Uint8Array;
}): {
    /**
     * The channel number
     */
    channelNumber: number;
    /**
     * The impedance in ohms
     */
    impedanceValue: number;
};
/**
* @description Mainly used by the simulator to convert a randomly generated sample into a std OpenBCI V3 Packet
* @param sample {Object} - A sample object
* @param time {Number} - The time to inject into the sample.
* @returns {Uint8Array} - A time sync accel packet
*/
declare function convertSampleToPacketAccelTimeSynced(sample: Object, time: number): Uint8Array;
/**
* @description Mainly used by the simulator to convert a randomly generated sample into a std OpenBCI V3 Packet
* @param sample {Object} - A sample object
* @param time {Number} - The time to inject into the sample.
* @param rawAux {Uint8Array} - 2 byte buffer to inject into sample
* @returns {Uint8Array} - A time sync raw aux packet
*/
declare function convertSampleToPacketRawAuxTimeSynced(sample: Object, time: number, rawAux: Uint8Array): Uint8Array;
/**
* @description Convert float number into three byte buffer. This is the opposite of .interpret24bitAsInt32()
* @param float - The number you want to convert
* @returns {Uint8Array} - 3-byte buffer containing the float
*/
declare function floatTo3ByteBuffer(float: any): Uint8Array;
/**
* @description Convert float number into three byte buffer. This is the opposite of .interpret24bitAsInt32()
* @param float - The number you want to convert
* @returns {buffer} - 3-byte buffer containing the float
*/
declare function floatTo2ByteBuffer(float: any): buffer;
declare function newImpedanceObject(channelNumber: any): {
    channel: any;
    P: {
        raw: number;
        text: string;
    };
    N: {
        raw: number;
        text: string;
    };
};
declare function newSample(sampleNumber: any): {
    startByte: number;
    sampleNumber: any;
    channelData: never[];
    accelData: never[];
    auxData: null;
    stopByte: number;
    boardTime: number;
    timestamp: number;
    valid: boolean;
};
declare function newSampleNoScale(sampleNumber: any): {
    startByte: number;
    sampleNumber: any;
    channelDataCounts: never[];
    accelDataCounts: never[];
    auxData: null;
    stopByte: number;
    boardTime: number;
    timestamp: number;
    valid: boolean;
};
declare const SCALE_FACTOR_ACCEL: number;
/**
 * Used to get bias setting from raw query
 * @param str {String} - The raw query data
 * @param channelNumber {Number} - Zero indexed, please send `channelNumber` directly to this function.
 * @returns {boolean}
 */
declare function getBiasSetFromADSRegisterQuery(str: string, channelNumber: number): boolean;
/**
 * Use reg ex to parse a `str` register query for a boolean `offset` from index. Throws errors
 * @param str {String} - The string to search
 * @param regEx {RegExp} - The key to match to
 * @param offset {Number} - The number of bytes to offset from the index of the reg ex hit
 * @returns {boolean} The converted and parsed value from `str`
 */
declare function getBooleanFromRegisterQuery(str: string, regEx: RegExp, offset: number): boolean;
/**
 * @description Takes a buffer filled with 24 bit signed integers from an OpenBCI device with gain settings in
 *                  channelSettingsArray[index].gain and converts based on settings of ADS1299... spits out an
 *                  array of floats in VOLTS
 * @param o {Object} - The input object
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw time synced accel packet
 * @param o.channelSettings {Array} - An array of channel settings that is an Array that has shape similar to the one
 *                  calling k.channelSettingsArrayInit(). The most important rule here is that it is
 *                  Array of objects that have key-value pair {gain:NUMBER}
 * @param o.scale {Boolean} - Do you want to scale the results? Default is true
 * @param o.lastSampleNumber {Number} - The last sample number
 * @param o.protocol {String} - Either `Serial` or `Wifi` (Default is `Wifi`)
 * @returns {Array} - Array filled with floats for each channel's voltage in VOLTS
 * @author AJ Keller (@aj-ptw)
 */
declare function getChannelDataArray(o: {
    rawDataPacket: Uint8Array;
    channelSettings: any[];
    scale: boolean;
    lastSampleNumber: number;
    protocol: string;
}): any[];
/**
 * @description Takes a buffer filled with 24 bit signed integers from an OpenBCI device converts to array of counts
 * @param o {Object} - The input object
 * @param o.rawDataPacket {Uint8Array} - The 33byte raw time synced accel packet
 * @param o.channelSettings {Array} - An array of channel settings that is an Array that has shape similar to the one
 *                  calling k.channelSettingsArrayInit(). The most important rule here is that it is
 *                  Array of objects that have key-value pair {gain:NUMBER}
 * @returns {Array} - Array filled with floats for each channel's voltage in VOLTS
 * @author AJ Keller (@aj-ptw)
 */
declare function getChannelDataArrayNoScale(o: {
    rawDataPacket: Uint8Array;
    channelSettings: any[];
}): any[];
/**
* @description Takes a buffer filled with 3 16 bit integers from an OpenBCI device and converts based on settings
*                  of the MPU, values are in ?
* @param dataBuf - Uint8Array that is 6 bytes long
* @returns {Array} - Array of floats 3 elements long
* @author AJ Keller (@aj-ptw)
*/
declare function getDataArrayAccel(dataBuf: any): any[];
/**
 * @description Takes a buffer filled with 3 16 bit integers from an OpenBCI device and converts based on settings
 *                  to an int
 * @param dataBuf - Uint8Array that is 6 bytes long
 * @returns {Array} - Array of floats 3 elements long
 * @author AJ Keller (@aj-ptw)
 */
declare function getDataArrayAccelNoScale(dataBuf: any): any[];
/**
 * Used to extract the major version from
 * @param dataBuffer
 * @return {*}
 */
declare function getFirmware(dataBuffer: any): any;
/**
 * Used to get the truth value fo srb1 within the system
 * @param str {String} - The raw query data
 * @returns {boolean}
 */
declare function getSRB1FromADSRegisterQuery(str: string): boolean;
/**
 * Used to get a number from the raw query data
 * @param str {String} - The raw query data
 * @param regEx {RegExp} - The regular expression to index off of
 * @param offset {Number} - The number of bytes offset from index to start
 */
declare function getNumFromThreeCSVADSRegisterQuery(str: string, regEx: RegExp, offset: number): number;
/**
* @description Used to test a number to see if it is even
* @param a {Number} - The number to test
* @returns {boolean} - True if `a` is even
*/
declare function isEven(a: number): boolean;
/**
* @description Used to test a number to see if it is odd
* @param a {Number} - The number to test
* @returns {boolean} - True if `a` is odd
*/
declare function isOdd(a: number): boolean;
/**
* @description Used to check and see if a byte adheres to the stop byte structure of 0xCx where x is the set of
*      numbers from 0-F in hex of 0-15 in decimal.
* @param byte {Number} - The number to test
* @returns {boolean} - True if `byte` follows the correct form
* @author AJ Keller (@aj-ptw)
*/
declare function isStopByte(byte: number): boolean;
/**
* @description Used to parse a buffer for the `,` character that is acked back after a time sync request is sent
* @param dataBuffer {Uint8Array} - The buffer of some length to parse
* @returns {boolean} - True if the `,` was found.
*/
declare function isTimeSyncSetConfirmationInBuffer(dataBuffer: Uint8Array): boolean;
/**
* @description Used to make one sample object from two sample objects. The sample number of the new daisy sample will
*      be the upperSampleObject's sample number divded by 2. This allows us to preserve consecutive sample numbers that
*      flip over at 127 instead of 255 for an 8 channel. The daisySampleObject will also have one `channelData` array
*      with 16 elements inside it, with the lowerSampleObject in the lower indices and the upperSampleObject in the
*      upper set of indices. The auxData from both channels shall be captured in an object called `auxData` which
*      contains two arrays referenced by keys `lower` and `upper` for the `lowerSampleObject` and `upperSampleObject`,
*      respectively. The timestamps shall be averaged and moved into an object called `timestamp`. Further, the
*      un-averaged timestamps from the `lowerSampleObject` and `upperSampleObject` shall be placed into an object called
*      `_timestamps` which shall contain two keys `lower` and `upper` which contain the original timestamps for their
*      respective sampleObjects.
* @param lowerSampleObject {Object} - Lower 8 channels with odd sample number
* @param upperSampleObject {Object} - Upper 8 channels with even sample number
* @returns {Object} - The new merged daisy sample object
*/
declare function makeDaisySampleObject(lowerSampleObject: Object, upperSampleObject: Object): Object;
/**
 * @description Used to make one sample object from two sample objects. The sample number of the new daisy sample will
 *      be the upperSampleObject's sample number divded by 2. This allows us to preserve consecutive sample numbers that
 *      flip over at 127 instead of 255 for an 8 channel. The daisySampleObject will also have one `channelData` array
 *      with 16 elements inside it, with the lowerSampleObject in the lower indices and the upperSampleObject in the
 *      upper set of indices. The auxData from both channels shall be captured in an object called `auxData` which
 *      contains two arrays referenced by keys `lower` and `upper` for the `lowerSampleObject` and `upperSampleObject`,
 *      respectively. The timestamps shall be averaged and moved into an object called `timestamp`. Further, the
 *      un-averaged timestamps from the `lowerSampleObject` and `upperSampleObject` shall be placed into an object called
 *      `_timestamps` which shall contain two keys `lower` and `upper` which contain the original timestamps for their
 *      respective sampleObjects.
 * @param lowerSampleObject {Object} - Lower 8 channels with odd sample number
 * @param upperSampleObject {Object} - Upper 8 channels with even sample number
 * @returns {Object} - The new merged daisy sample object
 */
declare function makeDaisySampleObjectWifi(lowerSampleObject: Object, upperSampleObject: Object): Object;
/**
* @description Converts a packet type {Number} into a OpenBCI stop byte
* @param type {Number} - The number to smash on to the stop byte. Must be 0-15,
*          out of bounds input will result in a 0
* @return {Number} - A properly formatted OpenBCI stop byte
*/
declare function makeTailByteFromPacketType(type: number): number;
declare function newSyncObject(): {
    boardTime: number;
    correctedTransmissionTime: boolean;
    error: null;
    timeSyncSent: number;
    timeSyncSentConfirmation: number;
    timeSyncSetPacket: number;
    timeRoundTrip: number;
    timeTransmission: number;
    timeOffset: number;
    timeOffsetMaster: number;
    valid: boolean;
};
/**
 * Used to get bias setting from raw query
 * @param str {String} - The raw query data
 * @param channelSettings {ChannelSettingsObject} - Just your standard channel setting object
 * @returns {boolean}
 */
declare function setChSetFromADSRegisterQuery(str: string, channelSettings: ChannelSettingsObject): boolean;
/**
 * @description Used to slice a buffer for the EOT '$$$'.
 * @param dataBuffer {Uint8Array} - The buffer of some length to parse
 * @returns {Uint8Array} - The remaining buffer.
 */
declare function stripToEOTBuffer(dataBuffer: Uint8Array): Uint8Array;
/**
 *
 * @param o {Object}
 * @param o.channelSettings {Array} - The standard channel settings object
 * @param o.data {Uint8Array} - The buffer of raw query data
 */
declare function syncChannelSettingsWithRawData(o: {
    channelSettings: any[];
    data: Uint8Array;
}): void;
/**
 * Converts a special ganglion 18 bit compressed number
 *  The compressions uses the LSB, bit 1, as the signed bit, instead of using
 *  the MSB. Therefore you must not look to the MSB for a sign extension, one
 *  must look to the LSB, and the same rules applies, if it's a 1, then it's a
 *  negative and if it's 0 then it's a positive number.
 * @param threeByteBuffer {Uint8Array}
 *  A 3-byte buffer with only 18 bits of actual data.
 * @return {number} A signed integer.
 */
declare function convert18bitAsInt32(threeByteBuffer: Uint8Array): number;
/**
 * Converts a special ganglion 19 bit compressed number
 *  The compressions uses the LSB, bit 1, as the signed bit, instead of using
 *  the MSB. Therefore you must not look to the MSB for a sign extension, one
 *  must look to the LSB, and the same rules applies, if it's a 1, then it's a
 *  negative and if it's 0 then it's a positive number.
 * @param threeByteBuffer {Uint8Array}
 *  A 3-byte buffer with only 19 bits of actual data.
 * @return {number} A signed integer.
 */
declare function convert19bitAsInt32(threeByteBuffer: Uint8Array): number;
/**
 * Called to when a compressed packet is received.
 * @param buffer {Uint8Array} Just the data portion of the sample. So 18 bytes.
 * @return {Array} - An array of deltas of shape 2x4 (2 samples per packet
 *  and 4 channels per sample.)
 * @private
 */
declare function decompressDeltas18Bit(buffer: Uint8Array): any[];
/**
 * Called to when a compressed packet is received.
 * @param buffer {Uint8Array} Just the data portion of the sample. So 19 bytes.
 * @return {Array} - An array of deltas of shape 2x4 (2 samples per packet
 *  and 4 channels per sample.)
 * @private
 */
declare function decompressDeltas19Bit(buffer: Uint8Array): any[];
/**
 * @description Used transform raw data packets into fully qualified packets
 * @param o {RawDataToSample} - Used to hold data and configuration settings
 * @return {Array} samples An array of {Sample}
 * @author AJ Keller (@aj-ptw)
 */
declare function parseGanglion(o: {
    /**
     * - An array of rawDataPackets
     */
    rawDataPackets: any[];
    /**
     * - A single raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * - This buffer is used to build up multiple messages over ble and emit them at once
     */
    multiPacketBuffer: Uint8Array;
    /**
     * - The channel settings array
     */
    channelSettings: any[];
    /**
     * (optional) for non time stamp use cases i.e. 0xC0 or 0xC1 (default and raw aux)
     */
    timeOffset: number;
    /**
     * (optional) for non time stamp use cases
     */
    accelArray: any[];
    /**
     * (optional) for verbose output
     */
    verbose: boolean;
    /**
     * (optional) - The last sample number
     */
    lastSampleNumber: number;
    /**
     * (optional) Default `true`. A gain of 24 for Cyton will be used and 51 for ganglion by default.
     */
    scale: boolean;
    /**
     * - An array to hold delta compression items
     */
    decompressedSamples: any[];
    /**
     * - True if you want raw A/D counts or scaled counts in samples
     */
    sendCounts: boolean;
}): any[];
/**
 * Used to stack multi packet buffers into the multi packet buffer. This is finally emitted when a stop packet byte id
 *  is received.
 * @param o {RawDataToSample} - Used to hold data and configuration settings
 * @private
 */
declare function processMultiBytePacket(o: {
    /**
     * - An array of rawDataPackets
     */
    rawDataPackets: any[];
    /**
     * - A single raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * - This buffer is used to build up multiple messages over ble and emit them at once
     */
    multiPacketBuffer: Uint8Array;
    /**
     * - The channel settings array
     */
    channelSettings: any[];
    /**
     * (optional) for non time stamp use cases i.e. 0xC0 or 0xC1 (default and raw aux)
     */
    timeOffset: number;
    /**
     * (optional) for non time stamp use cases
     */
    accelArray: any[];
    /**
     * (optional) for verbose output
     */
    verbose: boolean;
    /**
     * (optional) - The last sample number
     */
    lastSampleNumber: number;
    /**
     * (optional) Default `true`. A gain of 24 for Cyton will be used and 51 for ganglion by default.
     */
    scale: boolean;
    /**
     * - An array to hold delta compression items
     */
    decompressedSamples: any[];
    /**
     * - True if you want raw A/D counts or scaled counts in samples
     */
    sendCounts: boolean;
}): void;
/**
 * Adds the `data` buffer to the multi packet buffer and emits the buffer as 'message'
 * @param o {RawDataToSample} - Used to hold data and configuration settings
 * @private
 */
declare function processMultiBytePacketStop(o: {
    /**
     * - An array of rawDataPackets
     */
    rawDataPackets: any[];
    /**
     * - A single raw data packet
     */
    rawDataPacket: Uint8Array;
    /**
     * - This buffer is used to build up multiple messages over ble and emit them at once
     */
    multiPacketBuffer: Uint8Array;
    /**
     * - The channel settings array
     */
    channelSettings: any[];
    /**
     * (optional) for non time stamp use cases i.e. 0xC0 or 0xC1 (default and raw aux)
     */
    timeOffset: number;
    /**
     * (optional) for non time stamp use cases
     */
    accelArray: any[];
    /**
     * (optional) for verbose output
     */
    verbose: boolean;
    /**
     * (optional) - The last sample number
     */
    lastSampleNumber: number;
    /**
     * (optional) Default `true`. A gain of 24 for Cyton will be used and 51 for ganglion by default.
     */
    scale: boolean;
    /**
     * - An array to hold delta compression items
     */
    decompressedSamples: any[];
    /**
     * - True if you want raw A/D counts or scaled counts in samples
     */
    sendCounts: boolean;
}): {
    message: string;
};
