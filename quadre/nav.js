document.write(`
    <div id="nav">
        <div style="text-align: center">
            <div id="navicon" style="background-image: url('${PATH}images/logos/icon-orange.png')" onclick="goTo('${PATH}')"></div>
            <div id="navtitle" style="background-image: url('${PATH}images/logos/name-black.png')" onclick="goTo('${PATH}')"></div>
        </div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}about/')">About</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}about/?p=bio')">Bio</p>
                <p class="navtext" onclick="goTo('${PATH}about/?p=members')">Members</p>
                <p class="navtext" onclick="goTo('${PATH}about/?p=repertoire')">Repertoire</p>
            </div>
        </div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}tour/')">Tour</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}tour/?p=upcoming')">Upcoming</p>
                <p class="navtext" onclick="goTo('${PATH}tour/?p=past')">Past Events</p>
            </div>
        </div>
        <p class="navtext" onclick="goTo('${PATH}media/')">Media</p>
        <div>
            <p class="navtext" onclick="goTo('${PATH}mission/')">Mission</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}mission/?p=education')">Education</p>
                <p class="navtext" onclick="goTo('${PATH}mission/?p=community')">Community Engagement</p>
                <p class="navtext" onclick="goTo('${PATH}mission/?p=testimonials')">Testimonials</p>
            </div>
        </div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}projects/')">Projects</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}projects/?p=message')">Music with a Message</p>
                <p class="navtext" onclick="goTo('${PATH}projects/?p=competition')">Q Competition</p>
            </div>
        </div>
        <p class="navtext" onclick="goTo('${PATH}connect/')">Connect</p>
        <p class="navtext" onclick="goTo('${PATH}support/')" style="margin-right: 0">Support</p>
    </div>
        
    <div id="popup">
        <p id="popuptext">Our album &ldquo;Our Time&rdquo; is available <a href="https://store.cdbaby.com/cd/quadrethevoiceoffourhorn" target="_blank">here</a>!</p>
    </div>

    <div id="footer">
        <p style="margin-top: 10px">&copy; 2019 Quadre</p>
        <p>Photography by <a href="https://www.carlinmaphotography.com/" target="_blank">Carlin Ma</a></p>
        <p style="margin-bottom: -10px">Website by <a href="https://udderly.github.io/" target="_blank">Brandon Chung</a></p>
        <button onclick="window.location.href = '${PATH}connect/'">Book</button>
        <button onclick="window.location.href = '${PATH}support/'">Donate</button>
    </div>
`);