import React from "react";
import HomeSummaryItem from "./home-summary-item";
import postsArray from './posts.json';
import "./index.css";
import PostSummaryItem from "../post-summary-list/post-summary-item";
const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <HomeSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;

