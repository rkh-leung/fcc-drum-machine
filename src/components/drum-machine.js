import { useEffect } from 'react'

export function DrumMachine(props) {
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

  useEffect(() => {
    document.addEventListener('keydown', keyHandler)

    return () => {
      document.removeEventListener('keydown', keyHandler)
    }
  })
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
