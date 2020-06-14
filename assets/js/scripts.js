// CONTACT FORM

var contactForm = $("form#contactForm");
contactForm.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_oU8C6TYI";

  contactForm.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,contactForm[0])
  	.then(function(){ 
    	alert("Sent!");
       contactForm.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       contactForm.find("button").text("Send");
    });
  return false;
});


// TO TOP BUTTON
toTopButton = document.getElementById("toTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}