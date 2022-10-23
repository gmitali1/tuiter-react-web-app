import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/fontawesome-free-regular";
import {faArrowUp, faRetweet, faShare, faUpload} from "@fortawesome/fontawesome-free-solid";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";

const OptionsComponent = ({
                              post = {
                                  "_id": 234,
                                  "topic": "Elon Musk",
                                  "userName": "@elonmusk",
                                  "time": "15h",
                                  "title": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal everywhere.",
                                  "profile": "times.png",
                                  "likesCount": "11.1k",
                                  "retweetCount": "5000",
                                  "commentsCount": "1000",
                                  "retweet": {
                                      "topic": "SpaceX",
                                      "userName": "@SpaceX",
                                      "time": "16h",
                                      "title": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage -> starlink.com/rv",
                                      "profile": "spacexx.jpg"
                                  }
                              }
                          }) => {
    return <div>
        <ul className={"wd-options-list"}>
            <li className={"wd-options"}><FontAwesomeIcon icon={faComment}/> {post.commentsCount} </li>
            <li className={"wd-options"}><FontAwesomeIcon icon={faRetweet}/> {post.retweetCount} </li>
            <li className={"wd-options"}><FontAwesomeIcon icon={faHeart}/> {post.likesCount} </li>
            <li className={"wd-options"}><FontAwesomeIcon icon={faArrowUpFromBracket}/> </li>
        </ul>
    </div>
};


export default OptionsComponent;