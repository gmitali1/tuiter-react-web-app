const PostItem = (post) => {
    return (`    
            <li class="wd-postlist-item">
            <div class="wd-left-portion">
                <img class="wd-avatar" src="${post.image}"></div>
            <div class="wd-right-portion">
                <div>
                    <span class="wd-author-name">${post.userName}</span>
                    <i class="fas fa-check-circle ml-2"></i>
                    <span class="wd-author-tag">${post.tag}</span>
                    <span class="wd-author-tag dot-before">. ${post.time}</span>
                    <a href="#!" class="wd-no-decoration">
                        <span class="wd-ellipse wd-row">
                            <i class="fas fa-ellipsis-h"></i>
                        </span>
                    </a>
                    <span class="wd-content wd-row">${post.topic1} <a href="${post.externalLink}">${post.tagInTitle}</a> ${post.topic2}</span>
                </div>
                <div class="wd-item-body">
                    <img src="${post.bannerUrl}" class="wd-item-banner">
                    <span class="wd-body-title wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">${post.overlayTextHeading}</span>
                    <span class="wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">${post.overlayText}</span>
                    <span class="wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">
                        <a class="text-secondary wd-no-decoration" href="${post.externalLink}">
                            <i class="fas fa-link"></i>
                            ${post.overlayLinkText}
                        </a>
                    </span>
                </div>
                <div class="wd-footer">
                    <ul class="wd-reaction">
                        <li>
                            <a href="#!" class="wd-no-decoration text-secondary">
                                <span class="">
                                    <i class="far fa-comment"></i>
                                </span>
                                <span class="wd-reaction-count">${post.commentCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="wd-no-decoration text-secondary">
                            <span class="">
                                <i class="fas fa-retweet"></i>
                            </span>
                                <span class="wd-reaction-count">${post.retweetCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="wd-no-decoration text-secondary">
                            <span class="wd-reaction-icon">
                                <i class="fas fa-heart reaction-active"></i>
                            </span>
                                <span class="wd-reaction-count reaction-active">${post.likeCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="wd-no-decoration text-secondary">
                            <span class="wd-reaction-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </li>
    `);
}

export default PostItem;
