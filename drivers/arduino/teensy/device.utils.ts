
export const ondata = (newline:string) => {

    console.log("[ TEENSY ]", newline);

    return [newline]
}

let encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");
export const encode = (msg:any, _:string) => {
    return encoder.encode(msg)
}

export const decode = (msg:any, _:string) => {
    return decoder.decode(msg)
}