import { REACT_APP_INTERNAL_API_PATH } from "../../utils";


const WhyDog = ({ content }) => {
  return (
    <section className="whyDogs">

      <div className="contentWrapper">


        <div className="top-wrapper">
          <h1>Why Dog <br /><span> Owners Love Us</span></h1>
        </div>

        <div className="grid-container">
          <div className="items">
            <div className="item-inner">
              <h3>1</h3>
              <h4>{content?.box1?.title}</h4>
              <p>{content?.box1?.text}</p>
            </div>
            <div className="item-inner">
              <h3>3</h3>
              <h4>{content?.box3?.title}</h4>
              <p>{content?.box3?.text}</p>
            </div>
          </div>
          <div className="items">

            <div className="center-image">
              <img src={REACT_APP_INTERNAL_API_PATH + "/files/section4_image0.png"} alt="" />
            </div>

          </div>
          <div className="items">
            <div className="item-inner">
              <h3>2</h3>
              <h4>{content?.box2?.title}</h4>
              <p>{content?.box2?.text}</p>
            </div>
            <div className="item-inner">
              <h3>4</h3>
              <h4>{content?.box4?.title}</h4>
              <p>{content?.box4?.text}</p>
            </div>
          </div>
        </div>

        <button>
          Hear From Our Satisfied Pet Owners
        </button>

      </div>


    </section>
  )
}

export default WhyDog;