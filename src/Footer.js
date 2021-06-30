import './Footer.css';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <div className="content-center">
            <a href="http://www.facebook.com/ybx1802">Phát triển bởi: <strong>Trần Quốc Huy</strong></a>
        </div>
    );
}

export default Footer;