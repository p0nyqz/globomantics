import { logo } from './banner.module.css'

const subtitleStyle = {
  fontStyle: 'Italic',
  fontSize: 'x-large',
  color: 'coral',
}

const Banner = ({ headerText }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./globo-logo.png" alt="logo" className={logo}></img>
      </div>
      <div className="col-7 mt-7" style={subtitleStyle}>
        {headerText}
      </div>
    </header>
  )
}

export default Banner
