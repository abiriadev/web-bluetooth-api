const connect = async () => {
    const device = await navigator.bluetooth.requestDevice({
        // filters: [
        //     {
        //         // name: "JBL GO"
        //         // services: ['battery_service', 0x184E]
        //     }
        // ],
        acceptAllDevices: true
        // optionalServices: ['battery_service']
    });

    console.log(device.name)
    // alert(res)

    const server = await device.gatt.connect();

    console.log(server)

    const service = await server.getPrimaryService('battery_service')

    const characteristic = await service.getCharacteristic('battery_level');

    const value = await characteristic.readValue();

    console.log(`Battery percentage is ${value.getUint8(0)}`);
    // })
}

const btn = document.querySelector('button');

btn.addEventListener('click', connect)
