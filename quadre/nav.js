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
                <p class="navtext" onclick="goTo('${PATH}mission/?p=new')">New Works</p>
                <p class="navtext" onclick="goTo('${PATH}mission/?p=education')">Education</p>
                <p class="navtext" onclick="goTo('${PATH}mission/?p=community')">Community Engagement</p>
            </div>
        </div>
		<div class="navbreak"></div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}projects/')">Projects</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}projects/?p=message')">Music with a Message</p>
                <p class="navtext" onclick="goTo('${PATH}projects/?p=competition')">Quadre Competition</p>
            </div>
        </div>
		<div class="navbreak"></div>
        <div>
            <p class="navtext" onclick="goTo('${PATH}connect/')">Connect</p>
            <div class="navdrop">
                <p class="navtext" onclick="goTo('${PATH}connect/?p=booking')">Booking &amp; Inquiries</p>
                <p class="navtext" onclick="goTo('${PATH}connect/?p=testimonials')">Testimonials</p>
            </div>
        </div>
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
        <p style="margin-top: 50px">&copy; 2021 Quadre</p>
        <p>Primary Photo Credit: <a href="https://www.anniehallphoto.com/" target="_blank">Annie Hall</a></p>
        <p>Website Design: Brandon Chung</p>
        <div id="socials">
            <a href="https://www.facebook.com/quadre4horns" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="32" height="32">
	<path d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512H432V399.2C432,270.88,508.44,200,625.39,200c56,0,114.61,10,114.61,10V336H675.44c-63.6,0-83.44,39.47-83.44,80v96H734L711.3,660H592v357.78C836.77,979.37,1024,767.55,1024,512Z"/>
</svg>
            </a>
            <a href="https://www.instagram.com/quadre4horns" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.84 503.84" width="32" height="32">
	<path d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z" transform="translate(-4.08 -4.08)"/>
	<path d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z" transform="translate(-4.08 -4.08)"/>
	<circle cx="386.4" cy="117.44" r="30.23"/>
</svg>
            </a>
            <a href="https://www.linkedin.com/company/quadre---the-voice-of-four-horns" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.79 64.79" width="32" height="32">
	<path d="M55.2,55.2H45.6v-15c0-3.58-.06-8.2-5-8.2s-5.76,3.91-5.76,7.94V55.2h-9.6V24.29h9.21v4.22h.13a10.09,10.09,0,0,1,9.09-5c9.73,0,11.53,6.4,11.53,14.72ZM14.41,20.06A5.57,5.57,0,1,1,20,14.49a5.57,5.57,0,0,1-5.57,5.57h0m4.8,35.14H9.6V24.29h9.61ZM60,0H4.78A4.72,4.72,0,0,0,0,4.67V60.11a4.73,4.73,0,0,0,4.78,4.68H60a4.74,4.74,0,0,0,4.8-4.68V4.67A4.75,4.75,0,0,0,60,0" transform="translate(0 0)"/>
</svg>
            </a>
        </div>
    </div>
`);