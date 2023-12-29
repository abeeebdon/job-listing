const CompanyDetails = ({ companie }) => {
  const { logo, company, position, postedAt, contract, location } = companie
  return (
    <article className="company-details">
      <div className="image">
        <img src={logo} alt={company} />
      </div>
      <div className="company-detail">
        <div>
          <span>{company}</span>
        </div>
        <div>
          <h5>{position}</h5>
        </div>
        <div className="contract">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
    </article>
  )
}
export default CompanyDetails
