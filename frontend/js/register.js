function validateFirstName(){
    var fName = document.getElementById("firstName").value;
	var regex = /^[a-zA-Z\s\'\-]{2,15}$/;
	 
	 if(regex.test(fName))
	 {
	   document.getElementById("firstNamePrompt").style.color="Green";
	   document.getElementById("firstNamePrompt").innerHTML="<strong>valid</strong>";
	   return true;
	}
	
}
function validateLastName(){
    var lName = document.getElementById("lastName").value;
	var re2 = /^[a-zA-Z\s\'\-]{2,25}$/;
	
	if(re2.test(lName)){
	   document.getElementById("lastNamePrompt").style.color="Green";
	   document.getElementById("lastNamePrompt").innerHTML="<strong>valid</strong>";
	   return true;
	}
	else {
	   document.getElementById("lastNamePrompt").style.color="Red";
	   document.getElementById("lastNamePrompt").innerHTML="<strong>Enter 2-25 characters</strong>";
	   return false;
	}
}
function validateCpass() {
     var Password = document.getElementById("Password").value;
     var confirmPassword = document.getElementById("cpass").value;
     if (Password != confirmPassword) {
           alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
           return false;
           }
           return true;
    }
function validatePhone()
{
    var phoneNumber = document.getElementById("phone").value;
	var re4 = /^\d{10}$/;
	
	if(re4.test(phoneNumber)){
	   document.getElementById("phonePrompt").style.color="Green";
	   document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>";
	   return true;
	}
	else {
	   document.getElementById("phonePrompt").style.color="Red";
	   document.getElementById("phonePrompt").innerHTML="<strong>Enter a valid Phone Number</strong>";
	   return false;
    }
}
function validatebutton(){
	var register = document.getElementById("f").value;
	if(onclick="Register"){
		alert("successfully register");
		return true;
	}
	return false;
}