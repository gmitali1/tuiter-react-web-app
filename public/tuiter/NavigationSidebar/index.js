import navigationsidebars from "./navigationsidebars.js";
import NavigationItem from "./NavigationItem.js";

const NavigationSidebar = (active) => `
        <div class="list-group">${navigationsidebars.map(navigationItem => NavigationItem(navigationItem, active)).join('')}</div>
        <button class="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>`
export default NavigationSidebar;