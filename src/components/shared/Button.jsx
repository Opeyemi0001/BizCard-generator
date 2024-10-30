import PropTypes from "prop-types"
import "./Button.css"

const Button = ({
  cName = "default",
  handleClick,
  children
}) => {

  return (
    <button onClick={handleClick} className={cName}>{children}</button>
  )
}

Button.propTypes = {
  cName: PropTypes.string,
  children: PropTypes.any,
  handleClick: PropTypes.any
}

export default Button