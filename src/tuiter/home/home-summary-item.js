import React from "react";
import "./index.css";
import ConditionalOutputInline from "./TweetInlineComponent";
import TweetInlineComponent from "./TweetInlineComponent";
import OptionsComponent from "./OptionsComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faCoffee, faHome, faRetweet} from '@fortawesome/fontawesome-free-solid';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {faCircleDot} from "@fortawesome/free-solid-svg-icons/faCircleDot";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons/faEllipsisH";

function Image(props,url) {
    return  <img width={70} className="rounded-4" src={`url`}/>
}

function Tweet(props, url) {
    return <h1>Please sign up.</h1>;
}
function Greeting(props, url) {
    const isImagePresent = props.isImagePresent;
    if (!isImagePresent) {
        return <Tweet />;
    }
    return <Image />;
}

const HomeSummaryItem = (
    {
        post =   {
            "_id": 123,
            "topic": "SpaceX",
            "userName": "@SpaceX",
            "time": "23h",
            "title": "Dennis and Akiki Tito  are the first two crewmembers on Starship's second commercial spaceflight around the Moon",
            "url": "https://www.spacex.com/updates/",
            "image": "homepost.png",
            "profile": "spacexx.jpg",
            "likesCount": "11.1k",
            "retweetCount": "5000",
            "commentsCount": "1000",
            "retweetedName": "Elon Musk"
        },

    }
) => {

    return(
        <li className="list-group-item">
            <div className="row">
                { post.retweetedName!=null && <div className={"fw-bolder wd-retweeted"}> <FontAwesomeIcon className ={"wd-retweet"} icon={faRetweet}/>{post.retweetedName} Retweeted</div>}
                <div className="col-2">
                    <img width={60} className={"rounded-5"} src={'../../images/'+post.profile}/>
                </div>
                <div className="col-10">
                    <span className={"fw-bolder"}>{post.topic} </span>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    <span> {post.userName} . {post.time} </span>
                    <FontAwesomeIcon icon={faEllipsisH} className={"float-end"}></FontAwesomeIcon>
                    <div className={"wd-title"}>{post.title} <a href={post.url}>{post.url}</a></div>

                    <TweetInlineComponent className={"col-10 wd-title"} post={post}/>
                    <OptionsComponent post={post}/>
                    <div className ={"wd-thread"}>
                        { post.url!=null && <a href={post.url}> Show this thread</a>}
                    </div>

                </div>


            </div>
        </li>
    );
};
export default HomeSummaryItem;

