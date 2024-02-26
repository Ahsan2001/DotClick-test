import { REACT_APP_INTERNAL_API_PATH } from "../../utils";
import { NavLink } from "react-router-dom";


const Header = ({ content }) => {
    return (
        <header className="contentWrapper">
            <div className="logo">
                <img src={REACT_APP_INTERNAL_API_PATH + content?.logo } alt="" className="src" />
                <h4>barklyn & <br /> purr-meow</h4>
            </div>
            <div className="menuLinks">
                {content?.nav.map((element, ind) => {
                    return (
                        <NavLink key={ind} to={element.link} style={({ isActive }) => {
                            return isActive ? { color: "#F45866" } : {};
                        }}>
                            {element.name}
                        </NavLink>
                    )})
                }
            </div>
        </header>
    )
}

export default Header;