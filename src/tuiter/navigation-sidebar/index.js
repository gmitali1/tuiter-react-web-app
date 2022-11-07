
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/fontawesome-free-solid";
import './index.css';
import {
    faBell,
    faBookmark,
    faEllipsis,
    faEnvelope,
    faFlask,
    faHashtag,
    faList, faT,
    faUser
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item"> <FontAwesomeIcon className="wd-navigation-icon" icon={faT}/></a>

            <Link to="/tuiter" className={`list-group-item ${active === undefined ? 'active' : ''}`}>
                <FontAwesomeIcon className="wd-navigation-icon" icon={faHome}/> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon className="wd-navigation-icon" icon={faHashtag}/> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <FontAwesomeIcon className="wd-navigation-icon" icon={faFlask}/> Labs
            </Link>
            <Link to="/tuiter/notifications"
                  className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBell} className="wd-navigation-icon" /> Notifications
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faEnvelope} className="wd-navigation-icon" /> Messages
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faBookmark} className="wd-navigation-icon" /> Bookmarks
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faList} className="wd-navigation-icon" /> Lists
            </Link>
            <Link to="/tuiter/profile"
                  className={`list-group-item ${active === 'profile' || active === 'edit-profile' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faUser} className="wd-navigation-icon" /> Profile
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faEllipsis} className="wd-navigation-icon" /> More
            </Link>
        </div>
    );
};
export default NavigationSidebar;
