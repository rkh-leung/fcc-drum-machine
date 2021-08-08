import './App.css'
import { useState } from 'react'
import { drumInputs } from './components/input-control'
import { DrumMachine } from './components/drum-machine'

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
