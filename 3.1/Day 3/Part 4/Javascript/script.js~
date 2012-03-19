$("document").ready(function() {
	$('#button1').toggle(function() {
	  $("form :input").css("border", "3px solid red");
	}, function() {
	  $("form :input").css("border", "");
	});
	$('#FirstName').change(textChanged);
	$('#LastName').focus(changeBackGround);
	$('#LastName').blur(whiteBackground);
	$('#Comments').select(selectedText);
	$('form').submit(formSubmitted);
});

function textChanged(){
	alert('First name changed');
}

function changeBackGround(){
	$('#LastName').css('background-color','#FFF');
}

function whiteBackground(){
	alert('Moving out of Last Name text box');
}

function selectedText(){
	alert('Text Selected');
}

function formSubmitted(){
	alert('Form Submitted');
}
