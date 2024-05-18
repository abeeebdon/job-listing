const CompanyRoles = ({ companie }) => {
  const { level, role, languages } = companie
  return (
    <article className="company-role">
      <p>{level}</p>
      <p>{role}</p>

      {languages.map((lang) => {
        return <p key={lang}>{lang}</p>
      })}
    </article>
  )
}
export default CompanyRoles
