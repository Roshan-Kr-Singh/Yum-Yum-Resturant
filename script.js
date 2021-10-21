$(document).ready(function() {

    // Regular expressions
    const namePattern = /^[a-zA-Z]+$/; 

    const fname = document.getElementById('cf-first-name');
    const lname = document.getElementById('cf-last-name');
    const message = document.getElementById('cf-message');

    const ghostBtn = document.getElementById('ghost-btn');
    const mainDescription = document.getElementById('main-description');

    $('#main-show-hide-btn').click(() => {
	$('#main-description').toggle(500);
    });

    $('#cf-submit-btn').click(() => {
	if (!fname.value.match(namePattern)) {
	    fname.focus();
	    return false;
	}
	if (!lname.value.match(namePattern)) {
	    lname.focus();
	    return false;
	}
	if (!message.value.length) {
	    message.focus();
	    return false;
	}
	ghostBtn.click();
	return true;
    });
});

