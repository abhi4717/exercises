jQuery.fn.limitText = function(intLength){
	var textLength = $(this).val().length;
	if(textLength > intLength){
		var txt = $(this).val().substring(0,intLength);
		$(this).val(txt);
		$("#numChars").text("0");
	}	
	else{
		$("#numChars").text(intLength-textLength);		
	}
}

jQuery.fn.makeMeRed = function(){
	$(this).addClass("colorMeRed");
}

jQuery.fn.capitalize = function(){
	$(this).text($(this).text().toUpperCase());
}

$("document").ready(function(){
	var maxLimit =100;
	$("#txtText").keyup(function(){
		$("#txtText").limitText(maxLimit);
	});
	$("#numChars").text(maxLimit);
	$("#btnIdChangeColor").click(function(){
		$("#colorRed").makeMeRed();
	});
	$("#btnCapitalize").click(function(){
		$("#capitalize").capitalize();
	});
})
