// Email function
function sendEmail(params){
	var tempParams = {
		from_name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		subject: document.getElementById("subject").value,
		message: document.getElementById("message").value,
	};
	if (document.getElementById("name").value == "") 
	{
		alert("Please fill your Name");
	}
	else if (document.getElementById("email").value == "") 
	{
		alert("Please fill your Email");
	}
	else if (document.getElementById("subject").value == "") 
	{
		alert("Please fill Subject");
	}
	else if (document.getElementById("message").value == "") 
	{
		alert("Please fill your Message");
	}
	else{
		emailjs.send('service_lt3h5au', 'template_oo7x74w', tempParams)
		.then(function(res){
			alert("Thanks for contacting us !");
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("subject").value = "";
			document.getElementById("message").value = "";
		})
	} 
	
}
