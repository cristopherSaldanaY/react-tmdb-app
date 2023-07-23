import PropTypes from "prop-types"
import s from "./particle/style.module.css";

// Stateless (solo recepcionara props y pintara)
const Logo = ({ title, image}) => (
  <>
    <div className={s.container}> 
      <img className={s.img} src={image} alt="logo" />
      <span className={s.title} >{title}</span>
    </div>
  </>
)

Logo.proptypes = {
  image: PropTypes.string,
  title: PropTypes.string,
}

export default Logo
