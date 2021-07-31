import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>FCC Drum Machine</header>
      <DrumMachine />
    </div>
  )
}

export default App

const DrumMachine = () => {
  const arr = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
  const playMusic = () => {
    const sound = new Audio()
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
