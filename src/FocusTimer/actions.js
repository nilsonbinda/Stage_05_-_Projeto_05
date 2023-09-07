import state from './state.js'
import * as element from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'


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

export function playSounds(sounds){

    sounds = String(sounds)

    switch(sounds){
        case 'treeMusic':
            state.isMuteForest = !state.isMuteForest
            state.isMuteRain = true
            state.isMuteCoffe = true
            state.isMuteFlame = true
            break
        case 'cloudMusic':
            state.isMuteForest = true
            state.isMuteRain = !state.isMuteRain
            state.isMuteCoffe = true
            state.isMuteFlame = true
            break
        case 'storeMusic':
            state.isMuteForest = true
            state.isMuteRain = true
            state.isMuteCoffe = !state.isMuteCoffe
            state.isMuteFlame = true
            break
        case 'flameMusic':
            state.isMuteForest = true
            state.isMuteRain = true
            state.isMuteCoffe = true
            state.isMuteFlame = !state.isMuteFlame
            break
        default:
            state.isMuteForest = true
            state.isMuteRain = true
            state.isMuteCoffe = true
            state.isMuteFlame = true
            break
    }

    console.log(`Floresta: ${state.isMuteForest}, Chuva: ${state.isMuteRain}, Cafeteria: ${state.isMuteCoffe}, Lareira: ${state.isMuteFlame}`)
    toggleAudio()
}


export function toggleAudio(){

    let forest = state.isMuteForest ? sounds.buttonTreeAudio.pause() : sounds.buttonTreeAudio.play()
    let rain = state.isMuteRain ? sounds.buttonCloudAudio.pause() : sounds.buttonCloudAudio.play()
    let coffee = state.isMuteCoffe ? sounds.buttonStoreAudio.pause() : sounds.buttonStoreAudio.play()
    let flame = state.isMuteFlame ? sounds.buttonFlameAudio.pause() : sounds.buttonFlameAudio.play()

}