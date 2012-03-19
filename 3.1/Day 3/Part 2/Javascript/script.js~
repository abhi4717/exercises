$("document").ready(function() {
	$('#button1').toggle(function() {
	  $("form :input").css("border", "3px solid red");
	}, function() {
	  $("form :input").css("border", "");
	});
	$('#btnSelectButton').toggle(inputGreenBorder,inputNoBorder);
	$('#btnSelectText').toggle(textGreenBorder,textNoBorder);
	$('#btnSelectCheckbox').toggle(returnfun(':checkbox','outline','3px solid green'),returnfun(':checkbox','outline',''));
	$('#btnSelectChecked').toggle(returnfun(':checked','outline','3px solid green'),returnfun(':checked','outline',''));
	$('#btnSelectDisabled').toggle(returnfun(':disabled','outline','3px solid green'),returnfun(':disabled','outline',''));
	$('#btnSelectEnabled').toggle(returnfun(':enabled','outline','3px solid green'),returnfun(':enabled','outline',''));	
	$('#btnSelectFile').toggle(returnfun(':file','outline','3px solid green'),returnfun(':file','outline',''));
	$('#btnSelectFocus').toggle(returnfun(':focus','outline','3px solid green'),returnfun(':focus','outline',''));
	$('#btnSelectPassword').toggle(returnfun(':password','outline','3px solid green'),returnfun(':password','outline',''));
	$('#btnSelectRadio').toggle(returnfun(':radio','outline','3px solid green'),returnfun(':radio','outline',''));
	$('#btnSelectReset').toggle(returnfun(':reset','outline','3px solid green'),returnfun(':reset','outline',''));
	//$('#btnSelectSelected').toggle(returnfun(':selected','outline','3px solid green'),returnfun(':selected','outline',''));
	$('#btnSelectSubmit').toggle(returnfun(':submit','outline','3px solid green'),returnfun(':submit','outline',''));
});

function returnfun(element,cssElement,property){
	return function(){
		$(element).css(cssElement,property);
	}
}


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
