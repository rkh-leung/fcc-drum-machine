import './App.css'
import React from 'react'
import drum1 from './assets/80s-CRASH1.wav'

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
  const playMusic = () => {
    const sound = new Audio(drum1)
    sound.play().catch(e => console.log('error', e))
  }

  return (
    <div id={'drum-machine'}>
      <div id={'display'}>
        {arr.map((item, idx) => (
          <button key={idx} className={'drum-pad'} onClick={playMusic}>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
