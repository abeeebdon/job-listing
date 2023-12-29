import CompanyDetails from './CompanyDetails'
import CompanyRoles from './CompanyRoles'

const Company = ({ companie }) => {
  return (
    <section className="company">
      <CompanyDetails companie={companie} />
      <hr className="line" />
      <CompanyRoles companie={companie} />
    </section>
  )
}
export default Company
