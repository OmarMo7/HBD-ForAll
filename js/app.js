/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('main section');
var numOfSections = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



function smoothScrolling() {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/



smoothScrolling();



// Set sections as active using IntersectionObserver constructor 
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('your-active-class');
    } else {
      entry.target.classList.remove('your-active-class');
    }
  });
}, { rootMargin: "-200px 0px -200px 0px" });

sections.forEach(section => {
  observer.observe(section);
});



// Hiding fixed navigation bar while not scrolling
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function () {
  let timeout = 0;
  if (window.innerWidth > 768) {
    timeout = 70;
  }
  else {
    timeout = 1800;
  }
  // Clear our timeout throughout the scroll
  window.clearTimeout(isScrolling);
  navbar.classList.remove('fadingOut');
  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function () {
    navbar.classList.add('fadingOut');
  }, timeout);
}, false);


var slideShow = document.getElementById('slideshow-container')
const imgSrc = ['img/Adel1.jpg', 'img/Adel2.jpg', 'img/Adel3.jpg', 'img/Adel4.jpg']
const underTextArray = ['عادل روش', 'عادل سرحان وجاضض باين', 'مش كفاية الصورة دى بقا ولا ايه', 'هههه']
var dots = document.createElement('div')
dots.style.textAlign = "center"
dots.setAttribute('id', 'dots')

createSlideShow()

for (let x = 1; x < 5; x++) {
  var span = document.createElement('span')
  span.classList.add('dot')
  span.setAttribute('id', `${x}`)
  dots.appendChild(span)
}


dots.childNodes.forEach(span => {
  span.addEventListener('click', function () {
    currentSlide(span.id)
  })
});


async function createSlideShow() {
  for (let i = 1; i < 5; i++) {

    var mySlidesFade = document.createElement("div")
    var numberText = document.createElement("div")
    var img = document.createElement("img")
    var underText = document.createElement("div")
    var next = document.createElement("a")
    var prev = document.createElement("a")

    next.classList.add('next')
    next.innerHTML = '&#10095;'
    prev.classList.add('prev')
    prev.innerHTML = '&#10094;'

    slideShow.appendChild(mySlidesFade)
    mySlidesFade.appendChild(img)
    mySlidesFade.appendChild(underText)
    numberText.innerHTML = `${i} / 4`
    mySlidesFade.appendChild(numberText)
    slideShow.appendChild(prev)
    slideShow.appendChild(next)



    slideShow.setAttribute('id', 'slideshow-container')
    mySlidesFade.classList.add('mySlides')
    mySlidesFade.classList.add('fade')
    numberText.classList.add('numbertext')
    img.src = `img/Adel${i}.jpg`
    img.setAttribute('style', 'width:600px; height: 650px;  border-radius: 5%;')
    underText.classList.add("text")
    underText.setAttribute('style', "font-family: 'Harmattan', sans-serif; font-size: 1.2em; margin-bottom:10px")
    underText.innerHTML = underTextArray[i - 1]

    next.addEventListener('click', function () {
      plusSlides(1)
    })
    prev.addEventListener('click', function () {
      plusSlides(-1)
    })
  }
}






slideShow.append(dots)

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// var body = document.body.style.background;
var h1_Elements = document.querySelectorAll('h1');
var h2_Elements = document.querySelectorAll('h2');
var nav_Element = document.querySelector('nav');
var section_Elements = document.querySelectorAll('section');
var p_Elements = document.querySelectorAll('p');
var toggleButton = document.getElementById('DarkMode');
var imgs = document.querySelectorAll('.mySlides img');
//Night mode elements
var light_body = 'linear-gradient(0deg, rgb(46, 44, 44) 0 %, rgb(51, 51, 51) 100 %)';
var light_h1_Elements = h1_Elements[0].style.color;
var light_h2_Elements = h2_Elements[0].style.color;
var light_nav_Element = nav_Element.style.backgroundColor;
var light_section_Elements = section_Elements[0].style.color;
var light_p_Elements = p_Elements[0].style.color;
var DarkModeLabel = document.getElementById("DarkModeLabel");
var switchButton = document.querySelector(".switch")

function lightMode() {

  document.body.style.background = 'linear-gradient(0deg, rgb(231, 231, 231) 0%, rgb(159, 159, 159) 100%)';

  for (let i = 0; i < h1_Elements.length; i++) {
    h1_Elements[i].style.color = 'black'
  }


  for (let i = 0; i < h2_Elements.length; i++) {
    h2_Elements[i].style.color = 'black'
  }


  for (let i = 0; i < section_Elements.length; i++) {
    section_Elements[i].style.color = 'black'
  }


  for (let i = 0; i < p_Elements.length - 2; i++) {
    p_Elements[i].style.color = 'black'
  }

  nav_Element.style.backgroundColor = 'rgb(211, 211, 211)';
  DarkModeLabel.innerHTML = "Light Mode"
  DarkModeLabel.style.color = 'rgb(255, 255, 255)'

  let j = 0;
  navbar.innerHTML = '';
  sections.forEach(section => {
    j++;
    navbar.innerHTML += `<li><a href="#${section.id = 'section' + j}" style = "color: rgb(51, 51, 51)">${section.attributes['data-nav'].nodeValue}</a></li>`
  })

}

lightMode();

function nightMode() {

  document.body.style.background = 'linear-gradient(0deg, rgb(46, 44, 44) 0 %, rgb(51, 51, 51) 100%)';


  for (let i = 0; i < h1_Elements.length; i++) {
    h1_Elements[i].style.color = light_h1_Elements
  }


  for (let i = 0; i < h2_Elements.length; i++) {
    h2_Elements[i].style.color = light_h2_Elements
  }


  for (let i = 0; i < section_Elements.length; i++) {
    section_Elements[i].style.color = light_section_Elements
  }


  for (let i = 0; i < p_Elements.length; i++) {
    p_Elements[i].style.color = light_p_Elements
  }

  nav_Element.style.backgroundColor = light_nav_Element;
  DarkModeLabel.innerHTML = "Night Mode"
  DarkModeLabel.color = 'rgb(27, 26, 26)'

  let j = 0;
  navbar.innerHTML = '';
  sections.forEach(section => {
    j++;
    navbar.innerHTML += `<li><a href="#${section.id = 'section' + j}" style = "color: rgb(255, 240, 240)">${section.attributes['data-nav'].nodeValue}</a></li>`
  })
}


function toggle() {
  if (h1_Elements[0].style.color == 'black') {
    document.body.style.background = '';
    nightMode();
    toggleButton.classList.toggle('checked')
    console.log('night')

  }
  else {
    lightMode();
    toggleButton.classList.toggle('checked')
    console.log('light')
  }
  console.log(document.body.style.background)
  console.log(nav_Element.style.backgroundColor)
}


if (screen.availWidth >= 350 && screen.availWidth < 414) {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('style', 'width:340px; height: 380px;')
  }
  DarkModeLabel.style.transform = 'translate(-70px,21px)'
  switchButton.setAttribute('style', `position: relative; display: inline-block;left: 78%;
  width: 60px;
  height: 34px;
  top: 19%;
  transform: translateY(25px);`)
}


if (screen.availWidth >= 414 && screen.availWidth < 800) {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('style', 'width:380px; height: 400px;')
  }

  DarkModeLabel = 'translate(-230%,21px)'
  switchButton.setAttribute('style', `position: relative; display: inline-block;left: 58%;
  width: 60px;
  height: 34px;
  top: 19%;
  transform: translateY(25px);`)

}

if (screen.availWidth >= 800 && screen.availWidth < 1440) {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('style', 'width: 768px; height: 600px;')
  }
}

