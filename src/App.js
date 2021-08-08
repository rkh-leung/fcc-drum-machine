import './App.css'
import React, { useState } from 'react'
import { drumInputs } from './components/input-control'

function App() {
  const [display, setDisplay] = useState('Display State')
  return (
    <div className='App'>
      <header className='App-header'>FCC Drum Machine</header>
      {drumInputs.map((obj, idx) => (
        <DrumMachine
          key={idx}
          clip={obj.clip}
          idx={idx}
          keypress={obj.key.toUpperCase()}
          keyNum={obj.keyCode}
          sound={obj.sound}
          setDisplay={setDisplay}
        />
      ))}
      <div id={'display'}>{display}</div>
    </div>
  )
}

export default App

function DrumMachine(props) {
  console.log(props.keyNum)
  const playMusic = () => {
    const sound = document.querySelector(`#${props.keypress}`)
    sound.play().catch((e) => console.log('error', e))
    props.setDisplay(props.clip)
  }

  const keyHandler = (e) => {
    console.log(e.which)
    if (e.which === props.keyNum) {
      const sound = document.querySelector(`#${e.key.toUpperCase()}`)
      sound.play().catch((e) => console.log('key error', e))
      props.setDisplay(props.clip)
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
    </div>
  )
}
