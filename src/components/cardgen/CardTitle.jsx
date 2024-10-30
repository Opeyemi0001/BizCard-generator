import PropTypes from "prop-types"
const CardTitle = ({title, color}) => {

  const style = {
    color: color || "blue",
    fontSize: "1.5rem",
    fontWeight: "bold",
  };


  return (
    <h2 style={style}>{title || "Your Title"}</h2>
  )
}

CardTitle.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
}

export default CardTitle