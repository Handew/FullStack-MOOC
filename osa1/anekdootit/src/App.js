import React, { useState } from 'react'

const Suosituin = ({ points, anecdotes }) => {
  let pisteet = 0
  let suosituin = 0
  for (let i = 0; i < points.length; i++) {
    if(points[i] > pisteet){
      pisteet = points[i];
      suosituin = i
    }
  }
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[suosituin]}
      <div>has {pisteet} votes</div>
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const random = () => Math.floor(Math.random()* (anecdotes.length))

  const handleNextClick = () => setSelected(random)

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  } 

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>

      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleNextClick} text="next anecdotes" />
      <Suosituin points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App
