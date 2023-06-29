// Global Variables
const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];
const navList = document.getElementById("navbar__list");
const menuLinks = document.getElementsByClassName("menu__link");
const sectionElements = document.getElementsByClassName("section");
const scrollButton = document.getElementById("scroll-btn");

// build the nav
for (let i = 0; i < sections.length; i++) {
  let menuItem = document.createElement("li");
  menuItem.classList.add(`section${i + 1}`);
  menuItem.innerHTML += `<a href="#section${i + 1}" class="menu__link">${
    sections[i]
  }</a>`;
  navList.appendChild(menuItem);
}

// Add class 'active' to section when near top of viewport
function setActive() {
  for (let i = 0; i < sectionElements.length; i++) {
    const top = sectionElements[i].offsetTop;
    const sectionHeight = sectionElements[i].clientHeight;
    // that is for not waiting the previous section to be scrolled totally
    if (pageYOffset > top - sectionHeight / 3) {
      // remove class 'active' from the previous link before adding the class to another link
      const previuoslyClicked = document.getElementsByClassName("active");
      if (previuoslyClicked.length > 0) {
        previuoslyClicked[0].className = previuoslyClicked[0].className.replace(
          " active",
          ""
        );
      }
      menuLinks[i].className += " active";
    }
  }
}

// Scrolling smoothly to the selected section from nav menu
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    const previuoslyClicked = document.getElementsByClassName("active");
    // remove class 'active' from the previous link before adding the class to another link
    if (previuoslyClicked.length > 0) {
      previuoslyClicked[0].className = previuoslyClicked[0].className.replace(
        " active",
        ""
      );
    }
    menuLinks[i].className += " active";
    document.getElementById(`section${i + 1}`).scrollIntoView({
      behavior: "smooth",
    });
  });
}

// window.onscroll = function(){
// if(document.documentElement.scrollTop > 20){
//     scrollButton.style.display = "block";
// }else{
//     scrollButton.style.display = "none";
// }
// }

// scroll to top
// function scrollToTop(){
//     document.documentElement.ScrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// }