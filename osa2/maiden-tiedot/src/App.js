import React, { useState, useEffect} from 'react'
import axios from 'axios'

const Data = ({ data, search }) => {
  const dataa = 
    data.filter(maa =>
      maa.name.toLowerCase().includes(search.toLowerCase()))

    if (dataa.length > 10) {
      return(
        <div>
          liikaa dataa, tarkenna
        </div>
      )
    }else if(dataa.length === 1)
    {
      return(
        <div>
            {dataa.map(maa => 
              <p key={maa.alpha3Code}>
                <h1>{maa.name}</h1>
                <p>capital {maa.capital}<br />
                population {maa.population}</p> 
                <h3>languages</h3>
                <ul>{maa.languages.map(x => 
                  <li>{x.name}</li>
                )}</ul>
                <img src={maa.flag} alt="kuva" width="200"></img>
                </p>
              )}
        </div>
      )
    }
    else
      return(
        <div>
          <ul>
            {dataa.map(maa =>
              <li key={maa.alpha3Code}>{maa.name}</li>
              )}
          </ul>
        </div>
      )
}

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setData(response.data)
      })
  }, [])

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <div>
      <div>
        find countries <input value={search} onChange={handleSearchInputChange} />
      </div>
      <Data data={data} search={search} />
    </div>
  )
}

export default App
