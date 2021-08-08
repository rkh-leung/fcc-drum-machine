import './App.css'
import React from 'react'
import { drumInputs } from './components/input-control'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>FCC Drum Machine</header>
      {drumInputs.map((obj, idx) => (
        <DrumMachine idx={idx} keypress={obj.key.toUpperCase()} sound={obj.sound} />
      ))}
    </div>
  )
}

export default App

function DrumMachine(props) {
  console.log(props.sound)
  const playMusic = () => {
    const sound = document.querySelector(`#${props.keypress}`)
    sound.play().catch((e) => console.log('error', e))
  }

  const keyHandler = (e) => {
    if (e.key === props.keypress) {
      const sound = document.querySelector(`#${e.key}`)
      sound.play().catch((e) => console.log('key error', e))
      console.log(sound)
    }
  }

  document.addEventListener('keydown', keyHandler)
  return (
    <div id={'drum-machine'}>
      <button
        id={'drum-pad'}
        key={props.idx}
        className={'drum-pad'}
        onClick={playMusic}
        value={props.idx}
      >
        <audio src={props.sound} className={'clip'} id={props.keypress} />
        {props.keypress}
      </button>
      <div id={'display'}></div>
    </div>
  )
}
