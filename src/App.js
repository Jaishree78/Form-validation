import React from 'react'
import Form from './Component/Form'
import "./App.css"

const App = () => {
  return (
    <>
    <div className="form-container">
      <span className='close-btn'>x</span>
      <div className="form-content-left">
        <img src="https://static.vecteezy.com/system/resources/previews/024/061/966/non_2x/launching-into-success-3d-rendering-of-rocket-model-against-dark-background-ai-generated-free-photo.jpg" alt="left" className="form-img" />
      </div>
      <Form />
    </div>
    </>
  )
}

export default App
