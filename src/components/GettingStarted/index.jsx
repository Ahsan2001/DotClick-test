import { REACT_APP_INTERNAL_API_PATH } from "../../utils";

const GettingStarted = ({content}) => {
    return (
        <section className="gettingStarted">
            <div className="contentWrapper">
                <div className="grid-container">
                    <div className="items">
                        <div className="inner-content">
                            <h1><span>Getting</span> <br /> Started Is Easy</h1>
                            <p>{content?.text}</p>
                            <button>Schedule a Walk</button>
                        </div>
                    </div>
                    <div className="items">
                        <div className="inner-image">
                            <img src={REACT_APP_INTERNAL_API_PATH + content?.image1} alt={content?.image1} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GettingStarted;