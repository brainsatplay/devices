import * as ganglion from './device.utils'

export const device =  {
    // Generic 
    label: 'ganglion', 
    device: ganglion.device,
    onconnect: ganglion.onconnect,
    protocols: ['bluetooth'],
}

export {Ganglion} from './ganglion'