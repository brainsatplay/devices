export default constantsModule;
/**
 * - See page 50 of the ads1299.pdf
 */
export type ChannelSettingsObject = {
    /**
     * - The channel number of this object
     */
    channelNumber: number;
    /**
     * - Power-down: - This boolean determines the channel power mode for the
     * corresponding channel. `false` for normal operation, channel is on, and `true` for channel
     * power-down, channel is off. (Default is `false`)
     */
    powerDown: boolean;
    /**
     * - PGA gain: This number determines the PGA gain setting. Can be either 1, 2, 4, 6, 8, 12, 24
     * (Default is 24)
     */
    gain: number;
    /**
     * - Channel input: This string is used to determine the channel input selection.
     * Can be:
     * 'normal' - Normal electrode input (Default)
     * 'shorted' - Input shorted (for offset or noise measurements)
     * 'biasMethod' - Used in conjunction with BIAS_MEAS bit for BIAS measurements.
     * 'mvdd' - MVDD for supply measurement
     * 'temp' - Temperature sensor
     * 'testsig' - Test signal
     * 'biasDrp' - BIAS_DRP (positive electrode is the driver)
     * 'biasDrn' - BIAS_DRN (negative electrode is the driver)
     */
    inputType: string;
    /**
     * - BIAS: Is the channel included in the bias? If `true` or yes, this channel has both P
     * and N channels connected to the bias. (Default is `true`)
     */
    bias: boolean;
    /**
     * - SRB2 connection: This boolean determines the SRB2 connection for the corresponding
     * channel. `false` for open, not connected to channel, and `true` for closed, connected to the
     * channel. (Default is `true`)
     */
    srb2: boolean;
    /**
     * - Stimulus, reference, and bias 1: This boolean connects the SRB2 to all 4, 6, or 8
     * channels inverting inputs. `false` when switches open, disconnected, and `true` when switches
     * closed, or connected. (Default is `false`)
     */
    srb1: boolean;
};
declare namespace constantsModule {
    export { obciChannelOff1 as OBCIChannelOff1 };
    export { obciChannelOff2 as OBCIChannelOff2 };
    export { obciChannelOff3 as OBCIChannelOff3 };
    export { obciChannelOff4 as OBCIChannelOff4 };
    export { obciChannelOff5 as OBCIChannelOff5 };
    export { obciChannelOff6 as OBCIChannelOff6 };
    export { obciChannelOff7 as OBCIChannelOff7 };
    export { obciChannelOff8 as OBCIChannelOff8 };
    export { obciChannelOff9 as OBCIChannelOff9 };
    export { obciChannelOff10 as OBCIChannelOff10 };
    export { obciChannelOff11 as OBCIChannelOff11 };
    export { obciChannelOff12 as OBCIChannelOff12 };
    export { obciChannelOff13 as OBCIChannelOff13 };
    export { obciChannelOff14 as OBCIChannelOff14 };
    export { obciChannelOff15 as OBCIChannelOff15 };
    export { obciChannelOff16 as OBCIChannelOff16 };
    export function commandChannelOff(channelNumber: any): Promise<any>;
    export { obciChannelOn1 as OBCIChannelOn1 };
    export { obciChannelOn2 as OBCIChannelOn2 };
    export { obciChannelOn3 as OBCIChannelOn3 };
    export { obciChannelOn4 as OBCIChannelOn4 };
    export { obciChannelOn5 as OBCIChannelOn5 };
    export { obciChannelOn6 as OBCIChannelOn6 };
    export { obciChannelOn7 as OBCIChannelOn7 };
    export { obciChannelOn8 as OBCIChannelOn8 };
    export { obciChannelOn9 as OBCIChannelOn9 };
    export { obciChannelOn10 as OBCIChannelOn10 };
    export { obciChannelOn11 as OBCIChannelOn11 };
    export { obciChannelOn12 as OBCIChannelOn12 };
    export { obciChannelOn13 as OBCIChannelOn13 };
    export { obciChannelOn14 as OBCIChannelOn14 };
    export { obciChannelOn15 as OBCIChannelOn15 };
    export { obciChannelOn16 as OBCIChannelOn16 };
    export function commandChannelOn(channelNumber: any): Promise<any>;
    export { obciTestSignalConnectToDC as OBCITestSignalConnectToDC };
    export { obciTestSignalConnectToGround as OBCITestSignalConnectToGround };
    export { obciTestSignalConnectToPulse1xFast as OBCITestSignalConnectToPulse1xFast };
    export { obciTestSignalConnectToPulse1xSlow as OBCITestSignalConnectToPulse1xSlow };
    export { obciTestSignalConnectToPulse2xFast as OBCITestSignalConnectToPulse2xFast };
    export { obciTestSignalConnectToPulse2xSlow as OBCITestSignalConnectToPulse2xSlow };
    export function getTestSignalCommand(signal: any): Promise<any>;
    export { obciChannelCmdADCNormal as OBCIChannelCmdADCNormal };
    export { obciChannelCmdADCShorted as OBCIChannelCmdADCShorted };
    export { obciChannelCmdADCBiasDRP as OBCIChannelCmdADCBiasDRP };
    export { obciChannelCmdADCBiasDRN as OBCIChannelCmdADCBiasDRN };
    export { obciChannelCmdADCBiasMethod as OBCIChannelCmdADCBiasMethod };
    export { obciChannelCmdADCMVDD as OBCIChannelCmdADCMVDD };
    export { obciChannelCmdADCTemp as OBCIChannelCmdADCTemp };
    export { obciChannelCmdADCTestSig as OBCIChannelCmdADCTestSig };
    export { obciChannelCmdBiasInclude as OBCIChannelCmdBiasInclude };
    export { obciChannelCmdBiasRemove as OBCIChannelCmdBiasRemove };
    export { obciChannelCmdChannel1 as OBCIChannelCmdChannel1 };
    export { obciChannelCmdChannel2 as OBCIChannelCmdChannel2 };
    export { obciChannelCmdChannel3 as OBCIChannelCmdChannel3 };
    export { obciChannelCmdChannel4 as OBCIChannelCmdChannel4 };
    export { obciChannelCmdChannel5 as OBCIChannelCmdChannel5 };
    export { obciChannelCmdChannel6 as OBCIChannelCmdChannel6 };
    export { obciChannelCmdChannel7 as OBCIChannelCmdChannel7 };
    export { obciChannelCmdChannel8 as OBCIChannelCmdChannel8 };
    export { obciChannelCmdChannel9 as OBCIChannelCmdChannel9 };
    export { obciChannelCmdChannel10 as OBCIChannelCmdChannel10 };
    export { obciChannelCmdChannel11 as OBCIChannelCmdChannel11 };
    export { obciChannelCmdChannel12 as OBCIChannelCmdChannel12 };
    export { obciChannelCmdChannel13 as OBCIChannelCmdChannel13 };
    export { obciChannelCmdChannel14 as OBCIChannelCmdChannel14 };
    export { obciChannelCmdChannel15 as OBCIChannelCmdChannel15 };
    export { obciChannelCmdChannel16 as OBCIChannelCmdChannel16 };
    export { commandChannelForCmd };
    export { obciChannelCmdGain1 as OBCIChannelCmdGain1 };
    export { obciChannelCmdGain2 as OBCIChannelCmdGain2 };
    export { obciChannelCmdGain4 as OBCIChannelCmdGain4 };
    export { obciChannelCmdGain6 as OBCIChannelCmdGain6 };
    export { obciChannelCmdGain8 as OBCIChannelCmdGain8 };
    export { obciChannelCmdGain12 as OBCIChannelCmdGain12 };
    export { obciChannelCmdGain24 as OBCIChannelCmdGain24 };
    export { commandForGain };
    export { gainForCommand };
    export { obciChannelCmdLatch as OBCIChannelCmdLatch };
    export { obciChannelCmdPowerOff as OBCIChannelCmdPowerOff };
    export { obciChannelCmdPowerOn as OBCIChannelCmdPowerOn };
    export { obciChannelCmdSet as OBCIChannelCmdSet };
    export { obciChannelCmdSRB1Connect as OBCIChannelCmdSRB1Connect };
    export { obciChannelCmdSRB1Diconnect as OBCIChannelCmdSRB1Diconnect };
    export { obciChannelCmdSRB2Connect as OBCIChannelCmdSRB2Connect };
    export { obciChannelCmdSRB2Diconnect as OBCIChannelCmdSRB2Diconnect };
    export { channelSettingsObjectDefault };
    export function channelSettingsArrayInit(numberOfChannels: number): any[];
    export { obciStringADCNormal as OBCIStringADCNormal };
    export { obciStringADCShorted as OBCIStringADCShorted };
    export { obciStringADCBiasMethod as OBCIStringADCBiasMethod };
    export { obciStringADCMvdd as OBCIStringADCMvdd };
    export { obciStringADCTemp as OBCIStringADCTemp };
    export { obciStringADCTestSig as OBCIStringADCTestSig };
    export { obciStringADCBiasDrp as OBCIStringADCBiasDrp };
    export { obciStringADCBiasDrn as OBCIStringADCBiasDrn };
    export { commandForADCString };
    export { inputTypeForCommand };
    export { obciChannelDefaultAllSet as OBCIChannelDefaultAllSet };
    export { obciChannelDefaultAllGet as OBCIChannelDefaultAllGet };
    export { obciChannelImpedanceLatch as OBCIChannelImpedanceLatch };
    export { obciChannelImpedanceSet as OBCIChannelImpedanceSet };
    export { obciChannelImpedanceTestSignalApplied as OBCIChannelImpedanceTestSignalApplied };
    export { obciChannelImpedanceTestSignalAppliedNot as OBCIChannelImpedanceTestSignalAppliedNot };
    export { obciSDLogForHour1 as OBCISDLogForHour1 };
    export { obciSDLogForHour2 as OBCISDLogForHour2 };
    export { obciSDLogForHour4 as OBCISDLogForHour4 };
    export { obciSDLogForHour12 as OBCISDLogForHour12 };
    export { obciSDLogForHour24 as OBCISDLogForHour24 };
    export { obciSDLogForMin5 as OBCISDLogForMin5 };
    export { obciSDLogForMin15 as OBCISDLogForMin15 };
    export { obciSDLogForMin30 as OBCISDLogForMin30 };
    export { obciSDLogForSec14 as OBCISDLogForSec14 };
    export { obciSDLogStop as OBCISDLogStop };
    export { obciStringSDHour1 as OBCIStringSDHour1 };
    export { obciStringSDHour2 as OBCIStringSDHour2 };
    export { obciStringSDHour4 as OBCIStringSDHour4 };
    export { obciStringSDHour12 as OBCIStringSDHour12 };
    export { obciStringSDHour24 as OBCIStringSDHour24 };
    export { obciStringSDMin5 as OBCIStringSDMin5 };
    export { obciStringSDMin15 as OBCIStringSDMin15 };
    export { obciStringSDMin30 as OBCIStringSDMin30 };
    export { obciStringSDSec14 as OBCIStringSDSec14 };
    export function sdSettingForString(stringCommand: string): Promise<any>;
    export { obciStreamStart as OBCIStreamStart };
    export { obciStreamStop as OBCIStreamStop };
    export { obciAccelStart as OBCIAccelStart };
    export { obciAccelStop as OBCIAccelStop };
    export { obciMiscQueryRegisterSettings as OBCIMiscQueryRegisterSettings };
    export { obciMiscQueryRegisterSettingsChannel1 as OBCIMiscQueryRegisterSettingsChannel1 };
    export { obciMiscQueryRegisterSettingsChannel2 as OBCIMiscQueryRegisterSettingsChannel2 };
    export { obciMiscQueryRegisterSettingsChannel3 as OBCIMiscQueryRegisterSettingsChannel3 };
    export { obciMiscQueryRegisterSettingsChannel4 as OBCIMiscQueryRegisterSettingsChannel4 };
    export { obciMiscQueryRegisterSettingsChannel5 as OBCIMiscQueryRegisterSettingsChannel5 };
    export { obciMiscQueryRegisterSettingsChannel6 as OBCIMiscQueryRegisterSettingsChannel6 };
    export { obciMiscQueryRegisterSettingsChannel7 as OBCIMiscQueryRegisterSettingsChannel7 };
    export { obciMiscQueryRegisterSettingsChannel8 as OBCIMiscQueryRegisterSettingsChannel8 };
    export function channelSettingsKeyForChannel(channelNumber: any): Promise<any>;
    export { obciMiscSoftReset as OBCIMiscSoftReset };
    export { obciChannelMaxNumber8 as OBCIChannelMaxNumber8 };
    export { obciChannelMaxNumber16 as OBCIChannelMaxNumber16 };
    export { obciChannelMaxNumber8NoDaisyToRemove as OBCIChannelMaxNumber8NoDaisyToRemove };
    export { obciChannelMaxNumber8SuccessDaisyRemoved as OBCIChannelMaxNumber8SuccessDaisyRemoved };
    export { obciChannelMaxNumber16DaisyAlreadyAttached as OBCIChannelMaxNumber16DaisyAlreadyAttached };
    export { obciChannelMaxNumber16DaisyAttached as OBCIChannelMaxNumber16DaisyAttached };
    export { obciChannelMaxNumber16NoDaisyAttached as OBCIChannelMaxNumber16NoDaisyAttached };
    export { obciFilterDisable as OBCIFilterDisable };
    export { obciFilterEnable as OBCIFilterEnable };
    export { obciTrigger as OBCITrigger };
    export { obciNumberOfChannelsCyton as OBCINumberOfChannelsCyton };
    export { obciNumberOfChannelsCytonBLE as OBCINumberOfChannelsCytonBLE };
    export { obciNumberOfChannelsDaisy as OBCINumberOfChannelsDaisy };
    export { obciNumberOfChannelsDefault as OBCINumberOfChannelsDefault };
    export { obciNumberOfChannelsGanglion as OBCINumberOfChannelsGanglion };
    export { obciBoardCyton as OBCIBoardCyton };
    export { obciBoardCytonBLE as OBCIBoardCytonBLE };
    export { obciBoardDaisy as OBCIBoardDaisy };
    export { obciBoardDefault as OBCIBoardDefault };
    export { obciBoardGanglion as OBCIBoardGanglion };
    export { obciBoardNone as OBCIBoardNone };
    export function numberOfChannelsForBoardType(boardType: any): 0 | 2 | 4 | 8 | 16;
    export function boardTypeForNumberOfChannels(numberOfChannels: any): "cyton" | "cytonBLE" | "daisy" | "ganglion" | "none";
    export { obciSampleRate1000 as OBCISampleRate1000 };
    export { obciSampleRate125 as OBCISampleRate125 };
    export { obciSampleRate12800 as OBCISampleRate12800 };
    export { obciSampleRate1600 as OBCISampleRate1600 };
    export { obciSampleRate16000 as OBCISampleRate16000 };
    export { obciSampleRate200 as OBCISampleRate200 };
    export { obciSampleRate2000 as OBCISampleRate2000 };
    export { obciSampleRate250 as OBCISampleRate250 };
    export { obciSampleRate25600 as OBCISampleRate25600 };
    export { obciSampleRate3200 as OBCISampleRate3200 };
    export { obciSampleRate400 as OBCISampleRate400 };
    export { obciSampleRate4000 as OBCISampleRate4000 };
    export { obciSampleRate500 as OBCISampleRate500 };
    export { obciSampleRate6400 as OBCISampleRate6400 };
    export { obciSampleRate800 as OBCISampleRate800 };
    export { obciSampleRate8000 as OBCISampleRate8000 };
    export { obciSampleNumberMax as OBCISampleNumberMax };
    export { obciPacketSize as OBCIPacketSize };
    export { obciPacketSizeBLECyton as OBCIPacketSizeBLECyton };
    export { obciPacketSizeBLERaw as OBCIPacketSizeBLERaw };
    export { obciByteStart as OBCIByteStart };
    export { obciByteStop as OBCIByteStop };
    export { errorInvalidByteLength as OBCIErrorInvalidByteLength };
    export { errorInvalidByteStart as OBCIErrorInvalidByteStart };
    export { errorInvalidByteStop as OBCIErrorInvalidByteStop };
    export { errorInvalidData as OBCIErrorInvalidData };
    export { errorInvalidType as OBCIErrorInvalidType };
    export { errorMissingRegisterSetting as OBCIErrorMissingRegisterSetting };
    export { errorMissingRequiredProperty as OBCIErrorMissingRequiredProperty };
    export { errorNobleAlreadyScanning as OBCIErrorNobleAlreadyScanning };
    export { errorNobleNotAlreadyScanning as OBCIErrorNobleNotAlreadyScanning };
    export { errorNobleNotInPoweredOnState as OBCIErrorNobleNotInPoweredOnState };
    export { errorTimeSyncIsNull as OBCIErrorTimeSyncIsNull };
    export { errorTimeSyncNoComma as OBCIErrorTimeSyncNoComma };
    export { errorUndefinedOrNullInput as OBCIErrorUndefinedOrNullInput };
    export { obciMasterBufferSize as OBCIMasterBufferSize };
    export { obciLeadOffDriveInAmps as OBCILeadOffDriveInAmps };
    export { obciLeadOffFrequencyHz as OBCILeadOffFrequencyHz };
    export { channelSetter as getChannelSetter };
    export { impedanceSetter as getImpedanceSetter };
    export { sampleRateSetter as getSampleRateSetter };
    export { boardModeSetter as getBoardModeSetter };
    export { obciWriteIntervalDelayMSLong as OBCIWriteIntervalDelayMSLong };
    export { obciWriteIntervalDelayMSNone as OBCIWriteIntervalDelayMSNone };
    export { obciWriteIntervalDelayMSShort as OBCIWriteIntervalDelayMSShort };
    export { obciSyncTimeSent as OBCISyncTimeSent };
    export { obciSyncTimeSet as OBCISyncTimeSet };
    export { obciRadioKey as OBCIRadioKey };
    export { obciRadioCmdChannelGet as OBCIRadioCmdChannelGet };
    export { obciRadioCmdChannelSet as OBCIRadioCmdChannelSet };
    export { obciRadioCmdChannelSetOverride as OBCIRadioCmdChannelSetOverride };
    export { obciRadioCmdPollTimeGet as OBCIRadioCmdPollTimeGet };
    export { obciRadioCmdPollTimeSet as OBCIRadioCmdPollTimeSet };
    export { obciRadioCmdBaudRateSetDefault as OBCIRadioCmdBaudRateSetDefault };
    export { obciRadioCmdBaudRateSetFast as OBCIRadioCmdBaudRateSetFast };
    export { obciRadioCmdSystemStatus as OBCIRadioCmdSystemStatus };
    export { obciImpedanceTextBad as OBCIImpedanceTextBad };
    export { obciImpedanceTextGood as OBCIImpedanceTextGood };
    export { obciImpedanceTextInit as OBCIImpedanceTextInit };
    export { obciImpedanceTextOk as OBCIImpedanceTextOk };
    export { obciImpedanceTextNone as OBCIImpedanceTextNone };
    export { obciImpedanceThresholdBadMax as OBCIImpedanceThresholdBadMax };
    export { obciImpedanceSeriesResistor as OBCIImpedanceSeriesResistor };
    export function getTextForRawImpedance(value: any): "none" | "bad" | "good" | "ok";
    export { obciSimulatorPortName as OBCISimulatorPortName };
    export { obciStreamPacketStandardAccel as OBCIStreamPacketStandardAccel };
    export { obciStreamPacketStandardRawAux as OBCIStreamPacketStandardRawAux };
    export { obciStreamPacketUserDefinedType as OBCIStreamPacketUserDefinedType };
    export { obciStreamPacketAccelTimeSyncSet as OBCIStreamPacketAccelTimeSyncSet };
    export { obciStreamPacketAccelTimeSynced as OBCIStreamPacketAccelTimeSynced };
    export { obciStreamPacketRawAuxTimeSyncSet as OBCIStreamPacketRawAuxTimeSyncSet };
    export { obciStreamPacketRawAuxTimeSynced as OBCIStreamPacketRawAuxTimeSynced };
    export { obciStreamPacketImpedance as OBCIStreamPacketImpedance };
    export { isNumber };
    export { isBoolean };
    export { isString };
    export { isUndefined };
    export { isNull };
    export { obciPacketPositionStartByte as OBCIPacketPositionStartByte };
    export { obciPacketPositionStopByte as OBCIPacketPositionStopByte };
    export { obciPacketPositionStartAux as OBCIPacketPositionStartAux };
    export { obciPacketPositionStopAux as OBCIPacketPositionStopAux };
    export { obciPacketPositionChannelDataStart as OBCIPacketPositionChannelDataStart };
    export { obciPacketPositionChannelDataStop as OBCIPacketPositionChannelDataStop };
    export { obciPacketPositionSampleNumber as OBCIPacketPositionSampleNumber };
    export { obciPacketPositionTimeSyncAuxStart as OBCIPacketPositionTimeSyncAuxStart };
    export { obciPacketPositionTimeSyncAuxStop as OBCIPacketPositionTimeSyncAuxStop };
    export { obciPacketPositionTimeSyncTimeStart as OBCIPacketPositionTimeSyncTimeStart };
    export { obciPacketPositionTimeSyncTimeStop as OBCIPacketPositionTimeSyncTimeStop };
    export { obciSimulatorLineNoiseHz60 as OBCISimulatorLineNoiseHz60 };
    export { obciSimulatorLineNoiseHz50 as OBCISimulatorLineNoiseHz50 };
    export { obciSimulatorLineNoiseNone as OBCISimulatorLineNoiseNone };
    export { obciSimulatorFragmentationRandom as OBCISimulatorFragmentationRandom };
    export { obciSimulatorFragmentationFullBuffers as OBCISimulatorFragmentationFullBuffers };
    export { obciSimulatorFragmentationOneByOne as OBCISimulatorFragmentationOneByOne };
    export { obciSimulatorFragmentationNone as OBCISimulatorFragmentationNone };
    export { obciFirmwareV1 as OBCIFirmwareV1 };
    export { obciFirmwareV2 as OBCIFirmwareV2 };
    export { obciFirmwareV3 as OBCIFirmwareV3 };
    export { obciAccelAxisX as OBCIAccelAxisX };
    export { obciAccelAxisY as OBCIAccelAxisY };
    export { obciAccelAxisZ as OBCIAccelAxisZ };
    export { obciStreamPacketTimeByteSize as OBCIStreamPacketTimeByteSize };
    export { obciParseDaisy as OBCIParseDaisy };
    export { obciParseFailure as OBCIParseFailure };
    export { obciParseFirmware as OBCIParseFirmware };
    export { obciParseEOT as OBCIParseEOT };
    export { obciParseSuccess as OBCIParseSuccess };
    export { obciParsingChannelSettings as OBCIParsingChannelSettings };
    export { obciParsingEOT as OBCIParsingEOT };
    export { obciParsingNormal as OBCIParsingNormal };
    export { obciParsingReset as OBCIParsingReset };
    export { obciParsingTimeSyncSent as OBCIParsingTimeSyncSent };
    export { obciTimeoutProcessBytes as OBCITimeoutProcessBytes };
    export { obciSimulatorRawAux as OBCISimulatorRawAux };
    export { obciSimulatorStandard as OBCISimulatorStandard };
    export { obciRadioChannelMax as OBCIRadioChannelMax };
    export { obciRadioChannelMin as OBCIRadioChannelMin };
    export { obciRadioPollTimeMax as OBCIRadioPollTimeMax };
    export { obciRadioPollTimeMin as OBCIRadioPollTimeMin };
    export { obciTimeSyncArraySize as OBCITimeSyncArraySize };
    export { obciTimeSyncMultiplierWithSyncConf as OBCITimeSyncMultiplierWithSyncConf };
    export { obciTimeSyncMultiplierWithoutSyncConf as OBCITimeSyncMultiplierWithoutSyncConf };
    export { obciTimeSyncThresholdTransFailureMS as OBCITimeSyncThresholdTransFailureMS };
    export { obciBoardModeSet as OBCIBoardModeSet };
    export { obciBoardModeCmdDefault as OBCIBoardModeCmdDefault };
    export { obciBoardModeCmdDebug as OBCIBoardModeCmdDebug };
    export { obciBoardModeCmdAnalog as OBCIBoardModeCmdAnalog };
    export { obciBoardModeCmdDigital as OBCIBoardModeCmdDigital };
    export { obciBoardModeCmdGetCur as OBCIBoardModeCmdGetCur };
    export { obciBoardModeAnalog as OBCIBoardModeAnalog };
    export { obciBoardModeDefault as OBCIBoardModeDefault };
    export { obciBoardModeDebug as OBCIBoardModeDebug };
    export { obciBoardModeDigital as OBCIBoardModeDigital };
    export { obciSampleRateSet as OBCISampleRateSet };
    export { obciSampleRateCmdCyton16000 as OBCISampleRateCmdCyton16000 };
    export { obciSampleRateCmdCyton8000 as OBCISampleRateCmdCyton8000 };
    export { obciSampleRateCmdCyton4000 as OBCISampleRateCmdCyton4000 };
    export { obciSampleRateCmdCyton2000 as OBCISampleRateCmdCyton2000 };
    export { obciSampleRateCmdCyton1000 as OBCISampleRateCmdCyton1000 };
    export { obciSampleRateCmdCyton500 as OBCISampleRateCmdCyton500 };
    export { obciSampleRateCmdCyton250 as OBCISampleRateCmdCyton250 };
    export { obciSampleRateCmdGang25600 as OBCISampleRateCmdGang25600 };
    export { obciSampleRateCmdGang12800 as OBCISampleRateCmdGang12800 };
    export { obciSampleRateCmdGang6400 as OBCISampleRateCmdGang6400 };
    export { obciSampleRateCmdGang3200 as OBCISampleRateCmdGang3200 };
    export { obciSampleRateCmdGang1600 as OBCISampleRateCmdGang1600 };
    export { obciSampleRateCmdGang800 as OBCISampleRateCmdGang800 };
    export { obciSampleRateCmdGang400 as OBCISampleRateCmdGang400 };
    export { obciSampleRateCmdGang200 as OBCISampleRateCmdGang200 };
    export { obciSampleRateCmdaGetCur as OBCISampleRateCmdGetCur };
    export { obciWifiAttach as OBCIWifiAttach };
    export { obciWifiRemove as OBCIWifiRemove };
    export { obciWifiReset as OBCIWifiReset };
    export { obciWifiStatus as OBCIWifiStatus };
    export { obciRadioBaudRateDefault as OBCIRadioBaudRateDefault };
    export { obciRadioBaudRateDefaultStr as OBCIRadioBaudRateDefaultStr };
    export { obciRadioBaudRateFast as OBCIRadioBaudRateFast };
    export { obciRadioBaudRateFastStr as OBCIRadioBaudRateFastStr };
    export { obciEmitterAccelerometer as OBCIEmitterAccelerometer };
    export { obciEmitterBlePoweredUp as OBCIEmitterBlePoweredUp };
    export { obciEmitterClose as OBCIEmitterClose };
    export { obciEmitterDroppedPacket as OBCIEmitterDroppedPacket };
    export { obciEmitterEot as OBCIEmitterEot };
    export { obciEmitterError as OBCIEmitterError };
    export { obciEmitterGanglionFound as OBCIEmitterGanglionFound };
    export { obciEmitterHardSet as OBCIEmitterHardSet };
    export { obciEmitterImpedance as OBCIEmitterImpedance };
    export { obciEmitterImpedanceArray as OBCIEmitterImpedanceArray };
    export { obciEmitterMessage as OBCIEmitterMessage };
    export { obciEmitterQuery as OBCIEmitterQuery };
    export { obciEmitterRawDataPacket as OBCIEmitterRawDataPacket };
    export { obciEmitterReady as OBCIEmitterReady };
    export { obciEmitterRFduino as OBCIEmitterRFduino };
    export { obciEmitterSample as OBCIEmitterSample };
    export { obciEmitterScanStopped as OBCIEmitterScanStopped };
    export { obciEmitterSynced as OBCIEmitterSynced };
    export { obciEmitterWifiShield as OBCIEmitterWifiShield };
    export { obciGanglionAccelAxisX as OBCIGanglionAccelAxisX };
    export { obciGanglionAccelAxisY as OBCIGanglionAccelAxisY };
    export { obciGanglionAccelAxisZ as OBCIGanglionAccelAxisZ };
    export { obciGanglionBleSearchTime as OBCIGanglionBleSearchTime };
    export { obciGanglionByteIdUncompressed as OBCIGanglionByteIdUncompressed };
    export { obciGanglionByteId18Bit as OBCIGanglionByteId18Bit };
    export { obciGanglionByteId19Bit as OBCIGanglionByteId19Bit };
    export { obciGanglionByteIdImpedanceChannel1 as OBCIGanglionByteIdImpedanceChannel1 };
    export { obciGanglionByteIdImpedanceChannel2 as OBCIGanglionByteIdImpedanceChannel2 };
    export { obciGanglionByteIdImpedanceChannel3 as OBCIGanglionByteIdImpedanceChannel3 };
    export { obciGanglionByteIdImpedanceChannel4 as OBCIGanglionByteIdImpedanceChannel4 };
    export { obciGanglionByteIdImpedanceChannelReference as OBCIGanglionByteIdImpedanceChannelReference };
    export { obciGanglionByteIdMultiPacket as OBCIGanglionByteIdMultiPacket };
    export { obciGanglionByteIdMultiPacketStop as OBCIGanglionByteIdMultiPacketStop };
    export { obciGanglionMCP3912Gain as OBCIGanglionMCP3912Gain };
    export { obciGanglionMCP3912Vref as OBCIGanglionMCP3912Vref };
    export { obciGanglionPacketSize as OBCIGanglionPacketSize };
    export { obciGanglionPacket18Bit as OBCIGanglionPacket18Bit };
    export { obciGanglionPacket19Bit as OBCIGanglionPacket19Bit };
    export { obciGanglionPrefix as OBCIGanglionPrefix };
    export { obciGanglionSamplesPerPacket as OBCIGanglionSamplesPerPacket };
    export { obciGanglionSyntheticDataEnable as OBCIGanglionSyntheticDataEnable };
    export { obciGanglionSyntheticDataDisable as OBCIGanglionSyntheticDataDisable };
    export { obciGanglionImpedanceStart as OBCIGanglionImpedanceStart };
    export { obciGanglionImpedanceStop as OBCIGanglionImpedanceStop };
    export { obciGanglionScaleFactorPerCountVolts as OBCIGanglionScaleFactorPerCountVolts };
    export { simbleeUuidService as SimbleeUuidService };
    export { simbleeUuidReceive as SimbleeUuidReceive };
    export { simbleeUuidSend as SimbleeUuidSend };
    export { simbleeUuidDisconnect as SimbleeUuidDisconnect };
    export { rfduinoUuidService as RFduinoUuidService };
    export { rfduinoUuidReceive as RFduinoUuidReceive };
    export { rfduinoUuidSend as RFduinoUuidSend };
    export { rfduinoUuidSendTwo as RFduinoUuidSendTwo };
    export { obciCytonBLESamplesPerPacket as OBCICytonBLESamplesPerPacket };
    export { obciGanglionAccelScaleFactor as OBCIGanglionAccelScaleFactor };
    export { obciNobleEmitterPeripheralConnect as OBCINobleEmitterPeripheralConnect };
    export { obciNobleEmitterPeripheralDisconnect as OBCINobleEmitterPeripheralDisconnect };
    export { obciNobleEmitterPeripheralDiscover as OBCINobleEmitterPeripheralDiscover };
    export { obciNobleEmitterPeripheralServicesDiscover as OBCINobleEmitterPeripheralServicesDiscover };
    export { obciNobleEmitterServiceCharacteristicsDiscover as OBCINobleEmitterServiceCharacteristicsDiscover };
    export { obciNobleEmitterServiceRead as OBCINobleEmitterServiceRead };
    export { obciNobleEmitterDiscover as OBCINobleEmitterDiscover };
    export { obciNobleEmitterScanStart as OBCINobleEmitterScanStart };
    export { obciNobleEmitterScanStop as OBCINobleEmitterScanStop };
    export { obciNobleEmitterStateChange as OBCINobleEmitterStateChange };
    export { obciNobleStatePoweredOn as OBCINobleStatePoweredOn };
    export { getPeripheralLocalNames };
    export { getPeripheralWithLocalName };
    export { getVersionNumber };
    export { isPeripheralGanglion };
    export { commandSampleRateForCmdCyton };
    export { commandSampleRateForCmdGanglion };
    export { commandBoardModeForMode };
    export { rawDataToSampleObjectDefault };
    export { obciProtocolBLE as OBCIProtocolBLE };
    export { obciProtocolSerial as OBCIProtocolSerial };
    export { obciProtocolWifi as OBCIProtocolWifi };
    export { obciRegisterQueryAccelerometerFirmwareV1 as OBCIRegisterQueryAccelerometerFirmwareV1 };
    export { obciRegisterQueryAccelerometerFirmwareV3 as OBCIRegisterQueryAccelerometerFirmwareV3 };
    export { obciRegisterQueryCyton as OBCIRegisterQueryCyton };
    export { obciRegisterQueryCytonDaisy as OBCIRegisterQueryCytonDaisy };
    export { obciRegisterQueryNameMISC1 as OBCIRegisterQueryNameMISC1 };
    export { obciRegisterQueryNameBIASSENSP as OBCIRegisterQueryNameBIASSENSP };
    export { obciRegisterQueryNameCHnSET as OBCIRegisterQueryNameCHnSET };
    export { obciRegisterQuerySizeCytonFirmwareV1 as OBCIRegisterQuerySizeCytonFirmwareV1 };
    export { obciRegisterQuerySizeCytonDaisyFirmwareV1 as OBCIRegisterQuerySizeCytonDaisyFirmwareV1 };
    export { obciRegisterQuerySizeCytonFirmwareV3 as OBCIRegisterQuerySizeCytonFirmwareV3 };
    export { obciRegisterQuerySizeCytonDaisyFirmwareV3 as OBCIRegisterQuerySizeCytonDaisyFirmwareV3 };
}
/** Turning channels off */
declare const obciChannelOff1: "1";
declare const obciChannelOff2: "2";
declare const obciChannelOff3: "3";
declare const obciChannelOff4: "4";
declare const obciChannelOff5: "5";
declare const obciChannelOff6: "6";
declare const obciChannelOff7: "7";
declare const obciChannelOff8: "8";
declare const obciChannelOff9: "q";
declare const obciChannelOff10: "w";
declare const obciChannelOff11: "e";
declare const obciChannelOff12: "r";
declare const obciChannelOff13: "t";
declare const obciChannelOff14: "y";
declare const obciChannelOff15: "u";
declare const obciChannelOff16: "i";
/** Turn channels on */
declare const obciChannelOn1: "!";
declare const obciChannelOn2: "@";
declare const obciChannelOn3: "#";
declare const obciChannelOn4: "$";
declare const obciChannelOn5: "%";
declare const obciChannelOn6: "^";
declare const obciChannelOn7: "&";
declare const obciChannelOn8: "*";
declare const obciChannelOn9: "Q";
declare const obciChannelOn10: "W";
declare const obciChannelOn11: "E";
declare const obciChannelOn12: "R";
declare const obciChannelOn13: "T";
declare const obciChannelOn14: "Y";
declare const obciChannelOn15: "U";
declare const obciChannelOn16: "I";
/** Test Signal Control Commands
* 1x - Voltage will be 1 * (VREFP - VREFN) / 2.4 mV
* 2x - Voltage will be 2 * (VREFP - VREFN) / 2.4 mV
*/
declare const obciTestSignalConnectToDC: "p";
declare const obciTestSignalConnectToGround: "0";
declare const obciTestSignalConnectToPulse1xFast: "=";
declare const obciTestSignalConnectToPulse1xSlow: "-";
declare const obciTestSignalConnectToPulse2xFast: "]";
declare const obciTestSignalConnectToPulse2xSlow: "[";
/** Channel Setting Commands */
declare const obciChannelCmdADCNormal: "0";
declare const obciChannelCmdADCShorted: "1";
declare const obciChannelCmdADCBiasDRP: "6";
declare const obciChannelCmdADCBiasDRN: "7";
declare const obciChannelCmdADCBiasMethod: "2";
declare const obciChannelCmdADCMVDD: "3";
declare const obciChannelCmdADCTemp: "4";
declare const obciChannelCmdADCTestSig: "5";
declare const obciChannelCmdBiasInclude: "1";
declare const obciChannelCmdBiasRemove: "0";
declare const obciChannelCmdChannel1: "1";
declare const obciChannelCmdChannel2: "2";
declare const obciChannelCmdChannel3: "3";
declare const obciChannelCmdChannel4: "4";
declare const obciChannelCmdChannel5: "5";
declare const obciChannelCmdChannel6: "6";
declare const obciChannelCmdChannel7: "7";
declare const obciChannelCmdChannel8: "8";
declare const obciChannelCmdChannel9: "Q";
declare const obciChannelCmdChannel10: "W";
declare const obciChannelCmdChannel11: "E";
declare const obciChannelCmdChannel12: "R";
declare const obciChannelCmdChannel13: "T";
declare const obciChannelCmdChannel14: "Y";
declare const obciChannelCmdChannel15: "U";
declare const obciChannelCmdChannel16: "I";
declare function commandChannelForCmd(channelNumber: any): Promise<any>;
declare const obciChannelCmdGain1: "0";
declare const obciChannelCmdGain2: "1";
declare const obciChannelCmdGain4: "2";
declare const obciChannelCmdGain6: "3";
declare const obciChannelCmdGain8: "4";
declare const obciChannelCmdGain12: "5";
declare const obciChannelCmdGain24: "6";
declare function commandForGain(gainSetting: any): Promise<any>;
/**
 * Get the gain
 * @param cmd {Number}
 * @returns {Number}
 */
declare function gainForCommand(cmd: number): number;
declare const obciChannelCmdLatch: "X";
declare const obciChannelCmdPowerOff: "1";
declare const obciChannelCmdPowerOn: "0";
declare const obciChannelCmdSet: "x";
declare const obciChannelCmdSRB1Connect: "1";
declare const obciChannelCmdSRB1Diconnect: "0";
declare const obciChannelCmdSRB2Connect: "1";
declare const obciChannelCmdSRB2Diconnect: "0";
/**
 * @typedef {Object} ChannelSettingsObject - See page 50 of the ads1299.pdf
 * @property {Number} channelNumber - The channel number of this object
 * @property {Boolean} powerDown - Power-down: - This boolean determines the channel power mode for the
 *                      corresponding channel. `false` for normal operation, channel is on, and `true` for channel
 *                      power-down, channel is off. (Default is `false`)
 * @property {Number} gain - PGA gain: This number determines the PGA gain setting. Can be either 1, 2, 4, 6, 8, 12, 24
 *                      (Default is 24)
 * @property {String} inputType - Channel input: This string is used to determine the channel input selection.
 *                      Can be:
 *                        'normal' - Normal electrode input (Default)
 *                        'shorted' - Input shorted (for offset or noise measurements)
 *                        'biasMethod' - Used in conjunction with BIAS_MEAS bit for BIAS measurements.
 *                        'mvdd' - MVDD for supply measurement
 *                        'temp' - Temperature sensor
 *                        'testsig' - Test signal
 *                        'biasDrp' - BIAS_DRP (positive electrode is the driver)
 *                        'biasDrn' - BIAS_DRN (negative electrode is the driver)
 * @property {Boolean} bias - BIAS: Is the channel included in the bias? If `true` or yes, this channel has both P
 *                      and N channels connected to the bias. (Default is `true`)
 * @property {Boolean} srb2 - SRB2 connection: This boolean determines the SRB2 connection for the corresponding
 *                      channel. `false` for open, not connected to channel, and `true` for closed, connected to the
 *                      channel. (Default is `true`)
 * @property {Boolean} srb1 - Stimulus, reference, and bias 1: This boolean connects the SRB2 to all 4, 6, or 8
 *                      channels inverting inputs. `false` when switches open, disconnected, and `true` when switches
 *                      closed, or connected. (Default is `false`)
 */
/**
 * Get an object of default board settings.
 * @param channelNumber
 * @returns {ChannelSettingsObject}
 */
declare function channelSettingsObjectDefault(channelNumber: any): ChannelSettingsObject;
/** Channel Setting Helper Strings */
declare const obciStringADCNormal: "normal";
declare const obciStringADCShorted: "shorted";
declare const obciStringADCBiasMethod: "biasMethod";
declare const obciStringADCMvdd: "mvdd";
declare const obciStringADCTemp: "temp";
declare const obciStringADCTestSig: "testSig";
declare const obciStringADCBiasDrp: "biasDrp";
declare const obciStringADCBiasDrn: "biasDrn";
declare function commandForADCString(adcString: any): Promise<any>;
/**
 * Returns the input type for the given command
 * @param cmd {Number} The command
 * @returns {String}
 */
declare function inputTypeForCommand(cmd: number): string;
/** Default Channel Settings */
declare const obciChannelDefaultAllSet: "d";
declare const obciChannelDefaultAllGet: "D";
/** LeadOff Impedance Commands */
declare const obciChannelImpedanceLatch: "Z";
declare const obciChannelImpedanceSet: "z";
declare const obciChannelImpedanceTestSignalApplied: "1";
declare const obciChannelImpedanceTestSignalAppliedNot: "0";
/** SD card Commands */
declare const obciSDLogForHour1: "G";
declare const obciSDLogForHour2: "H";
declare const obciSDLogForHour4: "J";
declare const obciSDLogForHour12: "K";
declare const obciSDLogForHour24: "L";
declare const obciSDLogForMin5: "A";
declare const obciSDLogForMin15: "S";
declare const obciSDLogForMin30: "F";
declare const obciSDLogForSec14: "a";
declare const obciSDLogStop: "j";
/** SD Card String Commands */
declare const obciStringSDHour1: "1hour";
declare const obciStringSDHour2: "2hour";
declare const obciStringSDHour4: "4hour";
declare const obciStringSDHour12: "12hour";
declare const obciStringSDHour24: "24hour";
declare const obciStringSDMin5: "5min";
declare const obciStringSDMin15: "15min";
declare const obciStringSDMin30: "30min";
declare const obciStringSDSec14: "14sec";
/** Stream Data Commands */
declare const obciStreamStart: "b";
declare const obciStreamStop: "s";
/** Accel enable/disable commands */
declare const obciAccelStart: "n";
declare const obciAccelStop: "N";
/** Miscellaneous */
declare const obciMiscQueryRegisterSettings: "?";
declare const obciMiscQueryRegisterSettingsChannel1: "CH1SET";
declare const obciMiscQueryRegisterSettingsChannel2: "CH2SET";
declare const obciMiscQueryRegisterSettingsChannel3: "CH3SET";
declare const obciMiscQueryRegisterSettingsChannel4: "CH4SET";
declare const obciMiscQueryRegisterSettingsChannel5: "CH5SET";
declare const obciMiscQueryRegisterSettingsChannel6: "CH6SET";
declare const obciMiscQueryRegisterSettingsChannel7: "CH7SET";
declare const obciMiscQueryRegisterSettingsChannel8: "CH8SET";
declare const obciMiscSoftReset: "v";
/** 16 Channel Commands */
declare const obciChannelMaxNumber8: "c";
declare const obciChannelMaxNumber16: "C";
declare const obciChannelMaxNumber8NoDaisyToRemove: "";
declare const obciChannelMaxNumber8SuccessDaisyRemoved: "daisy removed";
declare const obciChannelMaxNumber16DaisyAlreadyAttached: "16";
declare const obciChannelMaxNumber16DaisyAttached: "daisy attached16";
declare const obciChannelMaxNumber16NoDaisyAttached: "no daisy to attach!8";
/** 60Hz line filter */
declare const obciFilterDisable: "g";
declare const obciFilterEnable: "f";
/** Triggers */
declare const obciTrigger: "`";
/** Possible number of channels */
declare const obciNumberOfChannelsCyton: 8;
declare const obciNumberOfChannelsCytonBLE: 2;
declare const obciNumberOfChannelsDaisy: 16;
declare const obciNumberOfChannelsDefault: 8;
declare const obciNumberOfChannelsGanglion: 4;
/** Possible OpenBCI board types */
declare const obciBoardCyton: "cyton";
declare const obciBoardCytonBLE: "cytonBLE";
declare const obciBoardDaisy: "daisy";
declare const obciBoardDefault: "default";
declare const obciBoardGanglion: "ganglion";
declare const obciBoardNone: "none";
/** Possible Sample Rates */
declare const obciSampleRate1000: 1000;
declare const obciSampleRate125: 125;
declare const obciSampleRate12800: 12800;
declare const obciSampleRate1600: 1600;
declare const obciSampleRate16000: 16000;
declare const obciSampleRate200: 200;
declare const obciSampleRate2000: 2000;
declare const obciSampleRate250: 250;
declare const obciSampleRate25600: 25600;
declare const obciSampleRate3200: 3200;
declare const obciSampleRate400: 400;
declare const obciSampleRate4000: 4000;
declare const obciSampleRate500: 500;
declare const obciSampleRate6400: 6400;
declare const obciSampleRate800: 800;
declare const obciSampleRate8000: 8000;
/** Max sample number */
declare const obciSampleNumberMax: 255;
/** Packet Size */
declare const obciPacketSize: 33;
declare const obciPacketSizeBLECyton: 20;
declare const obciPacketSizeBLERaw: 12;
/** Notable Bytes */
declare const obciByteStart: 160;
declare const obciByteStop: 192;
/** Errors */
declare const errorInvalidByteLength: "Invalid Packet Byte Length";
declare const errorInvalidByteStart: "Invalid Start Byte";
declare const errorInvalidByteStop: "Invalid Stop Byte";
declare const errorInvalidData: "Invalid data - try again";
declare const errorInvalidType: "Invalid type - check comments for input type";
declare const errorMissingRegisterSetting: "Missing register setting";
declare const errorMissingRequiredProperty: "Missing property in JSON";
declare const errorNobleAlreadyScanning: "Scan already under way";
declare const errorNobleNotAlreadyScanning: "No scan started";
declare const errorNobleNotInPoweredOnState: "Please turn blue tooth on.";
declare const errorTimeSyncIsNull: "'this.sync.curSyncObj' must not be null";
declare const errorTimeSyncNoComma: "Missed the time sync sent confirmation. Try sync again";
declare const errorUndefinedOrNullInput: "Undefined or Null Input";
/** Max Master Buffer Size */
declare const obciMasterBufferSize: 4096;
/** Impedance Calculation Variables */
declare const obciLeadOffDriveInAmps: 6e-9;
declare const obciLeadOffFrequencyHz: 31.5;
/**
* @description To add a usability abstraction layer above channel setting commands. Due to the
*          extensive and highly specific nature of the channel setting command chain, this
*          will take several different human readable inputs and merge to one array filled
*          with the correct commands, prime for sending directly to the write command.
* @param channelNumber - Number (1-16)
* @param powerDown - Bool (true -> OFF, false -> ON (default))
*          turns the channel on or off
* @param gain - Number (1,2,4,6,8,12,24(default))
*          sets the gain for the channel
* @param inputType - String (normal,shorted,biasMethod,mvdd,temp,testsig,biasDrp,biasDrn)
*          selects the ADC channel input source
* @param bias - Bool (true -> Include in bias (default), false -> remove from bias)
*          selects to include the channel input in bias generation
* @param srb2 - Bool (true -> Connect this input to SRB2 (default),
*                     false -> Disconnect this input from SRB2)
*          Select to connect (true) this channel's P input to the SRB2 pin. This closes
*              a switch between P input and SRB2 for the given channel, and allows the
*              P input to also remain connected to the ADC.
* @param srb1 - Bool (true -> connect all N inputs to SRB1,
*                     false -> Disconnect all N inputs from SRB1 (default))
*          Select to connect (true) all channels' N inputs to SRB1. This effects all pins,
*              and disconnects all N inputs from the ADC.
* @returns {Promise} resolves {commandArray: array of commands to be sent,
                               newChannelSettingsObject: an updated channel settings object
                                                         to be stored in openBCIBoard.channelSettingsArray},
                     rejects on bad input or no board
*/
declare function channelSetter(channelNumber: any, powerDown: any, gain: any, inputType: any, bias: any, srb2: any, srb1: any): Promise<any>;
/**
* @description To build the array of commands to send to the board to measure impedance
* @param channelNumber
* @param pInputApplied - Bool (true -> Test Signal Applied, false -> Test Signal Not Applied (default))
*          applies the test signal to the P input
* @param nInputApplied - Bool (true -> Test Signal Applied, false -> Test Signal Not Applied (default))
*          applies the test signal to the N input
* @returns {Promise} - fulfilled will contain an array of comamnds
*/
declare function impedanceSetter(channelNumber: any, pInputApplied: any, nInputApplied: any): Promise<any>;
/**
 * @description To build the array of commands to send to the board to set the sample rate
 * @param boardType {String} - The type of board, either cyton or ganglion. Default is Cyton
 * @param sampleRate {Number} - The sample rate you want to set to. Please see docs for possible sample rates.
 * @returns {Promise} - fulfilled will contain an array of commands
 */
declare function sampleRateSetter(boardType: string, sampleRate: number): Promise<any>;
/**
 * @description To build the array of commands to send to the board t
 * @param boardMode {String} - The type of board mode:
 *  `default`: Board will use Accel
 *  `
 * @returns {Promise} - fulfilled will contain an array of commands
 */
declare function boardModeSetter(boardMode: string): Promise<any>;
/** Command send delay */
declare const obciWriteIntervalDelayMSLong: 50;
declare const obciWriteIntervalDelayMSNone: 0;
declare const obciWriteIntervalDelayMSShort: 10;
declare const obciSyncTimeSent: ",";
/** Sync Clocks */
declare const obciSyncTimeSet: "<";
/** Radio Key */
declare const obciRadioKey: 240;
/** Radio Commands */
declare const obciRadioCmdChannelGet: 0;
declare const obciRadioCmdChannelSet: 1;
declare const obciRadioCmdChannelSetOverride: 2;
declare const obciRadioCmdPollTimeGet: 3;
declare const obciRadioCmdPollTimeSet: 4;
declare const obciRadioCmdBaudRateSetDefault: 5;
declare const obciRadioCmdBaudRateSetFast: 6;
declare const obciRadioCmdSystemStatus: 7;
/** Impedance */
declare const obciImpedanceTextBad: "bad";
declare const obciImpedanceTextGood: "good";
declare const obciImpedanceTextInit: "init";
declare const obciImpedanceTextOk: "ok";
declare const obciImpedanceTextNone: "none";
declare const obciImpedanceThresholdBadMax: 1000000;
declare const obciImpedanceSeriesResistor: 2200;
/** Simulator */
declare const obciSimulatorPortName: "OpenBCISimulator";
/**
* Stream packet types/codes
*/
declare const obciStreamPacketStandardAccel: 0;
declare const obciStreamPacketStandardRawAux: 1;
declare const obciStreamPacketUserDefinedType: 2;
declare const obciStreamPacketAccelTimeSyncSet: 3;
declare const obciStreamPacketAccelTimeSynced: 4;
declare const obciStreamPacketRawAuxTimeSyncSet: 5;
declare const obciStreamPacketRawAuxTimeSynced: 6;
declare const obciStreamPacketImpedance: 7;
declare function isNumber(input: any): boolean;
declare function isBoolean(input: any): boolean;
declare function isString(input: any): boolean;
declare function isUndefined(input: any): boolean;
declare function isNull(input: any): boolean;
declare const obciPacketPositionStartByte: 0;
declare const obciPacketPositionStopByte: 32;
declare const obciPacketPositionStartAux: 26;
declare const obciPacketPositionStopAux: 31;
/** OpenBCI V3 Standard Packet Positions */
/**
* 0:[startByte] | 1:[sampleNumber] | 2:[Channel-1.1] | 3:[Channel-1.2] | 4:[Channel-1.3] | 5:[Channel-2.1] | 6:[Channel-2.2] | 7:[Channel-2.3] | 8:[Channel-3.1] | 9:[Channel-3.2] | 10:[Channel-3.3] | 11:[Channel-4.1] | 12:[Channel-4.2] | 13:[Channel-4.3] | 14:[Channel-5.1] | 15:[Channel-5.2] | 16:[Channel-5.3] | 17:[Channel-6.1] | 18:[Channel-6.2] | 19:[Channel-6.3] | 20:[Channel-7.1] | 21:[Channel-7.2] | 22:[Channel-7.3] | 23:[Channel-8.1] | 24:[Channel-8.2] | 25:[Channel-8.3] | 26:[Aux-1.1] | 27:[Aux-1.2] | 28:[Aux-2.1] | 29:[Aux-2.2] | 30:[Aux-3.1] | 31:[Aux-3.2] | 32:StopByte
*/
declare const obciPacketPositionChannelDataStart: 2;
declare const obciPacketPositionChannelDataStop: 25;
declare const obciPacketPositionSampleNumber: 1;
declare const obciPacketPositionTimeSyncAuxStart: 26;
declare const obciPacketPositionTimeSyncAuxStop: 28;
declare const obciPacketPositionTimeSyncTimeStart: 28;
declare const obciPacketPositionTimeSyncTimeStop: 32;
/** Possible Simulator Line Noise injections */
declare const obciSimulatorLineNoiseHz60: "60Hz";
declare const obciSimulatorLineNoiseHz50: "50Hz";
declare const obciSimulatorLineNoiseNone: "none";
/** Possible Simulator Fragmentation modes */
declare const obciSimulatorFragmentationRandom: "random";
declare const obciSimulatorFragmentationFullBuffers: "fullBuffers";
declare const obciSimulatorFragmentationOneByOne: "oneByOne";
declare const obciSimulatorFragmentationNone: "none";
/** Firmware version indicator */
declare const obciFirmwareV1: "v1";
declare const obciFirmwareV2: "v2";
declare const obciFirmwareV3: "v3";
/** Time synced with accel packet */
declare const obciAccelAxisX: 7;
declare const obciAccelAxisY: 8;
declare const obciAccelAxisZ: 9;
/** Time from board */
declare const obciStreamPacketTimeByteSize: 4;
/** Parse */
declare const obciParseDaisy: "Daisy";
declare const obciParseFailure: "Failure";
declare const obciParseFirmware: "v2";
declare const obciParseEOT: "$$$";
declare const obciParseSuccess: "Success";
/** Used in parsing incoming serial data */
declare const obciParsingChannelSettings: 2;
declare const obciParsingEOT: 4;
declare const obciParsingNormal: 3;
declare const obciParsingReset: 0;
declare const obciParsingTimeSyncSent: 1;
/** Timeouts */
declare const obciTimeoutProcessBytes: 500;
/** Simulator Board Configurations */
declare const obciSimulatorRawAux: "rawAux";
declare const obciSimulatorStandard: "standard";
/** OpenBCI Radio Limits */
declare const obciRadioChannelMax: 25;
declare const obciRadioChannelMin: 1;
declare const obciRadioPollTimeMax: 255;
declare const obciRadioPollTimeMin: 0;
/** Time sync stuff */
declare const obciTimeSyncArraySize: 10;
declare const obciTimeSyncMultiplierWithSyncConf: 0.9;
declare const obciTimeSyncMultiplierWithoutSyncConf: 0.75;
declare const obciTimeSyncThresholdTransFailureMS: 10;
/** Set board mode */
declare const obciBoardModeSet: "/";
declare const obciBoardModeCmdDefault: "0";
declare const obciBoardModeCmdDebug: "1";
declare const obciBoardModeCmdAnalog: "2";
declare const obciBoardModeCmdDigital: "3";
declare const obciBoardModeCmdGetCur: "/";
declare const obciBoardModeAnalog: "analog";
declare const obciBoardModeDefault: "default";
declare const obciBoardModeDebug: "debug";
declare const obciBoardModeDigital: "digital";
/** Set sample rate */
declare const obciSampleRateSet: "~";
declare const obciSampleRateCmdCyton16000: "0";
declare const obciSampleRateCmdCyton8000: "1";
declare const obciSampleRateCmdCyton4000: "2";
declare const obciSampleRateCmdCyton2000: "3";
declare const obciSampleRateCmdCyton1000: "4";
declare const obciSampleRateCmdCyton500: "5";
declare const obciSampleRateCmdCyton250: "6";
declare const obciSampleRateCmdGang25600: "0";
declare const obciSampleRateCmdGang12800: "1";
declare const obciSampleRateCmdGang6400: "2";
declare const obciSampleRateCmdGang3200: "3";
declare const obciSampleRateCmdGang1600: "4";
declare const obciSampleRateCmdGang800: "5";
declare const obciSampleRateCmdGang400: "6";
declare const obciSampleRateCmdGang200: "7";
declare const obciSampleRateCmdaGetCur: "~";
/** Wifi Stuff */
declare const obciWifiAttach: "{";
declare const obciWifiRemove: "}";
declare const obciWifiReset: ";";
declare const obciWifiStatus: ":";
/** Baud Rates */
declare const obciRadioBaudRateDefault: 115200;
declare const obciRadioBaudRateDefaultStr: "default";
declare const obciRadioBaudRateFast: 230400;
declare const obciRadioBaudRateFastStr: "fast";
/** Emitters */
declare const obciEmitterAccelerometer: "accelerometer";
declare const obciEmitterBlePoweredUp: "blePoweredOn";
declare const obciEmitterClose: "close";
declare const obciEmitterDroppedPacket: "droppedPacket";
declare const obciEmitterEot: "eot";
declare const obciEmitterError: "error";
declare const obciEmitterGanglionFound: "ganglionFound";
declare const obciEmitterHardSet: "hardSet";
declare const obciEmitterImpedance: "impedance";
declare const obciEmitterImpedanceArray: "impedanceArray";
declare const obciEmitterMessage: "message";
declare const obciEmitterQuery: "query";
declare const obciEmitterRawDataPacket: "rawDataPacket";
declare const obciEmitterReady: "ready";
declare const obciEmitterRFduino: "rfduino";
declare const obciEmitterSample: "sample";
declare const obciEmitterScanStopped: "scanStopped";
declare const obciEmitterSynced: "synced";
declare const obciEmitterWifiShield: "wifiShield";
/** Accel packets */
declare const obciGanglionAccelAxisX: 1;
declare const obciGanglionAccelAxisY: 2;
declare const obciGanglionAccelAxisZ: 3;
/** Ganglion */
declare const obciGanglionBleSearchTime: 20000;
declare const obciGanglionByteIdUncompressed: 0;
declare namespace obciGanglionByteId18Bit {
    const max: number;
    const min: number;
}
declare namespace obciGanglionByteId19Bit {
    const max_1: number;
    export { max_1 as max };
    const min_1: number;
    export { min_1 as min };
}
declare const obciGanglionByteIdImpedanceChannel1: 201;
declare const obciGanglionByteIdImpedanceChannel2: 202;
declare const obciGanglionByteIdImpedanceChannel3: 203;
declare const obciGanglionByteIdImpedanceChannel4: 204;
declare const obciGanglionByteIdImpedanceChannelReference: 205;
declare const obciGanglionByteIdMultiPacket: 206;
declare const obciGanglionByteIdMultiPacketStop: 207;
declare const obciGanglionMCP3912Gain: 51;
declare const obciGanglionMCP3912Vref: 1.2;
declare const obciGanglionPacketSize: 20;
declare namespace obciGanglionPacket18Bit {
    const auxByte: number;
    const byteId: number;
    const dataStart: number;
    const dataStop: number;
}
declare namespace obciGanglionPacket19Bit {
    const byteId_1: number;
    export { byteId_1 as byteId };
    const dataStart_1: number;
    export { dataStart_1 as dataStart };
    const dataStop_1: number;
    export { dataStop_1 as dataStop };
}
declare const obciGanglionPrefix: "Ganglion";
declare const obciGanglionSamplesPerPacket: 2;
declare const obciGanglionSyntheticDataEnable: "t";
declare const obciGanglionSyntheticDataDisable: "T";
declare const obciGanglionImpedanceStart: "z";
declare const obciGanglionImpedanceStop: "Z";
declare const obciGanglionScaleFactorPerCountVolts: number;
/** Simblee */
declare const simbleeUuidService: "fe84";
declare const simbleeUuidReceive: "2d30c082f39f4ce6923f3484ea480596";
declare const simbleeUuidSend: "2d30c083f39f4ce6923f3484ea480596";
declare const simbleeUuidDisconnect: "2d30c084f39f4ce6923f3484ea480596";
/** RFduino BLE UUID */
declare const rfduinoUuidService: "2220";
declare const rfduinoUuidReceive: "2221";
declare const rfduinoUuidSend: "2222";
declare const rfduinoUuidSendTwo: "2223";
/** Cyton BLE */
declare const obciCytonBLESamplesPerPacket: 3;
/** Accel scale factor */
declare const obciGanglionAccelScaleFactor: 0.016;
/** Noble */
declare const obciNobleEmitterPeripheralConnect: "connect";
declare const obciNobleEmitterPeripheralDisconnect: "disconnect";
declare const obciNobleEmitterPeripheralDiscover: "discover";
declare const obciNobleEmitterPeripheralServicesDiscover: "servicesDiscover";
declare const obciNobleEmitterServiceCharacteristicsDiscover: "characteristicsDiscover";
declare const obciNobleEmitterServiceRead: "read";
declare const obciNobleEmitterDiscover: "discover";
declare const obciNobleEmitterScanStart: "scanStart";
declare const obciNobleEmitterScanStop: "scanStop";
declare const obciNobleEmitterStateChange: "stateChange";
declare const obciNobleStatePoweredOn: "poweredOn";
/**
 * @description Get a list of local names from an array of peripherals
 */
declare function getPeripheralLocalNames(pArray: any): Promise<any>;
/**
 * @description Get a peripheral with a local name
 * @param `pArray` {Array} - Array of peripherals
 * @param `localName` {String} - The local name of the BLE device.
 */
declare function getPeripheralWithLocalName(pArray: any[], localName: string): Promise<any>;
/**
 * @description This function is used to extract the major version from a github
 *  version string.
 * @returns {Number} The major version number
 */
declare function getVersionNumber(versionStr: any): number;
/**
 * @description Very safely checks to see if the noble peripheral is a
 *  ganglion by way of checking the local name property.
 */
declare function isPeripheralGanglion(peripheral: any): boolean;
/**
 * Get's the command for sample rate Cyton
 * @param sampleRate {Number} - The desired sample rate
 * @return {Promise}
 */
declare function commandSampleRateForCmdCyton(sampleRate: number): Promise<any>;
/**
 * Get's the command for sample rate Cyton
 * @param sampleRate {Number} - The desired sample rate
 * @return {Promise}
 */
declare function commandSampleRateForCmdGanglion(sampleRate: number): Promise<any>;
/**
 * Get's the command for sample rate Cyton
 * @param boardMode {String} - The desired sample rate
 * @return {Promise}
 */
declare function commandBoardModeForMode(boardMode: string): Promise<any>;
/**
 * @description RawDataToSample default object creation
 * @param numChannels {Number} - The number of channels
 * @returns {RawDataToSample} - A new object
 */
declare function rawDataToSampleObjectDefault(numChannels: number): RawDataToSample;
/** Protocols */
declare const obciProtocolBLE: "ble";
declare const obciProtocolSerial: "serial";
declare const obciProtocolWifi: "wifi";
/** Register Query on Cyton */
declare const obciRegisterQueryAccelerometerFirmwareV1: "\nLIS3DH Registers\n0x07.0\n0x08.0\n0x09.0\n0x0A.0\n0x0B.0\n0x0C.0\n0x0D.0\n0x0E.0\n0x0F.33\n\n0x1F.0\n0x20.8\n0x21.0\n0x22.0\n0x23.18\n0x24.0\n0x25.0\n0x26.0\n0x27.0\n0x28.0\n0x29.0\n0x2A.0\n0x2B.0\n0x2C.0\n0x2D.0\n0x2E.0\n0x2F.20\n0x30.0\n0x31.0\n0x32.0\n0x33.0\n\n0x38.0\n0x39.0\n0x3A.0\n0x3B.0\n0x3C.0\n0x3D.0\n";
declare const obciRegisterQueryAccelerometerFirmwareV3: "\nLIS3DH Registers\n0x07 00\n0x08 00\n0x09 00\n0x0A 00\n0x0B 00\n0x0C 00\n0x0D 00\n0x0E 00\n0x0F 33\n\n0x1F 00\n0x20 08\n0x21 00\n0x22 00\n0x23 18\n0x24 00\n0x25 00\n0x26 00\n0x27 00\n0x28 00\n0x29 00\n0x2A 00\n0x2B 00\n0x2C 00\n0x2D 00\n0x2E 00\n0x2F 20\n0x30 00\n0x31 00\n0x32 00\n0x33 00\n\n0x38 00\n0x39 00\n0x3A 00\n0x3B 00\n0x3C 00\n0x3D 00\n";
declare const obciRegisterQueryCyton: "\nBoard ADS Registers\nADS_ID, 00, 3E, 0, 0, 1, 1, 1, 1, 1, 0\nCONFIG1, 01, 96, 1, 0, 0, 1, 0, 1, 1, 0\nCONFIG2, 02, C0, 1, 1, 0, 0, 0, 0, 0, 0\nCONFIG3, 03, EC, 1, 1, 1, 0, 1, 1, 0, 0\nLOFF, 04, 02, 0, 0, 0, 0, 0, 0, 1, 0\nCH1SET, 05, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH2SET, 06, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH3SET, 07, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH4SET, 08, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH5SET, 09, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH6SET, 0A, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH7SET, 0B, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH8SET, 0C, 68, 0, 1, 1, 0, 1, 0, 0, 0\nBIAS_SENSP, 0D, FF, 1, 1, 1, 1, 1, 1, 1, 1\nBIAS_SENSN, 0E, FF, 1, 1, 1, 1, 1, 1, 1, 1\nLOFF_SENSP, 0F, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_SENSN, 10, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_FLIP, 11, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATP, 12, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATN, 13, 00, 0, 0, 0, 0, 0, 0, 0, 0\nGPIO, 14, 0F, 0, 0, 0, 0, 1, 1, 1, 1\nMISC1, 15, 00, 0, 0, 0, 0, 0, 0, 0, 0\nMISC2, 16, 00, 0, 0, 0, 0, 0, 0, 0, 0\nCONFIG4, 17, 00, 0, 0, 0, 0, 0, 0, 0, 0\n";
declare const obciRegisterQueryCytonDaisy: "\nDaisy ADS Registers\nADS_ID, 00, 3E, 0, 0, 1, 1, 1, 1, 1, 0\nCONFIG1, 01, 96, 1, 0, 0, 1, 0, 1, 1, 0\nCONFIG2, 02, C0, 1, 1, 0, 0, 0, 0, 0, 0\nCONFIG3, 03, EC, 1, 1, 1, 0, 1, 1, 0, 0\nLOFF, 04, 02, 0, 0, 0, 0, 0, 0, 1, 0\nCH1SET, 05, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH2SET, 06, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH3SET, 07, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH4SET, 08, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH5SET, 09, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH6SET, 0A, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH7SET, 0B, 68, 0, 1, 1, 0, 1, 0, 0, 0\nCH8SET, 0C, 68, 0, 1, 1, 0, 1, 0, 0, 0\nBIAS_SENSP, 0D, FF, 1, 1, 1, 1, 1, 1, 1, 1\nBIAS_SENSN, 0E, FF, 1, 1, 1, 1, 1, 1, 1, 1\nLOFF_SENSP, 0F, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_SENSN, 10, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_FLIP, 11, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATP, 12, 00, 0, 0, 0, 0, 0, 0, 0, 0\nLOFF_STATN, 13, 00, 0, 0, 0, 0, 0, 0, 0, 0\nGPIO, 14, 0F, 0, 0, 0, 0, 1, 1, 1, 1\nMISC1, 15, 00, 0, 0, 0, 0, 0, 0, 0, 0\nMISC2, 16, 00, 0, 0, 0, 0, 0, 0, 0, 0\nCONFIG4, 17, 00, 0, 0, 0, 0, 0, 0, 0, 0\n";
declare const obciRegisterQueryNameMISC1: "MISC1";
declare const obciRegisterQueryNameBIASSENSP: "BIAS_SENSP";
declare const obciRegisterQueryNameCHnSET: string[];
declare const obciRegisterQuerySizeCytonFirmwareV1: number;
declare const obciRegisterQuerySizeCytonDaisyFirmwareV1: number;
declare const obciRegisterQuerySizeCytonFirmwareV3: number;
declare const obciRegisterQuerySizeCytonDaisyFirmwareV3: number;
