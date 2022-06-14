function mobileMenu() {
  var x = document.getElementById("mobMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function closeOnLinkClick(){
  document.getElementById("mobMenu").style.display = "none"
  }