
// -------------------------------------------------------
// Synthetic Data Generation
// -------------------------------------------------------


export const ondata = (data:any) => {
   return {heartrate: data}
}


// -------------------------------------------------------
// Template Callbacks
// -------------------------------------------------------

// export const onconnect = async (device:any) => {


// }

// export const ondisconnect = async (device:any) => {
//     looping = false
//     console.log('Device disconnected', device)
// }

export const onerror = console.error

// // -------------------------------------------------------
// // Template Encoder / Decoder Specifications
// // -------------------------------------------------------

// let encoder = new TextEncoder();
// const decoder = new TextDecoder("utf-8");
// export const encode = (msg:any, _:string) => {
//     return encoder.encode(msg)
// }

export const decode = (msg:any, _:string) => {
        const heartrate = msg.getInt8(1)
        return heartrate
}
