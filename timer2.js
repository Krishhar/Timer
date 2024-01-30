const task = document.getElementById('task')
const desc = document.getElementById('desc')
const table = document.getElementById('tab')

const toggle = document.getElementById('stt')

const hr = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

let m = 0, s = 0, h = 0
let stid

// function addTask(params) {

// }

function timer() {
    if (stt.textContent === 'start') {
        stt.textContent = 'stop'
        toggle.style.setProperty('background-color', 'red')
        stid = setInterval(function () {
            if (s >= 60) {
                s = 0
                min.textContent = (++m).toString().padStart(2, '0')
            }
            else if (m >= 60) {
                m = 0
                h++
                hrs.textContent = (h).toString().padStart(2, '0')
            }
            sec.textContent = (s++).toString().padStart(2, '0')
        }, 1000)
    }

    else if (stt.textContent === 'stop') {
        table.innerHTML += "<tr><td>" + task.value + "</td><td>" + desc.value + "</td><td>" + h + ":" + m + ":" + s + "</td></tr>"
        task.value = ""
        desc.value = ""
        clearInterval(stid)
        stt.textContent = 'start'
        toggle.style.setProperty('background-color', ' rgba(3, 191, 3, 0.811)')
        sec.textContent = '00'
        min.textContent = '00'
        hrs.textContent = '00'
        h=0
        s=0
        m=0
    }
}

toggle.addEventListener('click', timer)
