
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {faRetweet, faThumbsDown} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";



const PostStats = ({tuit}) => {
    const dispatch = useDispatch();
    return <div className="wd-item-footer">
        <ul className="wd-post-stats-reactions">
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faComment} />
                    <span className="wd-reaction-count">{tuit.replies}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faRetweet} />
                    <span className="wd-reaction-count">{tuit.retuits}</span>
                </a>
            </li>
            <li>
                <a className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1,
                        liked : true
                    }))} className={`wd-right-margin ${tuit.liked === true ? 'text-danger' : ''}`} icon={faHeart} />
                    <span className="wd-reaction-count">{tuit.likes}</span>
                </a>
            </li>

            <li>
                <a className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes: tuit.dislikes + 1,
                        disliked : true
                    }))} className={`wd-right-margin ${tuit.disliked === true ? 'text-danger' : ''}`} icon={faThumbsDown} />
                    <span className="wd-reaction-count">{tuit.dislikes}</span>
                </a>
            </li>
            <li>
                <a href="#" className="wd-remove-link-text-decor wd-reaction-count">
                    <FontAwesomeIcon className="wd-right-margin" icon={faArrowUpFromBracket} />
                </a>
            </li>
        </ul>
    </div>
}
export default PostStats;
