var enumSelectors = {
	'SELECTALL' : 0,
	'SELECTELEMENT' : 1,
	'SELECTCLASS' : 2,
	'SELECTATTRIBUTE' : 3,
	'SELECTFIRSTELEMENT' : 4,
	'SELECTLASTELEMENT' : 5,
	'SELECTODDELEMENT' : 6,
	'SELECTEVENELEMENT' : 7,
	'SELECTNONEMPTY' : 8,
	'SELECTEMPTY' : 9
};

$("document").ready(function() {
	// Example
	// Use basic selectors, basic filters, attribute selectors, content filters, hierarchy filters
	$('#button1').toggle(function() {
		$("p").css("border", "3px solid red");
	}, function() {
		$("p").css("border", "");
	});
	
	$('#btnSelectAll').toggle(getFunction(enumSelectors.SELECTALL,true),getFunction(enumSelectors.SELECTALL,false));
	$('#btnSelectElementType').toggle(getFunction(enumSelectors.SELECTELEMENT,true),getFunction(enumSelectors.SELECTELEMENT,false));
	$('#btnSelectClass').toggle(getFunction(enumSelectors.SELECTCLASS,true),getFunction(enumSelectors.SELECTCLASS,false));
	$('#btnSelectAttribute').toggle(getFunction(enumSelectors.SELECTATTRIBUTE,true),getFunction(enumSelectors.SELECTATTRIBUTE,false));
	$('#btnSelectFirst').toggle(getFunction(enumSelectors.SELECTFIRSTELEMENT,true),getFunction(enumSelectors.SELECTFIRSTELEMENT,false));
	$('#btnSelectLast').toggle(getFunction(enumSelectors.SELECTLASTELEMENT,true),getFunction(enumSelectors.SELECTLASTELEMENT,false));
	$('#btnSelectOdd').toggle(getFunction(enumSelectors.SELECTODDELEMENT,true),getFunction(enumSelectors.SELECTODDELEMENT,false));
	$('#btnSelectEven').toggle(getFunction(enumSelectors.SELECTEVENELEMENT,true),getFunction(enumSelectors.SELECTEVENELEMENT,false));
	$('#btnSelectContains').toggle(getFunction(enumSelectors.SELECTNONEMPTY,true),getFunction(enumSelectors.SELECTNONEMPTY,false));
	$('#btnSelectEmpty').toggle(getFunction(enumSelectors.SELECTEMPTY,true),getFunction(enumSelectors.SELECTEMPTY,false));
});

function getFunction(enumSelected, bHightlight){
	var func=null;
	var selector=null;
	switch(enumSelected){
		case enumSelectors.SELECTALL: {
			selector = '*';
			break;
		}
		case enumSelectors.SELECTELEMENT : {
			selector = 'li';
			break;
		}
		case enumSelectors.SELECTCLASS : {
			selector = '.a';
			break;
		}
		case enumSelectors.SELECTATTRIBUTE : {
			selector = '*[class=b]';
			break;
		}
		case enumSelectors.SELECTFIRSTELEMENT : {
			selector = 'li:first';
			break;
		}
		case enumSelectors.SELECTLASTELEMENT : {
			selector = 'li:last';
			break;
		}
		case enumSelectors.SELECTODDELEMENT : {
			selector = 'li:even';
			break;
		}
		case enumSelectors.SELECTEVENELEMENT : {
			selector = 'li:odd';
			break;
		}
		case enumSelectors.SELECTNONEMPTY : {
			selector = ':contains("list")';
			break;
		}
		case enumSelectors.SELECTEMPTY : {
			selector = ':empty';
			break;
		}
	}

	if(bHightlight){
		func = getHighlightFunction(selector);
	}
	else{
		func = getNoHighlightFunction(selector);
	}
	return func;
}


function getHighlightFunction(strElement){
	return function(){
		$(strElement).css('background-color','yellow');
		$(strElement).css('border','2px solid red');
	}
}

function getNoHighlightFunction(strElement){
	return function(){
		$(strElement).css('background-color','white');
		$(strElement).css('border','');
	}
}

