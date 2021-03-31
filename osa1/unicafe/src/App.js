import React, { useState } from 'react'


var summa

const All = ({ valueGood, valueNeutral, valueBad }) => {
  summa = (valueGood + valueNeutral + valueBad)
  return <div>{'all ' + summa}</div>
}

const Average = ({ valueGood, valueBad }) => {
  let ka = (valueGood - valueBad) / summa
  return <div>{'average ' + ka}</div>
}

const Positive = ({ valueGood }) => {
  let positive = (valueGood / summa) * 100
  return <div>{'positive ' + positive + ' %'}</div>
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ txtGood, valueGood, txtNeutral, valueNeutral, txtBad, valueBad }) => {

  return (
    <div>
      <h1>Statistics</h1>
      <div>{txtGood} {valueGood}</div>
      <div>{txtNeutral} {valueNeutral}</div>
      <div>{txtBad} {valueBad}</div>
      <div><All valueGood={valueGood} valueNeutral={valueNeutral} valueBad={valueBad} /></div>
      <div><Average valueGood={valueGood} valueBad={valueBad} /></div>
      <div><Positive valueGood={valueGood} /></div>
    </div>
  )
}


const App = () => {
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

      <Statistics txtGood='good' valueGood={good}
        txtNeutral='neutral' valueNeutral={neutral}
        txtBad='bad' valueBad={bad} />
    </div>
  )
}

export default App