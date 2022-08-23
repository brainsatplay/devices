# ganglion
Ganglion Driver for browser (and for the Data Capture and Streams API)

> **Note:** Includes a simplified version of the [ganglion-ble](https://github.com/neurosity/ganglion-ble) library. Still retains rxjs dependency.

## Installation

### Using with a Bundler
```bash
npm install ganglion-browser-min
```

### Script Tag
```html 
<script src="https://cdn.jsdelivr.net/npm/ganglion-browser-min@1.0.1/dist/index.js"></script>
```

### ES6 Import
```javascript 
import { device } from "https://cdn.jsdelivr.net/npm/ganglion-browser-min@1.0.1//dist/index.js"
```


Browser usage:
```html


<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>  
        <script src="https://cdn.jsdelivr.net/npm/ganglion-browser-min@1.0.1/dist/index.js">
        </script>
        <button id="ganglion">Connect Ganglion</button>
        <script>
            const ganglion = new Ganglion();

            console.log('Ganglion: ',ganglion);

            let ondata = (data) => { 
                console.log(data);
            }

            document.getElementById('ganglion').onclick = () => {
                ganglion.connect(ondata); //otherwise it uses rxjs observables on ganglion.stream
            };

        </script>
    </body>
</html>
        

```