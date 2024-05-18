import { useState } from 'react'
import data from './data.json'
import CompanyDetails from './CompanyDetails'
import CompanyRoles from './CompanyRoles'
function App() {
  const [companies, setCompanies] = useState(data)
  const handleSelection = (id) => {
    console.log(id)
  }
  return (
    <div className="container">
      <header className="header"></header>
      {companies.map((companie) => {
        return (
          <section
            className="company"
            onClick={() => handleSelection(companie.id)}
            key={companie.id}
          >
            <CompanyDetails companie={companie} />
            <CompanyRoles companie={companie} />
          </section>
        )
      })}
    </div>
  )
}

export default App
