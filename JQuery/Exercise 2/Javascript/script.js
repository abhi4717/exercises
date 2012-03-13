$("document").ready(function() {
	$('#button1').toggle(function() {
	  $("form :input").css("border", "3px solid red");
	}, function() {
	  $("form :input").css("border", "");
	});
	$('#btnSelectButton').toggle(inputGreenBorder,inputNoBorder);
	$('#btnSelectText').toggle(textGreenBorder,textNoBorder);
});
// Select all button elements
function inputGreenBorder(arry1){
	$(":button").css("border", "3px solid green");	
}
function inputNoBorder(){
	$(":button").css("border", "");	
}

// Select all text elements
function textGreenBorder(){
	$("form :text").css("border", "3px solid green");	
}

function textNoBorder(){
	$("form :text").css("border", "");	
}
