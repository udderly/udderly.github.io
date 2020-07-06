document.write(`
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<div id="nav">
		<div id="navexpand" onclick="expand()"><i class="material-icons">menu</i></div>
        <div style="text-align: center">
            <div id="navicon" style="background-image: url('${PATH}images/logos/icon-orange.png')" onclick="goTo('${PATH}')"></div>
            <div id="navtitle" style="background-image: url('${PATH}images/logos/name-black.png')" onclick="goTo('${PATH}')"></div>
        </div>
		<div class="navbreak"></div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}about/')">About</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}about/?p=bio')">Bio</p>
                <p class="navtext" onclick="goTo('${PATH}about/?p=members')">Members</p>
                <p class="navtext" onclick="goTo('${PATH}about/?p=repertoire')">Repertoire</p>
            </div>
        </div>
		<div class="navbreak"></div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}tour/')">Tour</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}tour/?p=upcoming')">Upcoming</p>
                <p class="navtext" onclick="goTo('${PATH}tour/?p=past')">Past Events</p>
            </div>
        </div>
		<div class="navbreak"></div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}media/')">Media</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}media/?p=albums')">Albums</p>
                <p class="navtext" onclick="goTo('${PATH}media/?p=videos')">Videos</p>
                <p class="navtext" onclick="goTo('${PATH}media/?p=audio')">Audio</p>
                <p class="navtext" onclick="goTo('${PATH}media/?p=photos')">Photos</p>
            </div>
        </div>
		<div class="navbreak"></div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}mission/')">Mission</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}mission/?p=education')">Education</p>
                <p class="navtext" onclick="goTo('${PATH}mission/?p=community')">Community Engagement</p>
                <p class="navtext" onclick="goTo('${PATH}mission/?p=testimonials')">Testimonials</p>
            </div>
        </div>
		<div class="navbreak"></div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}projects/')">Projects</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}projects/?p=message')">Music with a Message</p>
                <p class="navtext" onclick="goTo('${PATH}projects/?p=competition')">Q Competition</p>
            </div>
        </div>
		<div class="navbreak"></div>
        <p class="navtext" onclick="goTo('${PATH}connect/')">Connect</p>
		<div class="navbreak"></div>
        <p class="navtext" onclick="goTo('${PATH}support/')" style="margin-right: 0">Support</p>
    </div>
        
    <div id="popup">
        <p id="popuptext">Our album &ldquo;Our Time&rdquo; is available <a href="https://store.cdbaby.com/cd/quadrethevoiceoffourhorn" target="_blank">here</a>!</p>
    </div>

    <div id="footer">
        <div id="mc_embed_signup">
            <form
                  action="https://quadre.us4.list-manage.com/subscribe/post?u=3459a01b1afb8464293158ecb&amp;id=6d3ee7a1d9" 
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate>
                <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group" style="flex-basis: 100%">
                        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="Email">
                    </div>
                    <div class="mc-field-group">
                        <input type="text" value="" name="FNAME" class="" id="mce-FNAME" placeholder="First Name">
                    </div>
                    <div class="mc-field-group">
                        <input type="text" value="" name="LNAME" class="" id="mce-LNAME" placeholder="Last Name">
                    </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                    <div style="position: absolute; left: -5000px;" aria-hidden="true">
                        <input type="text" name="b_3459a01b1afb8464293158ecb_6d3ee7a1d9" tabindex="-1" value="">
                    </div>
                    <div class="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                    </div>
                </div>
            </form>
        </div>
        <p style="margin-top: 50px">&copy; 2020 Quadre</p>
        <p>Primary Photo Credit: <a href="https://www.carlinmaphotography.com/" target="_blank">Carlin Ma</a></p>
        <p>Website Design: Brandon Chung</p>
    </div>
`);