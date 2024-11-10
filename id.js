import { database, get, child, ref, set, update, remove } from "./database.js";

let deviceId = '';
deviceId = localStorage.getItem('deviceId');

if (deviceId == null) {
    deviceId = ''
    let characters = 'abcdefghijk12345lmnopqrstuvwxyzABCDEFGHIJ67890KLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 20; i++) {
        deviceId += characters[Math.floor(Math.random() * 60 + 1)]
    }
    localStorage.setItem('deviceId', deviceId);
    set(ref(database, 'userIds/ '+deviceId+'/'), {
        id: deviceId,
        voted: false
    })
}
console.log(deviceId)
export { deviceId }