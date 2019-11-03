document.write(`
    <div class="nav">
        <h3 class="navtitle" onclick="goTo('${PATH}')">Quadre</h3>
        <div>
            <p class="navtext" onclick="goTo('${PATH}about/')">About</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}about/?p=members')">Members</p>
                <p class="navtext" onclick="goTo('${PATH}about/?p=repertoire')">Repertoire</p>
            </div>
        </div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}tour/')">Tour</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}tour/?p=past')">Past Events</p>
            </div>
        </div>
        <p class="navtext" onclick="goTo('${PATH}media/')">Media</p>
        <div>
            <p class="navtext" onclick="goTo('${PATH}mission/')">Mission</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}about/?p=community')">Community Engagement</p>
                <p class="navtext" onclick="goTo('${PATH}about/?p=testimonials')">Testimonials</p>
            </div>
        </div>
        <p class="navtext" onclick="goTo('${PATH}projects/')">Projects</p>
        <p class="navtext" onclick="goTo('${PATH}connect/')">Connect</p>
        <p class="navtext" onclick="goTo('${PATH}support/')" style="margin-right: 0">Support</p>
    </div>
        
    <div id="popup">
        <p id="popuptext">Our album Our Time is available <a href="https://store.cdbaby.com/cd/quadrethevoiceoffourhorn" target="_blank">here</a>!</p>
    </div>
`);