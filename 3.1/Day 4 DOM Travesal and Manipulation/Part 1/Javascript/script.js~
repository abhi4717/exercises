$("document").ready(function() {
// Change html,
// Add handling for creating elements, append, prepend and warp around elements
	$('#btnToggleClass').click(toggleClasses);
	$('#btnGetContent').click(getFirstParagraphText);
	$('#btnSetContent').click(setLastParagraphText);
	$('#btnChangeContent').click(changeContent);
	$('#btnAddClass').click(addClassLastPara);
	$('#btnRemoveClass').click(removeClassLastPara);
	$('#btnAttribute').click(getAttributeValue);
	$('#btnAppend').click(appendList);
	$('#btnPrepend').click(prependList);
	$('#btnInsertAfter').click(insertAfterList);
	$('#btnInsertBefore').click(insertBeforeList);
	$('#btnWrap').click(wrapElement);
	$('#btnClone').click(cloneMe);
});

function getAttributeValue(){
	alert($('ul').attr('id'));
}

function toggleClasses(){
	$('*').toggleClass('a b');
}

function getFirstParagraphText(){
	alert($('p:first').text());
}

function setLastParagraphText(){
	$('p:last').text('This is text set on button click');
}

function changeContent(){
	$('p:first').text($('p:first').text().replace(/\bis\b/,'was'));
}

function addClassLastPara(){
	$('p:last').addClass('d');
}

function removeClassLastPara(){
	$('p:last').removeClass();
}

function appendList(){
	$('li').append('<li> Appended list </li>');
}

function prependList(){
	$('li').prepend('<li> Prepended list </li>');
}

function insertAfterList(){
	$('<li> Inserted after list </li>').insertAfter('li:even');
}

function insertBeforeList(){
	$('<li> Inserted before list </li>').insertBefore('li:odd');
}

function wrapElement(){
	$('p').wrap('<div class="borderColor" />');
}

function cloneMe(){
	$('p').clone().appendTo('p');
}
