import { database, get, child, ref, set, update, remove } from './database.js';
import { deviceId } from './id.js';

let btnBlue = document.getElementById('btnBlue')
let btnRed = document.getElementById('btnRed')

func()

btnBlue.onclick = async () => {
    let votes = await get(child(ref(database), 'votes')).then(snapshot => { return snapshot.val() })
    let req = await voted()
    if (req) {
        alert('Cannot Vote twice')
    } else {
        set(ref(database, 'votes'), {
            blue: votes.blue + 1,
            red: votes.red
        })
        set(ref(database, 'userIds/ ' + deviceId+'/voted'), true)
        func()
    }
}
btnRed.onclick = async () => {
    let votes = await get(child(ref(database), 'votes')).then(snapshot => { return snapshot.val() })
    let req = await voted()
    if (req) {
        alert('Cannot Vote twice')
    } else {
        set(ref(database, 'votes'), {
            blue: votes.blue,
            red: votes.red + 1
        })
        set(ref(database, 'userIds/ ' + deviceId+'/voted'), true)
        func()
    }

}
async function func() {
    let votes = await get(child(ref(database), 'votes')).then(snapshot => { return snapshot.val() })
    if (votes == null) {
        votes = {
            blue: 0,
            red: 0
        }
        set(ref(database, 'votes'), {
            blue: 0,
            red: 0
        })
    } else {
        document.getElementById('pBlue').innerHTML = `Blue Votes: ${votes.blue}`
        document.getElementById('pRed').innerHTML = `Red Votes: ${votes.red}`
    }
}

async function voted() {
    let voted = await get(child(ref(database), 'userIds/ ' + deviceId)).then(snapshot => { return snapshot.val().voted })
    return voted
}