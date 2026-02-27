import { useState } from 'react'
import './App.css'

function App(props) {
  const [text, setText] = useState(props.name);

  function endTheworld() {
     if (text === "hello world") {
      setText("end the world")
    } else {
      setText("hello world")
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <button onClick={endTheworld}>End The World</button>
    </>
  )
}

export default App