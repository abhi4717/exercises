function addList(){
	var olList = document.getElementById('list');
	var todoItemDescription = document.getElementsByName('nameOfItem');
	
	if(todoItemDescription != null && todoItemDescription[0].value.length>0 &&  validateLength()){
		var description = todoItemDescription[0].value;
		var nodeCheckbox = createCheckboxNode(description,olList);
		todoItemDescription[0].value = '';

		// Update the count
		var lblCount = document.getElementById('toDoCount');
		if(lblCount != null){
			if(!lblCount.hasChildNodes()){
				lblCount.appendChild(document.createTextNode(''));
			}
			lblCount.childNodes[0].nodeValue = olList.getElementsByTagName('input').length;
		}
		// Update the Timestamp
		var lblTimeStamp = document.getElementById('timestamp');
		var timestamp = getTimestamp();
		if(lblTimeStamp != null && timestamp != null){
			if(!lblTimeStamp.hasChildNodes()){
				lblTimeStamp.appendChild(document.createTextNode(''));
			}
			lblTimeStamp.childNodes[0].nodeValue = timestamp;	
		}
	}
	else if(todoItemDescription[0].value.length == 0){
		alert('Please enter text');
		todoItemDescription[0].focus();	
	}
}

function createCheckboxNode(strDescription, parentNode){
	var newList = document.createElement('input');
	newList.setAttribute('type','checkbox');
	newList.style.margin = '10px';
	var txtListTextNode = document.createTextNode(strDescription);
	parentNode.appendChild(newList);
	parentNode.appendChild(txtListTextNode);
	parentNode.appendChild(document.createElement('br'));
}

function searchGoogle(){
	var txtSearch = document.getElementById('txtSearch');
	if(txtSearch != null && txtSearch.value.length > 0){
		window.open('http://www.google.co.in/search?q='+txtSearch.value);
	}

}

function getTimestamp(){
	var currentTime = new Date();
	var seconds = currentTime.getSeconds();
	if(seconds < 10) seconds = '0' + seconds;
	var mins = currentTime.getMinutes();
	if(mins < 10) mins = '0' + mins;
	var hours = currentTime.getHours();
	if(hours < 10) hours = '0'+hours;
	var date = currentTime.getDate();
	if(date < 10) date = '0' + date;
	var months = currentTime.getMonth() + 1;
	if(months < 10) months = '0' + months;
	var year = currentTime.getFullYear();
	var timestamp = months+ '/' +date+ '/'+year+ '  ' +hours + ':'+mins+':'+seconds;
	return timestamp;
}

function validateLength(){
	var todoItemDescription = document.getElementsByName('nameOfItem');
	if(todoItemDescription != null){
		if(todoItemDescription[0].value.length>200){
			alert('Text length can not exceed 200 characters');
			todoItemDescription[0].value = todoItemDescription[0].value.substring(0,200);
			return false;
		}
	}
	return true;
}

