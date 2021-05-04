import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ search, handleSearchInputChange }) => {
  return (
    <div>
      filter shown with <input value={search} onChange={handleSearchInputChange} />
    </div>
  )
}

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, addPerson }) => {
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const Persons = ({ persons, search }) => {
  return (
    <div>
      {persons.map((persons) => {
        let lowerCaseName = persons.name.toLowerCase()
        if (lowerCaseName.indexOf(search) > -1) {
          return (
            <p key={persons.name}> {persons.name} {persons.number} </p>
          )
        }
        return (
          null
        )
      })
      }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    //Tarkistus onko nimi jo olemassa => jos on niin ilmoitus tästä eikä tätä lisätä uudelleen
    if (!(persons.find(p => p.name === newName))) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearchInputChange={handleSearchInputChange} />

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  )

}

export default App