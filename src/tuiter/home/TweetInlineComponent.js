import React from "react";

const TweetInlineComponent = ({
                                  post = {
                                      "topic": "SpaceX",
                                      "userName": "@SpaceX",
                                      "time": "23h",
                                      "title": "Dennis and Akiki Tito  are the first two crewmembers on Starship's second commercial spaceflight around the Moon ",
                                      "image": "spacex.png",
                                      "retweet": {

                                      }
                                  }
                              }) => {
    if(post.image!=null) {
        return (Image(post.image));
    } else {
        return (Tweet(post.retweet));
    }
};


function Image(url) {
    return  <div><img className="rounded-4 wd-100-width" src={'../images/'+url}/></div>
}

function Tweet(post) {
    return <li className="list-group-item rounded-2"><div>
        <img width={20} src={"../images/"+post.profile} className ="rounded-5"/>
        <span className={"fw-bolder"}>{post.topic}</span>
        <span> {post.userName} . {post.time} </span>
        <i className={"fa-solid fa-check"}></i>
        <div>{post.title}</div>
    </div></li>;
}

export default TweetInlineComponent;