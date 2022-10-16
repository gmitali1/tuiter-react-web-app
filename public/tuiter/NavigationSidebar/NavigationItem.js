const NavigationItem = (navigationItem, active) => {
    let normalStyle = "list-group-item list-group-item-action d-inline-flex";
    let activeStyle = "list-group-item list-group-item-action d-inline-flex bg-primary";
    let style ="";
    if (navigationItem.title.toLowerCase().includes(active.toLowerCase())) {
        style = activeStyle;
    }
    else {
    style = normalStyle;
    }
    return (`
        <a href="${navigationItem.hyperlink}" class="${style}">
            <i class="${navigationItem.icon} pt-1"></i><span class="d-none d-xl-block">&nbsp;&nbsp;${navigationItem.title}</span>
        </a>
    `);
}

export default NavigationItem;