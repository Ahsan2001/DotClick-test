import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";



const Footer = () => {
    return (
       <footer>
            <div className="contentWrapper">
                <div className="flex-container">
                    <div className="items">
                        <div className="logo">
                            <img src="./logo.png" alt="" />
                            <h4>barklyn & <br /> purr-meow</h4>
                        </div>
                        <div className="address">
                            <p>Address: Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="items for-flex">
                        <ul className="footer-menu"> 
                            <li><Link to="/faq">Faq</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                        </ul>
                        <ul className="footer-menu"> 
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="/our-routes">Our Routes & <br /> Safety Measures</Link></li>
                        </ul>
                    </div>
                    <div className="items">
                        <div className="contact">
                        <a href="tel:+7185027878"><BsFillTelephoneFill /> (718) 502-7878</a>
                        <a href="mailto:contact@barklynpurrmeow.com"><BsEnvelopeFill />  contact@barklynpurrmeow.com</a>
                        </div>
                    </div>
                </div>
            </div>
       </footer>
    )
}

export default Footer;