import './App.css'
import React from 'react'
import { drumInputs } from './components/input-control'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>FCC Drum Machine</header>
      <DrumMachine />
    </div>
  )
}

export default App

function DrumMachine() {
  const arr = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  const playMusic = (i) => {
    const sound = new Audio(drumInputs[i.target.value].sound)
    console.log('sound', sound)
    sound.play().catch((e) => console.log('error', e))
  }

  return (
    <div id={'drum-machine'}>
      <div id={'display'}>
        {drumInputs.map((obj, idx) => (
          <button key={idx} className={'drum-pad'} onClick={playMusic} value={idx}>
            {obj.key.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
