import React, { useState } from "react"

const History = ({ allClicks }) => {
  if(allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Display = (props) => <div>{props.value}</div> 

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    setValue(newValue)
  }

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='Left' />
        <Button handleClick={handleRightClick} text='Right' />
        {right}
        <History allClicks={allClicks} />
      </div>

      <div>
        <Display value={value} />
        <Button handleClick={setToValue(1000)} text='thousand' />
        <Button handleClick={setToValue(0)} text='reset' />
        <Button handleClick={setToValue(value + 1)} text='increasement' />
      </div>
    </div>
  )
}

export default App
