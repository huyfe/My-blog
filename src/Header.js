
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPencilAlt, faUserCircle, faAngleDown, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './Header.css';
function Header() {

    window.addEventListener('mouseup',function(event){
                console.log(event.target);
                var left = document.querySelector('.left');
                var btnToggle = document.getElementById('btnToggle');
                if(event.target != btnToggle) {
                    left.style.height = '60px';
                    btnToggle.classList.remove("active-dropdown");
                }

    });  

    const showMenu = () => {
        console.log('local');
        let btnToggle = document.querySelector(".btn-toggle");
        let left = document.querySelector(".left");
        if(btnToggle.classList.contains("active-dropdown") ) {
            btnToggle.classList.remove("active-dropdown");
            left.style.height = "60px";
        }
        else {
            btnToggle.classList.add("active-dropdown");
            left.style.height = "300px";
        }
    }
    const showSearchBar = () => {
        let btnSearch = document.querySelector(".icon-search");
        let inputSearch = document.querySelector(".input-search input");
        console.log(inputSearch);
        if(btnSearch.classList.contains("active-searching")) {
            btnSearch.classList.remove("active-searching");
            inputSearch.style.border = "none";
            inputSearch.style.padding = "0";
            inputSearch.style.width = "0";
        }
        else {
            inputSearch.style.border = "1px solid rgba(0, 0, 0, 0.2)";
            inputSearch.style.padding = "5px 10px";
            inputSearch.style.width = "100%";
            btnSearch.classList.add("active-searching");
            // inputSearch.style.cssText = "visibilit: hidden, opacity: 0";
        }
    }
    return (
        <div className="top-nav">
            <div onClick={showMenu} id="btnToggle" className="btn-toggle"><FontAwesomeIcon icon={faBars} /></div>
            <div className="left">
                <ul className="menu">
                    <Router>
                    <li className="logo"><Link to="/home"><img src="./images/logo_huy_fe.png"/></Link> </li>
                    <li><Link to="/blog">Bài viết</Link></li>
                    <li><Link to="/category">Chủ đề <FontAwesomeIcon icon={faAngleDown}/></Link></li>
                    <li><Link to="/category/wordpress">Wordpress</Link></li>
                    <li><Link to="/category/component">Component</Link></li>
                    </Router>
                </ul>
            </div>
            <div className="right">
                <div className="user-list">
                    <ul>
                        <li className="input-search"><input placeholder="Tìm kiếm" type="text" className="input-search"/></li>
                        <Router>
                        <li onClick={showSearchBar} className="icon-search"><a><FontAwesomeIcon icon={faSearch} /></a></li>
                        <li className="notify"><Link to="/notify"><FontAwesomeIcon icon={faBell} /></Link> <span>0</span> </li>
                        <li><Link to="/write"><FontAwesomeIcon icon={faPencilAlt} /></Link></li>
                        <li><Link to="/user"><FontAwesomeIcon icon={faUserCircle} /></Link></li>
                        </Router>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;