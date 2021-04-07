import React, { useState } from 'react'


var summa

const All = ({ valueGood, valueNeutral, valueBad }) => {
  summa = (valueGood + valueNeutral + valueBad)
  return summa
}

const Average = ({ valueGood, valueBad }) => {
  let ka = (valueGood - valueBad) / summa
  return ka
}

const Positive = ({ valueGood }) => {
  let positive = (valueGood / summa) * 100
  return positive + " %"
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ valueGood, valueNeutral, valueBad }) => {

  if (valueGood === 0 && valueNeutral === 0 && valueBad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={valueGood} />
          <StatisticLine text="neutral" value={valueNeutral} />
          <StatisticLine text="bad" value={valueBad} />
          <StatisticLine text="all" value={<All valueGood={valueGood} valueNeutral={valueNeutral} valueBad={valueBad} />} />
          <StatisticLine text="average" value={<Average valueGood={valueGood} valueBad={valueBad} />} />
          <StatisticLine text="positive" value={<Positive valueGood={valueGood} />} />
        </tbody>
      </table>
    </>
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

      <Statistics valueGood={good} valueNeutral={neutral} valueBad={bad} />
    </div>
  )
}

export default App