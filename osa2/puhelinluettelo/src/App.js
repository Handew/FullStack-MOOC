import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Notification from './components/Notification'

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

const Persons = ({ persons, search, handleDeleteClick }) => {
  return (
    <div>
      {persons.map((persons) => {
        let lowerCaseName = persons.name.toLowerCase()
        if (lowerCaseName.indexOf(search) > -1) {
          return (
            <p key={persons.name}> {persons.name} {persons.number} <button onClick={() => handleDeleteClick(persons.id)}>delete</button></p>
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
  const [infoMessage, setInfoMessage] = useState('')
  const [tila, setTila] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
      setInfoMessage(`Added ${newName}`)
      setTimeout(() => {
        setInfoMessage(null)
      }, 5000)
      setTila('add')
      setNewName('')
      setNewNumber('')

      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })

    } else { 
        const conf = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      
        const pers = persons.find(p => p.name === newName)

        if (conf) {
          setInfoMessage(`Edited ${newName}`)
          setTimeout(() => {
            setInfoMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
          setTila('edit')

          personService
            .update(pers.id, personObject)
            .then(response => {
              setPersons(persons.map(per => per.id !== pers.id ? per : response.data))
            })
            .catch(error => {
              setTila('error')
              setInfoMessage(`Information of ${newName} has already been removed from server`)
              setTimeout(() => {
                setInfoMessage(null)
              }, 5000)
              setPersons(persons.filter(p => p.id !== pers.id))
            })
        }



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

  const handleDeleteClick = (id) => {
    const person = persons.find(per => per.id === id)
    
    const confirm = window.confirm(
      `Delete ${person.name}?`
    )

    if (confirm) {
      personService
        .remove(id)
        .then((response) => {
          if (response.status === 200) {
            setPersons(persons.filter((filtered) => filtered.id !== id))
          }
        })
    }
    setTila('error')
    setInfoMessage(`Deleted ${person.name}`)
    setTimeout(() => {
      setInfoMessage(null)
    }, 5000)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={infoMessage} alert={tila} />
      <Filter search={search} handleSearchInputChange={handleSearchInputChange} />

      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} search={search} handleDeleteClick={handleDeleteClick} />
    </div>
  )

}

export default App