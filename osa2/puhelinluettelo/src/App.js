import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Hannu Ilvonen', number: '045-654321' },
    { name: 'Ida Torvinen', number: '0700 123 123' },
    { name: 'Pertti Järvinen', number: '050 159 753' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

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

      filter shown with <input value={search} onChange={handleSearchInputChange} />

      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {/* {persons.map(person =>
          <p key={person.name}> {person.name} {person.number}
          </p>)} */}


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
    </div>
  )

}

export default App