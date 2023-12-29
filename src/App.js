import { useState } from 'react'
import data from './data.json'
import Company from './Company'
function App() {
  const [companies, setCompanies] = useState(data)

  return (
    <div className="App">
      <div className="container">
        {companies.map((companie) => {
          console.log(companie)
          return <Company key={companie.id} companie={companie} />
        })}
      </div>
    </div>
  )
}

export default App
