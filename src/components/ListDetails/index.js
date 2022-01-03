import './index.css'

const ListDetails = props => {
  const {intialOne, onDeleContainer} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = intialOne

  const onDelete = () => {
    onDeleContainer(id)
  }

  return (
    <li className="li-background">
      <h1 className="time-accessed">{timeAccessed}</h1>
      <img src={logoUrl} className="logoUrl" alt="logo" />
      <h1 className="title">{title}</h1>
      <p className="para">{domainUrl}</p>
      <button className="button-con" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default ListDetails
