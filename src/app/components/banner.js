import { logo } from './banner.module.css'

const subtitleStyle = {
  fontStyle: 'Italic',
  fontSize: 'x-large',
  color: 'coral',
}

const Banner = () => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./globo-logo.png" alt="logo" className={logo}></img>
      </div>
      <div className="col-7 mt-7" style={subtitleStyle}>
        Providing houses all over the world
      </div>
    </header>
  )
}

export default Banner
