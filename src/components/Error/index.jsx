import { Link } from "react-router-dom";


const Error = () => {
    return (
        <section className="Error_404">
            <div className="contentWrapper">
                <div className="top-wrapper">
                    <h1><span> 404</span>  Page <br /> Not <span>Found</span> </h1>
                    <Link to="/" >Go to Home Page</Link>
                </div>
            </div>
        </section>
    )
}

export default Error;