$(function() {
              // Show, hide and toggle theDiv element
              // Animate and grow the width, font size, and position of theDiv element
              // Fade In, Out
              // Slide In, out, Toggle
	$('#theDiv').hide();
	$('#show').click(showDivContent);	
	$('#hide').click(hideDivContent);
	$('#toggle').toggle(showDivContent,hideDivContent);
	$('#right').click(animateWidth);
	$('#text').click(animateText);
	$('#moveDiv').click(animateDiv);
	$('#fadein').click(fadeInEffect);
	$('#fadeout').click(fadeOutEffect);
	$('#fadeto3').click(fadeToMildOpacity);
	$('#fadeup').click(fadeToOpaque);
	$('#slideup').click(slideUp);
	$('#slidedown').click(slideDown);
	$('#slidetoggle').click(slideToggle);
});

function showDivContent(){
	$('#theDiv').show('slow');
}

function hideDivContent(){
	$('#theDiv').hide('fast');
}

function animateWidth(){
	$('#theDiv').animate({width: '+=100px'},600);
}

function animateText(){
	$('#theDiv').animate({'font-size': '+=4px'},600);
}

function animateDiv(){
	$('#theDiv').animate({left: '+=30px'},600)
}

function fadeInEffect(){
	$('#theDiv').fadeIn('3000');
}

function fadeOutEffect(){
	$('#theDiv').fadeOut('200');
}

function fadeToMildOpacity(){
	$('#theDiv').fadeTo(300,0.3);
}

function fadeToOpaque(){
	$('#theDiv').fadeTo(300,1);
}

function slideUp(){
	$('#theDiv').slideUp('slow');
}

function slideDown(){
	$('#theDiv').slideDown('slow');
}

function slideToggle(){
	$('#theDiv').slideToggle('slow');
}
