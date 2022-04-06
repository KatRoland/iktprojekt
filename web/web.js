 // responzivitás
function Responsive() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

// Oldalmegnyitó
function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
}

// Kereses
function keres() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("kereso");
  filter = input.value.toUpperCase();
  ul = document.getElementById("temav");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    summary = li[i].getElementsByTagName("summary")[0];
    if (summary.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Oldalsáv
function nyit() {
  document.getElementById("Oldalsav").style.width = "300px";
}

function zar() {
  document.getElementById("Oldalsav").style.width = "0";
}

// Bezár
const a = document.querySelectorAll("details");

a.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    a.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

// Téma
