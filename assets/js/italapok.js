let tabs = document.querySelectorAll(".tabs h3");

let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});



function menuopen() {
  document.getElementById('menuopen').style.display = 'none'
  document.getElementById('tabs').style.display = 'block'
  document.getElementById('menuclose').style.display = 'block'

}

function menuclose() {
  document.getElementById('menuopen').style.display = 'block'
  document.getElementById('tabs').style.display = 'none'
  document.getElementById('menuclose').style.display = 'none'

}