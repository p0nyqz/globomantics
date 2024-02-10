import { useContext } from 'react'
import { logo } from './banner.module.css'
import { navigationContext } from './app'
import navValues from '../helpers/navValues'

const subtitleStyle = {
  fontStyle: 'Italic',
  fontSize: 'x-large',
  color: 'coral',
}

const Banner = ({ headerText }) => {
  const { navigate } = useContext(navigationContext)
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img
          src="./globo-logo.png"
          alt="logo"
          className={logo}
          onClick={() => navigate(navValues.home)}
        ></img>
      </div>
      <div className="col-7 mt-7" style={subtitleStyle}>
        {headerText}
      </div>
    </header>
  )
}

export default Banner
