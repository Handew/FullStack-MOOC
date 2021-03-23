import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.kurssi1} {props.harjoitus1}</p>
      <p>{props.kurssi2} {props.harjoitus2}</p>
      <p>{props.kurssi3} {props.harjoitus3}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.harjoitus1 + props.harjoitus2 + props.harjoitus3} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content kurssi1={part1} kurssi2={part2} kurssi3={part3} harjoitus1={exercises1} harjoitus2={exercises2} harjoitus3={exercises3}/>
      <Total harjoitus1={exercises1} harjoitus2={exercises2} harjoitus3={exercises3} />
    </div>
  )
}

export default App