import { useState } from 'react'
import data from './data.json'
import CompanyDetails from './CompanyDetails'
import CompanyRoles from './CompanyRoles'
function App() {
  const [companies, setCompanies] = useState(data)

  return (
    <div className="container">
      {companies.map((companie) => {
        return (
          <section className="company">
            <CompanyDetails companie={companie} />
            <CompanyRoles companie={companie} />
          </section>
        )
      })}
    </div>
  )
}

export default App
