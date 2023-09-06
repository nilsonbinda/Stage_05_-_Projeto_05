import state from './state.js'
import * as element from './elements.js'
import * as timer from './timer.js'


export function toggleRunning(){
    state.inRunning = document.documentElement.classList.toggle('running');

    timer.countDown()
}

export function reset(){
    state.inRunning = false
    document.documentElement.classList.remove('running')
    
    timer.updateDisplay()
}

export function set(){
    element.timerMinutes.setAttribute('contenteditable', true)
    element.timerMinutes.focus()
}

export function addFiveMinutes(){
    
    let minutes = Number(element.timerMinutes.textContent)
    let seconds = Number(element.timerSeconds.textContent)

    if(minutes >= 60){
        return
    }

    minutes = minutes + 5

    timer.updateDisplay(minutes, seconds)

}

export function removeFiveMinutes(){
    
    let minutes = Number(element.timerMinutes.textContent)
    let seconds = Number(element.timerSeconds.textContent)

    if(minutes < 5){
        return
    }

    minutes = minutes - 5

    timer.updateDisplay(minutes, seconds)

}