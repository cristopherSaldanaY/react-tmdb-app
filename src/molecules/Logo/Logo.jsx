import PropTypes from "prop-types"
//import { LogoContainer, LogoImg, LogoTitle} from './StyledLogo';
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
/*

//Styled components
const Logo = ({ title, image}) => (
  <>
    <LogoContainer> 
      <LogoImg src={image} alt="logo" />
      <LogoTitle>{title}</LogoTitle>
    </LogoContainer>
  </>
)
*/

Logo.proptypes = {
  image: PropTypes.string,
  title: PropTypes.string,
}

export default Logo
