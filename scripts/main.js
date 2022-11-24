//allows us to use different css styling when there is no JS active on the page
const bod = document.querySelector('body');
bod.classList.remove('no-js');
bod.classList.add('js');

//stores the nav and the menu link
const mainNav = document.querySelector('nav.pathway');
const menuLink = document.querySelector('.menu-link')

//adds an event listener to toggle the class of active on both the menu link and the main nav so that element can be "opened up" on click
menuLink.addEventListener( "click", function(){
    menuLink.classList.toggle('active');
    mainNav.classList.toggle('active');
    return false; //exits the function
})

//grabs all the anchor tags that are internal referenced by the #
const links = document.querySelectorAll('a[href^="#"]');

//modern for loop.
for (const link of links) {
//adds an event listener to each one.
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  //finding what the client height of the internal nav is important because when it is sticky the nav is sometimes out of the document flow and the element's absence must be compensated for (why the need for offset-navH)
  const navH = document.querySelector('nav#internal').clientHeight;
  const offsetTop = document.querySelector(href).offsetTop-navH;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


