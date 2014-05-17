
// @contact data
	var contactData = {};
	var services = {};
		
	
	$("#CPWMform").validate(
			
			{
				debug:true,
				rules:{
							fname:"required",
						lname:"required",
						userPhone:"required",
						userEmail:"required",
						services:"required",
						contactTime:"required",
				email:
					{
						required:true,
						email:true
					},
					
						
					
				messages: 
					{	
						fname: "Please enter your first name.",
						lname: "Please enter your last name.",
						userEmail: 
							{
								required: "Please enter your email",
								email: "Email format: name@emailprovider.com."
							 },
						userPhone: "Please enter your phone number.",
						services: "What services are you interested in?",
						contactTime: "Let us know when you get in touch with you."
					}
				},
				submitHandler: function(form) 
					{			
							
							// Cycles through all checkboxes in #checks //
							// & determined if it is checked.           // 
							$("#checks input:checkbox").each(function(){
								var num = 1;	
								if ($(this).is(':checked')) {
									var value = $(this).val();
									var id = $(this).attr("id");
									services[id] = value;
									
								} 
							});
							console.log(services);
						contactData.jsData = true;
						contactData.fname = $("#fname").val();
						contactData.lname = $("#lname").val();
						contactData.email = $("#userEmail").val();
						contactData.phone = $("#userPhone").val();
						contactData["services"] = services;
						contactData.contactTime = $("#contactTime").val();  						
   						//$("#CPWMform").ajaxSubmit(validateOptions);
							$.ajax({
									type:"POST",
								url:"process.php",
									data: {
											contactData:contactData,
											services:services
											},
									success:function(data){
										//console.log(contactData.fname+" "+contactData.fname);
										console.log(data);	
										},
								error: function(data){console.log("you suck");}
						});
							console.log("clicked");
							//console.log(contactData);
					}
			
			
	});
