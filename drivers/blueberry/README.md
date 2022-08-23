## blueberry
 A Blueberry Driver for the Data Capture and Streams API

 > **Note:** src/blueberry.js has a fully-functioning driver that we are progressively converting into a DataStreams-native format

## Getting Started 
After you've installed Node and NPM, install all the project dependencies: 
```bash
npm install
```

Now modify the `src` files to interface with your specific hardware.

### Run
The following command will create a `dist` folder with your driver files **and serve the included `index.html` file to http://localhost:1234**.

```bash
npm start
```

This links the latest version of the Data Capture and Streams API to ensure compatibility.

### Publish
If your device is working properly, the following command will publish it to NPM.
```bash
npm publish --access public
```

## Use
In order to use your device in other projects, you'll have to link it using one of the following options:

#### Browser
```javascript
<script src="https://cdn.jsdelivr.net/npm/@brainsatplay/blueberry"></script>
```

#### Module

```javascript
import device from `https://cdn.jsdelivr.net/npm/@brainsatplay/blueberry`
```

Have fun with your data!

## Known Issues
1. This repository only grabs short wave data available on both v2020 and v2021 Blueberry devices.