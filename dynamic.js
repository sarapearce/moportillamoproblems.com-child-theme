
//moves the green arrow to be aligned underneath the text
function getArrow(el) {
    //get the hidden arrow and show
    var arrow = $('#green_arrow');
    arrow.removeClass('hidden');

    //use id as prefix to find arrow container
    var id = el.id;
    var container = $('#' + id + '_arrow_container');
    arrow.appendTo(container);
}

function contactMV() {
    var contact = prompt('Are you sure you want to talk to us?', 'yes');
    if (contact) {
	window.open('https://microventures.com', '_blank');
    }
}




