// TO TOP BUTTON
mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// CONTACT ALERT
function empty() {
  let emptyForm;
  emptyForm = document.getElementById("fname").value,
    document.getElementById("email").value,
    document.getElementById("message").value;

  if (emptyForm == "") {
    alert("Please fill all required fields.");
  } else {
    alert("You message has been sent!")
  }

}