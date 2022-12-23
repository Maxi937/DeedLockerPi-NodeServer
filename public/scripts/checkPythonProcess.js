'use strict'

async function checkIfRfidUpdated(boxId) {
    console.log("Im here")
    let result = await fetch(`http://192.168.1.13:3000/deedlockerPi/checkifRfidUpdated/${boxId}`, { mozSystem: true })
    result = await result.json()
    console.log(result.deedBox.rfid)
}


