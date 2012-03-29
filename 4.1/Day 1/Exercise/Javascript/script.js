$("document").ready(function(){
	var count = $("li:hidden").length;
	$("#btnGetTweets").click(function(){
		$.ajax({
			url: "http://twitter.com/status/user_timeline/jquery.json",
			dataType: "jsonp",
			success: function(data){
				for (var i=0;i<data.length;i++){
					$("<li>"+data[i].text+"</li>").appendTo("#ulTweets").hide();
				}						
			}
		});
	});
	setInterval(function(){
		if($("li:hidden").length>0) $("li:hidden:first").fadeIn(2000).delay(1000);
	},500);
});
