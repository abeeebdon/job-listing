import { useState } from 'react'
import data from './data.json'
import Company from './Company'
function App() {
  const [companies, setCompanies] = useState(data)

  return (
    <div className="App">
      <main className="main">
        <div className="container">
          {companies.map((companie) => {
            console.log(companie)
            return <Company key={companie.id} companie={companie} />
          })}
        </div>
      </main>
    </div>
  )
}

export default App
