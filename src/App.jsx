import { useState } from 'react'
import './App.scss'

//components
import Container from './components/Container'

function App() {
  const [viewport, setViewport] = useState('standard')

  const handleClick = (val) =>{
    setViewport(val)
  }

  return (
    <>
        <Container viewport={viewport} onBtnClicked = {handleClick}/>
        <Container viewport={viewport} onBtnClicked = {handleClick}/>
    </>
  )
}

export default App
