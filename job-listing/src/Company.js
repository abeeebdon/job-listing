const Company = ({ companie }) => {
  const {
    logo,
    company,
    position,
    postedAt,
    contract,
    level,
    role,
    location,
    languages,
  } = companie
  return (
    <section className="company">
      <article className="company-details">
        <div>
          <img src={logo} alt={company} />
        </div>
        <div className="company-detail">
          <div className="company">
            <p>{company}</p>
          </div>
          <div>
            <h3>{position}</h3>
          </div>
          <div className="contract">
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
      </article>
      <article className="role">
        <p>{level}</p>
        <p>{role}</p>

        {languages.map((lang) => {
          return <p>{lang}</p>
        })}
      </article>
    </section>
  )
}
export default Company
