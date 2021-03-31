import React, { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button> 

const Display = ({ text,value }) => <div>{text} {value}</div>

var summa
const All = ({ good, neutral, bad }) => {
  summa = (good + neutral + bad)
  return <div>{'all ' + summa}</div>
}

const Average = ({ good, bad }) =>{
  let ka = (good - bad) / summa
  return <div>{'average ' + ka}</div>
}

const Positive = ({ good }) => {
  let positive = (good / summa) * 100
  return <div>{'positive ' + positive + ' %'}</div>
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

 

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <h1>statistics</h1>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <All good={good} neutral={neutral} bad={bad} />
      <Average good={good} bad={bad} />
      <Positive good={good} />
    </div>
  )
}

export default App