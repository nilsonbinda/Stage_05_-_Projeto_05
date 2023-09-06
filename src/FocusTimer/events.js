import * as element from './elements.js';
import * as actions from './actions.js'
import * as timer from './timer.js'
import * as state from './state.js'


export function registerTimerControls(){
    element.timerControls.addEventListener('click',(event)=>{
        const eventAction = event.target.dataset.action 

        if(typeof actions[eventAction] != 'function'){
            return
        }

        actions[eventAction]()

    })

}

export function setTimer(){
    element.timerMinutes.addEventListener('focus', ()=>{
        element.timerMinutes.textContent = ""
    })

    element.timerMinutes.onkeypress = (event) => /\d/.test(event.key)

    element.timerMinutes.addEventListener('blur', (event)=>{
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        timer.updateDisplay()
        element.timerMinutes.removeAttribute('contenteditable')
    })
}

