import React, { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button> 

const Display = ({ text,value }) => <div>{text} {value}</div>

// const Average = ({ good, bad, all }) =>{
//   return (good - bad) / all
// }

const All = ({ good, neutral, bad }) => {
  return (good + neutral + bad)
}

const Average = ({ good, bad, all }) =>{
  return (good - bad) / all
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //  const [all, setAll] = useState(0)
  // const [average, setAverage] = useState(0)

 

 

  const handleGoodClick = () => {
    // setAll(all + 1)
    setGood(good + 1)
    // setAverage(average + 1)
  }

  const handleNeutralClick = () => {
    // setAll(all + 1)
    setNeutral(neutral + 1)
    // setAverage(average + 0)
  }

  const handleBadClick = () => {
    // setAll(all + 1)
    setBad(bad + 1)
    // setAverage(average - 1)
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
      {/* <All good={good} neutral={neutral} bad={bad} /> */}
      {/* <Average good={good} bad={bad} /> */}
      {/* <Display text='positive' value={good} /> */}
    </div>
  )
}

export default App