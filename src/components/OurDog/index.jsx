import { REACT_APP_INTERNAL_API_PATH } from "../../utils";


const OurDog = ({ content }) => {
  return (
    <section className="ourDogMainWrapper">
      <div className="contentWrapper">
        <div className="img-heading">
        <h1><span>Our</span> Dog  Walking <span>  <br />Experience</span></h1>
        </div>
        <div className="grid-container">
          <div className="items">
            <div className="img">
              <img src={REACT_APP_INTERNAL_API_PATH + content?.icon1} alt={content?.icon1} />
            </div>
            <div className="content">
              <h4>{content?.dogbox?.title}</h4>
              <p>{content?.dogbox?.text}</p>
            </div>
          </div>
          <div className="items">
            <div className="img">
              <img src={REACT_APP_INTERNAL_API_PATH + content?.icon3} alt={content?.icon3} />
            </div>
            <div className="content">
              <h4>{content?.securitybox?.title}</h4>
              <p>{content?.securitybox?.text}</p>
            </div>
          </div>
          <div className="items">
            <div className="img">
              <img src={REACT_APP_INTERNAL_API_PATH + content?.icon2} alt={content?.icon2} />
            </div>
            <div className="content">
              <h4>{content?.phonebox?.title}</h4>
              <p>{content?.phonebox?.text}</p>
            </div>
          </div>
          <div className="items">
            <div className="img">
              <img src={REACT_APP_INTERNAL_API_PATH + content?.icon4} alt={content?.icon4} />
            </div>
            <div className="content">
              <h4>{content?.camerabox?.title}</h4>
              <p>{content?.camerabox?.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurDog;