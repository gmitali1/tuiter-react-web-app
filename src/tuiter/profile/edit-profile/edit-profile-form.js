import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {editProfile} from "../profile-reducer";
import './index.css';

const EditProfile = () => {
    const nav = useNavigate();
    let [whatsHappening, setWhatsHappening] = useState('');
    const profile = useSelector((state) => state.profile);
    const onLoadData = {...profile}
    const dispatch = useDispatch();
    const [profileCurrState, setProfileCurrState] = useState(profile);
    const cancelListener = () => {
        console.log(onLoadData);
        dispatch(editProfile(onLoadData));
    }
    const saveListener = () => {
        console.log(profileCurrState);
        dispatch(editProfile(profileCurrState));
        nav("/tuiter/profile");
    }
    const changeListener = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        const targetName = event.target.name;
        const newTargetName = event.target.value;
        const newProfile = {
            ...profileCurrState,
            [targetName]: newTargetName
        }
        setProfileCurrState(newProfile);
    }


    return (
        <div className="row wd-div-border">
            <li className="list-group-item wd-margin-bottom-large wd-margin-bottom-small wd-margin-side">
                <div className="col">
                    <Link to="/tuiter/profile">
                        <FontAwesomeIcon className="align-self-center wd-margin-top-small wd-left-margin-medium wd-edit-profile" icon={faClose} onClick={cancelListener}/>
                    </Link>
added                    <span className="fw-bold wd-toolbar wd-edit-profile">Edit Profile</span>
                    <button className="btn btn-dark rounded-pill float-end wd-save-button" onClick={saveListener}>Save</button>
                </div>
            </li>
            <li className="list-group-item wd-margin-bottom-large">
                <div className="row">
                    <div>
                        <img src={`/images/${profile.bannerPicture}`} width="100%" height="300" alt='mitali.png'/>
                    </div>
                    <div className="rounded-circle wd-overlap wd-border">
                        <img className="rounded-circle wd-overlap wd-border" alt='mitali.png' src={`/images/${profile.profilePicture}`} width={150}/>
                    </div>
                </div>
            </li>
<div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="firstName" id="nameFloating" placeholder="John Doe" defaultValue={profile.firstName} onChange={changeListener} />
                    <label htmlFor="nameFloating">First Name</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="lastName" placeholder="John Doe" defaultValue={profile.lastName} name="lastName" onChange={changeListener}/>
                <label htmlFor="nameFloating">Last Name</label>
            </div>

            <div className="form-floating mb-3">
                <textarea className="form-control" id="bio" placeholder="An extravagent description of yourself" defaultValue={profile.bio} name="bio" onChange={changeListener}/>
                <label htmlFor="bioFloating">Bio</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="locationFloating" placeholder="Top of the world" defaultValue={profile.location} name="location" onChange={changeListener}/>
                <label htmlFor="locationFloating">Location</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="websiteFloating" placeholder="www.google.com" defaultValue={profile.website} name="website" onChange={changeListener}/>
                <label htmlFor="websiteFloating">Website</label>
            </div>

            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="dateOfBirthFloating" placeholder="www.google.com" defaultValue={profile.dateOfBirth} name="dateOfBirth" onChange={changeListener}/>
                <label htmlFor="dateOfBirthFloating">Birth date</label>
            </div>
</div>

        </div>
    );
}
export default EditProfile;