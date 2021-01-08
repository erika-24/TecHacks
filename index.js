function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  error_message.style.padding = "10px";

  var text;
  if (name.length <= 1) {
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (phone.length < 16) {
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }

  if (subject.length <= 1) {
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }

  if (message.length <= 15) {
    text = "Please Enter A Message With More Than 15 Characters";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}

document.getElementsByClassName("descrip").fadeIn(3000);
document.getElementsByClassName("descrip").slideDown("slow");
