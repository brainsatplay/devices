
// -------------------------------------------------------
// Synthetic Data Generation
// -------------------------------------------------------


export const ondata = (data:any) => {
    // stateA = {
    //   fNIRS: data.fNIRS
    // }

   return data
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

        const offset = 0
        const o: {[x:string]:any} = {}
        // var this_ts = Date.now();
        // var sample_index = msg.getUint8(0+offset)
        // var packet_index = msg.getUint8(1+offset)
        var d1 = msg.getInt32(2+offset);
        var d2 = msg.getInt32(6+offset);
        var d3 = msg.getInt32(10+offset);
        o["740nm_10mm"] = d1
        o["880nm_10mm"] = d2
        o["880nm_850nm_10mm"] = d3
        // o["timestamps"] = this_ts
        // o["sample_indices"] = sample_index;
        // o["packet_indices"] = packet_index;
        // o["740nm_27mm"] = o["c1"][curr_match_long])
        // o["880nm_27mm"] = o["c2"][curr_match_long])
        // o["880nm_850nm_27mm"] = o["c3"][curr_match_long])

        return o
}