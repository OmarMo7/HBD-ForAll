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
const body = document.querySelector('body')
var isScrolling;
const main = document.querySelector('main')
const slideShow = document.getElementById('slideshow-container')
var dots = document.createElement('div')
var list = document.createElement('ul')
var footer = document.querySelector('footer')
var form = document.querySelector('form')
var login = document.getElementById('login')


var navLightThemeColor = 'rgb(211, 211, 211)'
var navDarkThemeColor = 'rgb(27, 26, 26)'
var DarkThemeColor = 'white'
var LightThemeColor = 'black'

var slideIndex = 1;

const objectContainer = {
  imgForSlider: ['img/Adel1.jpg', 'img/Adel2.jpg', 'img/Adel3.jpg', 'img/Adel4.jpg'],
  underTextSlider: [' عادل روش', 'عادل سرحان وجاضض باين', '', ' مش كفاية الصورة دى بقا ولا ايه  :"D'],
  shortMessage: "You know what!.. I missed You so much man",
  longMessage: 'Hello gmd',
  commentOnSection: ['دى اخر مرة عيّدت عليك فيها كانت من سنتين :"/ .. ساد بشدّة', 'كبر وبقا عنده عشرين سنة بحالها! ..:"D السرحان فى الملكوت', ':"D خلاص نويت تعمل السكسوكة حقتك'],
  imgForSections: ['img/Adel3.jpg', 'img/Adel4.jpg', 'img/Adel2.jpg'],
  forOnly: '',
  specialQuote: ' كل سنة وانت طيب يا دولة  ',
  specialQuoteColor: 'brown'
};

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



login.addEventListener('click', function (e) {
  e.preventDefault()
  var name = document.getElementById('username')
  var password = document.getElementById('password')

  localStorage.setItem('name', name.value);
  localStorage.setItem('password', password.value);
  setTimeout(function () { refreshPage() }, 1000)
  console.log('isPerson: ' + name.value)
  console.log('isPerson: ' + password.value)

})

function refreshPage() {
  window.location.reload();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


function smoothScrolling() {
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Set sections as active using IntersectionObserver constructor 
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
  list.classList.remove('fadingOut');
  // Set a timeout to run after scrolling ends
  isScrolling = setTimeout(function () {
    list.classList.add('fadingOut');
  }, timeout);
}, false);




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function createNav(sections) {
  var navbar = document.createElement('nav')
  var logo = document.createElement('a')
  var upMessage = document.createElement('h1')
  var Name = document.createElement('span')



  navbar.classList.add('navbar__menu')
  logo.setAttribute('href', '/')
  logo.setAttribute('id', 'logo')
  upMessage.textContent = "Happy Birthday My dear friend,"
  Name.textContent = "Dola!"
  Name.setAttribute('id', 'nameInNav')
  list.classList.add('topnav')

  logo.appendChild(upMessage)
  navbar.appendChild(logo)
  navbar.appendChild(list)
  upMessage.appendChild(Name)
  var j = 0
  sections.forEach(section => {
    var list_Element = document.createElement('li')
    j++;
    list_Element.innerHTML += `<a href="#${section.id = 'section' + j}" style = "color: rgb(101, 101, 98)">${section.attributes['data-nav'].nodeValue}</a>`
    list.appendChild(list_Element)
  })
  body.insertBefore(navbar, main)
}

function createSlideShow(objectContainer) {



  let i = 1;
  objectContainer.imgForSlider.forEach(imgName => {
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
    img.src = imgName
    img.classList.add('responsive')
    img.setAttribute('style', 'max-width:100%; max-height: 100%; border-radius: 5%; display:block;')
    underText.classList.add("text")
    underText.setAttribute('style', "font-family: 'Harmattan', sans-serif; font-size: 1.2em; margin-bottom:10px")
    underText.innerHTML = objectContainer.underTextSlider[i - 1]

    next.addEventListener('click', function () {
      plusSlides(1)
    })
    prev.addEventListener('click', function () {
      plusSlides(-1)
    })

    var span = document.createElement('span')
    span.classList.add('dot')
    span.setAttribute('id', `${i}`)
    dots.appendChild(span)
    i++

    span.addEventListener('click', function () {
      currentSlide(span.id)
    })
  })

  dots.style.textAlign = "center"
  dots.setAttribute('id', 'dots')
  slideShow.append(dots)


}

function createNightButton() {
  var div = document.createElement('div')
  var switsh = document.createElement('label')
  var DarkModeLabel = document.createElement('label')
  var DarkMode = document.createElement('input')
  var span = document.createElement('span')
  div.setAttribute('id', 'buttonContainer')
  switsh.setAttribute('class', 'switch')
  DarkModeLabel.setAttribute('for', 'DarkMode')
  DarkModeLabel.setAttribute('id', 'DarkModeLabel')
  DarkModeLabel.textContent = 'Light Mode'
  DarkMode.setAttribute('id', 'DarkMode')
  DarkMode.setAttribute('type', 'checkbox')
  DarkMode.setAttribute('name', 'DarkMode')
  DarkMode.addEventListener('click', function () { toggle() })
  span.classList.add('slider')
  span.classList.add('round')

  div.appendChild(switsh)
  switsh.appendChild(DarkModeLabel)
  switsh.appendChild(DarkMode)
  switsh.appendChild(span)
  body.insertBefore(div, main)


}

function createHeader(objectContainer) {


  var header = document.createElement('header')
  var shortMessage = document.createElement('h1')
  var longMessage = document.createElement('h2')

  header.appendChild(shortMessage)
  header.appendChild(longMessage)


  shortMessage.innerHTML = objectContainer.shortMessage
  longMessage.innerHTML = objectContainer.longMessage
  longMessage.setAttribute('style', "font-family: 'Harmattan', sans-serif; text-align: center;")

  main.appendChild(header)

}
function createSection(objectContainer, specificSectionNum) {
  let i = 0;

  objectContainer.commentOnSection.forEach(Comment => {
    var section = document.createElement('section')
    var landingContainer = document.createElement('div')
    var nameOfSection = document.createElement('h2')
    var commentOnSection = document.createElement('p')
    var img = document.createElement('img')

    section.appendChild(landingContainer)
    landingContainer.appendChild(nameOfSection)
    landingContainer.appendChild(commentOnSection)
    section.appendChild(img)

    section.setAttribute('id', 'section1')
    section.setAttribute('data-nav', `Section ${i + 1}`)
    nameOfSection.textContent = `Section ${i + 1}`
    landingContainer.classList.add('landing__container')
    commentOnSection.setAttribute('style', "font-family: 'Harmattan', sans-serif;")
    img.setAttribute('src', objectContainer.imgForSections[i])
    img.setAttribute('style', "width:300px; height: 310px; border-radius: 10%;")

    commentOnSection.textContent = Comment
    if (i + 1 == specificSectionNum) {
      var specialQuote = document.createElement('span')
      specialQuote.textContent = objectContainer.specialQuote
      specialQuote.style.color = objectContainer.specialQuoteColor
      commentOnSection.append(specialQuote)
    }
    main.appendChild(section)
    i++
  })
}
// Next/previous controls
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

function createFooter(objectContainer) {
  var footer = document.createElement('footer')
  var copy = document.createElement('p')
  var forOnly = document.createElement('p')
  footer.classList.add('page__footer')
  footer.setAttribute('id', 'page__footer')
  copy.innerHTML = '&copy OmarMostafa'
  forOnly.textContent = objectContainer.forOnly
  footer.appendChild(copy)
  footer.appendChild(forOnly)
  body.appendChild(footer)
}

if (localStorage.getItem('name') == 'omar' && localStorage.getItem('password') == 'ooo') {
  form.setAttribute('style', 'display:none;')
  smoothScrolling()
  createSlideShow(objectContainer)
  showSlides(slideIndex)
  createHeader(objectContainer)
  createSection(objectContainer, 3)

  const sections = document.querySelectorAll('main section');
  createNav(sections)
  createNightButton()
  createFooter(objectContainer)
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



  var nav = document.querySelector('nav')
  var h1_Elements = document.querySelectorAll('h1');
  var h2_Elements = document.querySelectorAll('h2');
  var section_Elements = document.querySelectorAll('nav ul li a');
  var p_Elements = document.querySelectorAll('p');
  var toggleButton = document.getElementById('DarkMode');
  var DarkModeLabel = document.getElementById("DarkModeLabel");
  var switchButton = document.querySelector(".switch")
  var footerElements = document.querySelectorAll('footer p')



  lightMode();
}



//Night mode elements


function lightMode() {
  console.log(section_Elements)

  document.body.style.background = 'linear-gradient(0deg, rgb(231, 231, 231) 0%, rgb(159, 159, 159) 100%)';

  h1_Elements.forEach(element => {
    element.style.color = LightThemeColor
  })


  h2_Elements.forEach(element => {
    element.style.color = LightThemeColor
  })


  section_Elements.forEach(element => {
    element.style.color = LightThemeColor
  })


  p_Elements.forEach(element => {
    if (element.parentElement.id != 'page__footer') {
      element.style.color = LightThemeColor
    }
  })

  nav.style.backgroundColor = navLightThemeColor;
  DarkModeLabel.innerHTML = "Light Mode"
  DarkModeLabel.style.color = 'rgb(255, 255, 255)'
}


function nightMode() {

  document.body.style.background = 'linear-gradient(0deg, rgb(46, 44, 44) 0%, rgb(51, 51, 51) 100%)';


  h1_Elements.forEach(element => {
    element.style.color = DarkThemeColor
  })


  h2_Elements.forEach(element => {
    element.style.color = DarkThemeColor
  })


  section_Elements.forEach(element => {
    element.style.color = DarkThemeColor
  })


  p_Elements.forEach(element => {
    if (element.parentElement.id != 'page__footer') {
      element.style.color = DarkThemeColor
    }
  })

  nav.style.backgroundColor = navDarkThemeColor;
  DarkModeLabel.innerHTML = "Night Mode"
  DarkModeLabel.color = 'rgb(27, 26, 26)'
}


function toggle() {
  if (h1_Elements[0].style.color == 'black') {
    document.body.style.background = '';
    nightMode();
    toggleButton.classList.toggle('checked')

  }
  else {
    lightMode();
    toggleButton.classList.toggle('checked')
  }

}


localStorage.removeItem('name')
localStorage.removeItem('password')
var imgs = document.querySelectorAll('section img');

let s = 1
imgs.forEach(img => {
  if (s % 2 == 1) {
    img.setAttribute('style', `width: 100%;
height: 100%;
border-radius: 10%;
float: left;
position: relative;
max-width: 350px;`)
  }
  else {
    img.setAttribute('style', `width: 100%;
height: 100%;
border-radius: 10%;
float: right;
position: relative;
max-width: 350px;`)
  }
  s++;
})



