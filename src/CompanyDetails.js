const CompanyDetails = ({ companie }) => {
  const { logo, company, position, postedAt, contract, location } = companie
  return (
    <article className="company-details">
      <div className="image">
        <img src={logo} alt={company} />
      </div>
      <div className="company-detail">
        <span>{company}</span>
        <p style={{ fontWeight: 'bold', margin: '0.4rem 0px' }}>{position}</p>
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
