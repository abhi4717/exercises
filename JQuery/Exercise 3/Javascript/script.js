$(function() {
// Bind highlight function on mouseover & mouseleave event on evtTarget element
// unbind highlight function on click event on evtTarget element
$("#evtTarget").bind('mouseover mouseout',highlight);
$("#evtTarget").click(unbindMouseover);
});

function highlight() {
$("#evtTarget").toggleClass("highlighted");
}

function unbindMouseover(){
$("#evtTarget").unbind();
}

