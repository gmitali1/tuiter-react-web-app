const PostItem = (post) => {
    return (`    
            <li class="wd-bookmark-item">
            <div class="wd-left-child">
                <img class="wd-avatar" src="${post.image}">
            </div>
            <div class="wd-right-child">
                <div class="wd-item-head">
                    <span class="wd-item-author">${post.userName}</span>
                    <i class="fas fa-check-circle ml-2"></i>
                    <span class="wd-item-author-tag">${post.tag}</span>
                    <span class="wd-item-author-tag dot-before">. ${post.time}</span>
                    <a href="#!" class="anchor-no-effect">
                        <span class="wd-tweet-setting wd-row">
                            <i class="fas fa-ellipsis-h"></i>
                        </span>
                    </a>
                    <span class="wd-item-content wd-row">${post.topic1} <a href="${post.externalLink}">${post.tagInTitle}</a> ${post.topic2}</span>
                </div>
                <div class="wd-item-body">
                    <img src="${post.bannerUrl}" class="wd-item-poster-img">
                    <span class="wd-body-title wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">${post.overlayTextHeading}</span>
                    <span class="wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">${post.overlayText}</span>
                    <span class="wd-body-content wd-row ${post.overlayTextPresent === 'false' ? "d-none" : ""}">
                        <a class="text-secondary anchor-no-effect" href="${post.externalLink}">
                            <i class="fas fa-link"></i>
                            ${post.overlayLinkText}
                        </a>
                    </span>
                </div>
                <div class="wd-item-footer">
                    <ul class="wd-reaction-list">
                        <li>
                            <a href="#!" class="anchor-no-effect text-secondary">
                                <span class="">
                                    <i class="far fa-comment"></i>
                                </span>
                                <span class="wd-reaction-count">${post.commentCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="anchor-no-effect text-secondary">
                            <span class="">
                                <i class="fas fa-retweet"></i>
                            </span>
                                <span class="wd-reaction-count">${post.retweetCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="anchor-no-effect text-secondary">
                            <span class="wd-reaction-icon">
                                <i class="fas fa-heart reaction-active"></i>
                            </span>
                                <span class="wd-reaction-count reaction-active">${post.likeCount}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="anchor-no-effect text-secondary">
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
//
// <li className="list-group-item d-flex justify-content-between primary-bg-color secondary-color">
//     <div className="left-child w-85">
//         <span className="f-border-color text-secondary">${post.topic}</span>
//         <span className="row"></span>
//         <span>
//                             <span className="fw-bold ${post.userName === '' ? " d-none" : ""}">
//                                 ${post.userName}
//                                 <i className="fas fa-check-circle ml-2"></i>
//                             </span>
//
//                             <small className="f-border-color text-secondary">${post.time}</small>
//                         </span>
//         <span className="row"></span>
//         <span className="f-border-color">${post.title}</span>
//     </div>
//     <div className="right-child w-15">
//         <img src="${post.image}" className="img-fluid" style="width: 100px;" alt="tesla">
//     </div>
// </li>
export default PostItem;
