$("document").ready(function() {
	// Example
	// Use basic selectors, basic filters, attribute selectors, content filters, hierarchy filters
	$('#button1').toggle(function() {
		$("p").css("border", "3px solid red");
	}, function() {
		$("p").css("border", "");
	});
	
	$('#btnSelectAll').toggle(redBorder,noBorder);
	$('#btnSelectElementType').toggle(blackBackground,noBackground);
	$('#btnSelectClass').toggle(classBlackBackground,classNoBackground);
	$('#btnSelectAttribute').toggle(attributeBlack,attributeClear);
	$('#btnSelectFirst').toggle(highlightFirst,noHighlightFirst);
	$('#btnSelectLast').toggle(highlightLast,noHighlightLast);
	$('#btnSelectOdd').toggle(highlightOdd,noHighlightOdd);
	
});

// Select all borders
function redBorder(){
	$("*").css("border","3px solid red");
}

function noBorder(){
	$("*").css("border","");
}

// Select li elements
function blackBackground(){
	$('li').css('background-color','black');
	$('li').css('color','white');
}

function noBackground(){
	$('li').css('background-color','white');
	$('li').css('color','black');
}

// Select class elements
function classBlackBackground(){
	$('.a').css('background-color','black');
	$('.a').css('color','white');
}
function classNoBackground(){
	$('.a').css('background-color','white');
	$('.a').css('color','black');
}

// Select attributes elemtents
function attributeBlack(){
	$('*[class=b]').css('background-color','black');
	$('*[class=b]').css('color','white');
}
function attributeClear(){
	$('*[class=b]').css('background-color','white');
	$('*[class=b]').css('color','Maroon');
}

// Select first element in the list
function highlightFirst(){
	$('li:first').css('background-color','yellow');
}
function noHighlightFirst(){
	$('li:first').css('background-color','white');
}

// Select last element in the list
function highlightLast(){
	$('li:last').css('background-color','yellow');
}
function noHighlightLast(){
	$('li:last').css('background-color','white');
}

// Select odd elements in the list
function highlightOdd(){
	$('li:even').css('background-color','yellow');
}
function noHighlightOdd(){
	$('li:even').css('background-color','white');
}

