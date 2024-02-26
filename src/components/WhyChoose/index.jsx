import { useState } from "react"
import {REACT_APP_INTERNAL_API_PATH} from "../../utils/index"

const WhyChoose = ({ content }) => {
    const [img] = useState([
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image0.png",
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image1.png",
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image2.png",
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image3.png",
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image4.png",
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image5.png",
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image6.png",
        REACT_APP_INTERNAL_API_PATH + "/files/section2_image7.png",
    ])


    return (
        <section className="whyChooseMainWrapper">
            <div className="contentWrapper">
                <div className="inner-content">
                    <div className="img">
                        <h1>Why <span>Choose</span>  Barklyn & <br /> Purr-Meow  <span>Dog Walkers</span> ?  <br /></h1>
                    </div>
                    <p>{content?.text}</p>
                    <ul className="inner-images">
                        {
                            img.map((element,ind)=>{
                                return (
                                    <li key={ind} className={`img${ind+1}`}><img src={element} alt={ind}  /></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose;