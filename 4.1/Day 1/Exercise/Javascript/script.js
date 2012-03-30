$("document").ready(function(){
	var count = $("li:hidden").length;
	$("#btnGetTweets").click(function(){
		$.ajax({
			url: "http://twitter.com/status/user_timeline/jquery.json",
			dataType: "jsonp",
			success: function(data){
				var strAppendData = "";
				for (var i=0;i<data.length;i++){
					strAppendData+="<li>"+data[i].text+"</li>";	
				}
				$(strAppendData).appendTo("#ulTweets").hide();						
			}
		});
	});
	setInterval(function(){
		if($("li:hidden").length>0) $("li:hidden:first").fadeIn(2000).delay(1000);
	},500);
});
