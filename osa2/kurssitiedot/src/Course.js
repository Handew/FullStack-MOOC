import React from 'react'

const Course = ({ kurssi }) => {
    return (
      <div>
        <Header otsikot={kurssi.name} />
        <Content sisältö={kurssi.parts} />
        <Total osat={kurssi.parts} />
      </div>
    )
  }
  
  const Header = ({ otsikot }) => {
    return (
      <h2>
        {otsikot}
      </h2>
    )
  }
  
  const Content = ({ sisältö }) => {
    return (
        sisältö.map(osa =>
          <p key={osa.id}>
            <Part nimi={osa.name} pisteet={osa.exercises} />
          </p>
           )
    )
  }
  
  const Part = ({ nimi, pisteet }) => {
    return (
      <>
        {nimi} {pisteet}
      </>
    )
  }
  
  const Total = ({ osat }) => {
    let pisteet = osat.map(osa => osa.exercises)
    let summa = pisteet.reduce((s, p) => {
      return s+p
    })
    return (
      <div>
        <b>total of {summa} exercises</b>
      </div>
    )
  }

  export default Course