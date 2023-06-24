import "./banner.css";

function Banner() {
  return (
    <div className='banner'>
      <h1>OLÁ, MUNDO!</h1>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/elle-gs/" target="_blank" rel='noreferrer'>
          <img src='../images/linkedin-icon.png' alt="linkedin"></img>
        </a>
        <a href="https://github.com/niellegs" target="_blank" rel='noreferrer'>
          <img src='../images/github-icon.png' alt="github"></img>
        </a>
      </div>
    </div>
  )
}

export default Banner;