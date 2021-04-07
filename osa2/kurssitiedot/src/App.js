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

const Header = ({ kurssi }) => {
  return (
    <div>
      <h1>{kurssi}</h1>
    </div>
  )
}

const Content = ({ osat }) => {
  const result = osat.map(osa => 
    <li key={osa.id}>
      {osa.name} {osa.exercises}
    </li>)
  return (
    <div>
      <Part osa={result} />
    </div>
  )
}

const Part = ({ osa, harjoitus }) => {
  return (
    <div>
      <p>{osa} {harjoitus}</p>
    </div>
  )
}

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.osat[0].exercises + props.osat[1].exercises + props.osat[2].exercises}</p>
//     </div>
//   )
// }

export default App