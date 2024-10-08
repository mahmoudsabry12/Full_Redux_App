import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Pages/Counter'
import { CounterToolkit } from './Pages/CounterToolkit'
import { CounterMultyReducer } from './Pages/CounterMultyReducer'


function App() {

  return (
    <>
    {/* Redux */}
     {/* <Counter /> */}

     {/* reduxToolkit */}
     {/* <CounterToolkit /> */}

     {/* reduxToolkitMultyReducers */}
     <CounterMultyReducer />
    </>
  )
}

export default App
