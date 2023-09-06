import state from './state.js'
import * as element from './elements.js'
import * as action from './actions.js'

export function countDown(){

    if(!state.inRunning){
        return
    }

    let minutes = Number(element.timerMinutes.textContent)
    let seconds = Number(element.timerSeconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes<0){
        action.reset()
        return
    }

    updateDisplay(minutes, seconds)

    setTimeout(() => {countDown()}, 1000);

}

export function updateDisplay(m, s){

    m = m ?? state.minutes
    s = s ?? state.seconds

    element.timerMinutes.textContent = String(m).padStart(2,'0')
    element.timerSeconds.textContent = String(s).padStart(2,'0')
}