document.write(`
    <div class="nav">
        <h3 class="navtitle" onclick="goTo('${PATH}')">Quadre</h3>
        <div>
            <p class="navtext" onclick="goTo('${PATH}about/')">About</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}about/')">Bio</p>
                <p class="navtext" onclick="goTo('${PATH}about/')">Members</p>
                <p class="navtext" onclick="goTo('${PATH}about/')">Repertoire</p>
            </div>
        </div>
        <p class="navtext" onclick="goTo('${PATH}tour/')">Tour</p>
        <p class="navtext" onclick="goTo('${PATH}media/')">Media</p>
        <p class="navtext" onclick="goTo('${PATH}mission/')">Mission</p>
        <p class="navtext" onclick="goTo('${PATH}projects/')">Projects</p>
        <p class="navtext" onclick="goTo('${PATH}connect/')">Connect</p>
        <p class="navtext" onclick="goTo('${PATH}support/')" style="margin-right: 0">Support</p>
    </div>
        
    <div id="popup">
        <p id="popuptext">Our album Our Time is availible <a href="https://store.cdbaby.com/cd/quadrethevoiceoffourhorn" target="_blank">here</a>!</p>
    </div>
`);