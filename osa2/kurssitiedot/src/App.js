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

const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part osa={props.osat[0].name} harjoitus={props.osat[0].exercises} />
      <Part osa={props.osat[1].name} harjoitus={props.osat[1].exercises} />
      <Part osa={props.osat[2].name} harjoitus={props.osat[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.osa} {props.harjoitus}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.osat[0].exercises + props.osat[1].exercises + props.osat[2].exercises}</p>
    </div>
  )
}

export default App