import './App.css'
import React from 'react'
import { drumInputs } from './components/input-control'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>FCC Drum Machine</header>
      {drumInputs.map((obj, idx) => (
        <DrumMachine idx={idx} keypress={obj.key} sound={obj.sound} />
      ))}
    </div>
  )
}

export default App

function DrumMachine(props) {
  const playMusic = () => {
    const sound = document.querySelector(`#${props.keypress}`)
    sound.play().catch((e) => console.log('error', e))
  }

  const keyHandler = (e) => {
    console.log(props.keypress)
    if (e.key) {
      playMusic()
    }
  }

  document.addEventListener('keydown', keyHandler)
  return (
    <div id={'drum-machine'}>
      <div id={'display'}>
        <button
          key={props.idx}
          className={'drum-pad'}
          onClick={playMusic}
          value={props.idx}
        >
          <audio src={props.sound} id={props.keypress} />
          {props.keypress.toUpperCase()}
        </button>
      </div>
    </div>
  )
}
