import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
      <Total osat={course.parts} />
    </div>
    // <div>
    //   <Header kurssi={course.name}/>
    //   <Content osat={course.parts} />
    //   <Total osat={course.parts} />
    // </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header kurssi={course.name} />
      <Content osat={course.parts} />
    </div>
  )
}

const Header = ({ kurssi }) => {
  return (
    <div>
      <h1>{kurssi}</h1>
    </div>
  )
}

const Content = ({ osat }) => {
  let result = osat.map(osa => 
    <p key={osa.id}>
      {osa.name} {osa.exercises}
    </p>)
  return (
    <div>
      <Part osa={result} />
    </div>
  )
}

const Part = ({ osa, harjoitus }) => {
  return (
    <div>
      {osa} {harjoitus}
    </div>
  )
}

const Total = ({ osat }) => {
  let harjoitukset = osat.map(osa => osa.exercises)
  let summa = harjoitukset.reduce((s, p) => {
    return s+p
  })
  return (
    <div>
      <b>total of {summa} exercises</b>
    </div>
  )
}

export default App