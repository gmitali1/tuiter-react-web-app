import React from "react";
import "./index.css"
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeftLong,
    faBirthdayCake,
    faCalendar,
    faLocation,
    faLocationPin, faMapLocationDot
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import moment from "moment";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    return(
        <div className={'wd-div-border'}>
            <li className="list-group-item wd-margin-bottom-large wd-margin-bottom-small wd-margin-side wd-profile-loc">
                <div className="row">
                    <div className="col-auto">
                        <FontAwesomeIcon className="align-self-center wd-margin-top-small" icon={faArrowLeftLong}/>
                    </div>
                    <div className="col-10">
                        <span className="fw-bold wd-toolbar-header">{profile.firstName} {profile.lastName}</span>
                        <div className="text-secondary">{profile.noOfTweets} Tuits</div>
                    </div>
                </div>
            </li>
            <li className="list-group-item wd-margin-bottom-large">
                <div className="row">
                    <div>
                        <img src={`../../images/${profile.bannerPicture}`} width="100%" height="200px"/>
                    </div>
                    <div className="rounded-circle wd-overlap-profile wd-border">
                        <img className="rounded-circle wd-overlap-profile wd-border" src={`/images/${profile.profilePicture}`} width={150}/>

                    </div>
                    <div>
                        <Link to="/tuiter/edit-profile">
                            <button className="btn btn-outline-dark rounded-pill wd-override-overlap float-end wd-profile-loc">Edit Profile</button>
                        </Link>
                    </div>
                </div>
            </li>
            <li className="list-group-item wd-margin-side wd-profile-loc">
                <div className="row">
                    <span className="fw-bolder wd-toolbar-header">{profile.firstName} {profile.lastName}</span>
                    <span className="text-secondary wd-margin-bottom-small">{profile.handle}</span>
                    <span className="text-body wd-margin-bottom-small">{profile.bio}</span>

                    <div className="wd-item-footer  wd-margin-bottom-small">
                        <ul className="wd-reaction-list">
                            <li>
                                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                                    <FontAwesomeIcon className="wd-right-margin" icon={faLocationDot} />
                                    <span className="wd-reaction-count">{profile.location}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                                    <FontAwesomeIcon className="wd-right-margin" icon={faBirthdayCake} />
                                    <span className="wd-reaction-count">Born {moment(profile.dateOfBirth).format("MMMM Do YYYY")}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                                    <FontAwesomeIcon className="wd-right-margin" icon={faCalendar} />
                                    <span className="wd-reaction-count">Joined {profile.dateJoined}</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <span className="text-secondary"><span className="fw-bold text-black">{profile.followingCount}</span> Following <span className="fw-bold text-black">{profile.followersCount}</span> Followers</span>

                </div>
            </li>
        </div>
    );
};
export default ProfileComponent;