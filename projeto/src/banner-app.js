import "./banner.css";

function Banner() {
  return (
    <div className='banner'>
      <h1>OLÁ, MUNDO!</h1>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/elle-gs/" target="_blank">
          <img src='../images/linkedin-icon.png'></img>
        </a>
        <a href="https://github.com/niellegs" target="_blank">
          <img src='../images/github-icon.png'></img>
        </a>
      </div>
    </div>
  )
}

export default Banner;