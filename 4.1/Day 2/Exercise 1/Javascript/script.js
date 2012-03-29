$("document").ready(function(){
	$("form").validate({
		debug: true
		,rules: {
			txtFirstName : "required"
			,txtLastName : "required"
			,txtUserName : "required"
			,txtPassword : "required"
			,txtCPassword : "required"
			,txtEmail : {
										required : true,
										email: true
									}
			,chkPolicy : "required"
			,topic : {
						required: true
						,minlength: 2
					}
		}
		,messages:{
			txtFirstName : "Please enter your first name"
			,txtLastName : "Please enter your last name"
			,txtUserName : "Please enter a User name"
			,txtPassword : "Please enter a password"
			,txtCPassword : "Please enter confirm password"
			,txtEmail : "Please enter a valid email address"
			,chkPolicy : "Please accept out policy"
			,topic : "Please select atleast 2 topics"
		}
		,errorClass : "validationError"
	});

	$("#chkNewsLetter").change(function(){
		if($(this).is(":checked")){
			$("#newsLetter").show();
		}
		else{
			$("#newsLetter").hide();
		}
	});
	
});
