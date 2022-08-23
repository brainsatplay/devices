export declare const device: {
    label: string;
    device: typeof import("./ganglion").Ganglion;
    onconnect: (dataDevice: any) => Promise<void>;
    protocols: string[];
};
export { Ganglion } from './ganglion';
