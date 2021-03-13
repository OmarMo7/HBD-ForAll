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



var DarkThemeColor = 'white'
var LightThemeColor = 'black'
// var gifSrc = 'https://media.giphy.com/media/l0MYAs5E2oIDCq9So/source.gif'
var slideIndex = 1;

const objectContainer = {
  name: 'Hager',
  nameColor: '#ff1a1a',
  upMessage: 'Happy Birthday My dear friend, ',
  imgForSlider: [
    'img/HagerLook.png',
    'img/HagerWow.png',
    'img/HagerAgain.jpg',
    'img/HagerHides.jpg'
  ],
  underTextSlider: [
    '&#128514 &#128562 يعنى انا طلعت اعرف أنغام شخصيا ',
    '&#128151 &#128153',
    'شكلنى بطلعم الأفراح.. لونّى بلون التفاح',
    'وبطعم المانجة وكمانجة تعزفلى عالجرح ارتاح'
  ],
  shortMessage: "I am so gratful for knowing such a girl &#128150",
  longMessage: '&#128526 عشان اقولك كل سنة وانتى طيبة عادى كده!.. متجيش &#128521 لازم حاجة سبيشيال ',
  commentOnSection: [
    '&#128525 والله يا بنتى حيرتينى احطلك ايه ولا ايه .. بجد ما شاء الله عليكى حقيقى تحف فنية ',
    '&#128569	&#128149 هاجر وهيا دحيحة &#129299	.. بالمناسبة عاجبانى النضارة  ',
    '&#128514 لما تيجى تحتفلى بعيد ميلادك وانتى بتذاكرى اليومين دول ',
    '&#128420 &#129509 ممكن البالطو الأبيض يليق بك .. بس الأسود هيبقى أكيد أحلى  ',
    '&#129488 جميلة هى حالاتك عالواتس ',
    ' &#128525 انتوا حاجة جميلة أوى ف حياة البنى ادم &#129303.. ربنا يحفظكم لبعض',
    'شوفى يا ستى انا مش عارف اقول ايه.. يعنى انتى غالية علينا اوى وحقيقة يعنى ومن غير هزار '
  ],
  nameOfSectionEven: '&#127881',
  nameOfSectionOdd: '&#127879'
  ,
  imgForSections: [
    'img/gallery.gif',
    'img/HagerGlasses.png',
    'img/whatACelebrate.png',
    'img/HagerDoctor.jpg',
    'img/HagerQuote.png',
    'img/HagerWithMeray.png',
    'img/HagerWow.png'
  ],
  specificSectionNum: 7,
  lightThemeBody: 'linear-gradient(0deg, rgb(231, 231, 231) 0%, #ff4d4d 100%)',
  navLightThemeColor: '	#cc0000',
  navDarkThemeColor: 'rgb(27, 26, 26)',
  forOnly: '',
  specialQuote: '&#128519 انتى بقيتى اقدم واحدة اعرفها فحياتى من ساعة الحضانة ولسه عارفين بعض وبنتكلم  ',
  specialQuoteColor: 'brown',
  quoteAfter: '&#128120 انتى جدعةاوى وأصلك طيب وبيتك بيت بركة &#128142 ربنا يا هاجر يحفظلك أهلك وحبايبك ويسعدنا برؤياكى فرحانة علطول'
};

var isUser = false

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
function createSideNav() {
  var div = document.createElement('div')
  var closeNavButton = document.createElement('a')
  var span = document.createElement('span')

  div.id = 'mySidenav'
  div.classList.add('sidenav')
  closeNavButton.classList.add('closebtn')
  closeNavButton.innerHTML = "&times;"
  closeNavButton.addEventListener('click', function () {
    closeNav()
  })
  span.innerHTML = "&#9776;"
  span.style = "font-size:30px;cursor:pointer"
  span.addEventListener('click', function () {
    openNav()
  })

  div.appendChild(closeNavButton)
  body.appendChild(div)
  // body.insertBefore(span, main)
}

function createNav(sections, objectContainer) {
  var navbar = document.createElement('nav')
  var logo = document.createElement('a')
  var upMessage = document.createElement('h1')
  var Name = document.createElement('span')

  navbar.classList.add('navbar__menu')
  logo.setAttribute('href', '/')
  logo.setAttribute('id', 'logo')
  upMessage.innerHTML = objectContainer.upMessage
  Name.innerHTML = objectContainer.name + "!"
  Name.setAttribute('id', 'nameInNav')
  Name.style.color = objectContainer.nameColor
  list.classList.add('topnav')

  logo.appendChild(upMessage)
  navbar.appendChild(logo)
  upMessage.appendChild(Name)
  //sideNav
  var div = document.createElement('div')
  var closeNavButton = document.createElement('a')
  var span = document.createElement('span')

  div.id = 'mySidenav'
  div.classList.add('sidenav')
  closeNavButton.classList.add('closebtn')
  closeNavButton.innerHTML = "&times;"
  closeNavButton.addEventListener('click', function () {
    closeNav()
  })
  span.innerHTML = "&#9776;"
  span.style = "font-size:30px;cursor:pointer"
  span.addEventListener('click', function () {
    openNav()
  })

  div.appendChild(closeNavButton)
  body.appendChild(div)
  navbar.appendChild(span)
  //
  var j = 0
  sections.forEach(section => {
    var list_Element = document.createElement('li')
    j++;
    list_Element.innerHTML += `<a href="#${section.id = 'section' + j}" style = "color: rgb(101, 101, 98)">${section.querySelector('p').innerHTML.substr(0, 15) + '...'}</a>`
    list.appendChild(list_Element)
  })
  div.appendChild(list)
  body.insertBefore(navbar, main)
}

function createSlideShow(objectContainer) {



  let i = 0;
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
    numberText.innerHTML = `${i + 1} / ${objectContainer.imgForSlider.length}`
    mySlidesFade.appendChild(numberText)
    slideShow.appendChild(prev)
    slideShow.appendChild(next)



    slideShow.setAttribute('id', 'slideshow-container')
    mySlidesFade.classList.add('mySlides')
    mySlidesFade.classList.add('fade')
    numberText.classList.add('numbertext')
    img.src = imgName
    img.classList.add('responsive')
    img.setAttribute('style', ' border-radius: 5%; display:block;')
    underText.classList.add("text")
    underText.setAttribute('style', "font-family: 'Harmattan', sans-serif; font-size: 1.2em; margin-bottom:10px")
    underText.innerHTML = objectContainer.underTextSlider[i]

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
  DarkModeLabel.innerHTML = 'Light Mode'
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
  shortMessage.setAttribute('style', "text-align: center; margin: 2em 1rem")
  longMessage.innerHTML = objectContainer.longMessage
  longMessage.setAttribute('style', "font-family: 'Harmattan', sans-serif; text-align: center;")

  main.appendChild(header)

}
function createSection(objectContainer) {
  let i = 0;

  objectContainer.imgForSections.forEach(Img => {
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
    nameOfSection.style.textAlign = 'right'
    if (i % 2 == 0) nameOfSection.innerHTML = objectContainer.nameOfSectionEven
    else nameOfSection.innerHTML = objectContainer.nameOfSectionOdd
    landingContainer.classList.add('landing__container')
    commentOnSection.setAttribute('style', "font-family: 'Harmattan', sans-serif;")
    img.setAttribute('src', Img)
    console.log(objectContainer.imgForSections[i])
    console.log(objectContainer.imgForSections[0])
    console.log(i)
    img.setAttribute('style', "width:100%;")

    commentOnSection.innerHTML = objectContainer.commentOnSection[i]
    if (i + 1 == objectContainer.specificSectionNum) {
      var specialQuote = document.createElement('span')
      var quoteAfter = document.createElement('span')
      var br = document.createElement('br')
      specialQuote.innerHTML = objectContainer.specialQuote
      specialQuote.style.color = objectContainer.specialQuoteColor
      quoteAfter.innerHTML = objectContainer.quoteAfter
      commentOnSection.append(specialQuote)
      commentOnSection.append(br)
      commentOnSection.append(quoteAfter)
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
  forOnly.innerHTML = objectContainer.forOnly
  footer.appendChild(copy)
  footer.appendChild(forOnly)
  body.appendChild(footer)
}

if ((localStorage.getItem('name') == 'Hager' || localStorage.getItem('name') == 'hager') && localStorage.getItem('password') == 'hhh') {

  isUser = true
  // createSideNav()
  smoothScrolling()
  createSlideShow(objectContainer)
  showSlides(slideIndex)
  createHeader(objectContainer)
  createSection(objectContainer)
  const sections = document.querySelectorAll('main section');
  createNav(sections, objectContainer)
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



  lightMode(objectContainer);
}
else {
  createForm(isUser)
  document.querySelectorAll('.snowflake').forEach(one => {
    one.setAttribute('style', 'display:none;')
  })
}


function createForm(isUser) {
  console.log(isUser)
  if (isUser) return;
  var form = document.createElement('form')
  var container = document.createElement('div')
  var labelUser = document.createElement('label')
  var labelPassword = document.createElement('label')
  var userInput = document.createElement('input')
  var passInput = document.createElement('input')
  var loginButton = document.createElement('button')

  labelUser.innerHTML = '<b>Username</b>'
  labelPassword.innerHTML = '<b>Password</b>'
  loginButton.innerHTML = 'Login'
  labelUser.setAttribute('for', 'uname')
  labelPassword.setAttribute('for', 'psw')
  userInput.setAttribute('type', 'text')
  passInput.setAttribute('type', 'password')
  loginButton.setAttribute('type', 'submit')
  userInput.setAttribute('placeholder', 'Enter Username')
  passInput.setAttribute('placeholder', 'Enter Password')
  userInput.setAttribute('name', 'uname')
  passInput.setAttribute('name', 'psw')
  userInput.setAttribute('required', '')
  passInput.setAttribute('required', '')
  form.setAttribute('method', 'post')
  userInput.id = 'username'
  passInput.id = 'password'
  loginButton.id = 'login'

  loginButton.addEventListener('click', function (e) {
    e.preventDefault()
    var name = document.getElementById('username')
    var password = document.getElementById('password')

    localStorage.setItem('name', name.value);
    localStorage.setItem('password', password.value);
    setTimeout(function () { refreshPage() }, 1000)
    console.log('isPerson: ' + name.value)
    console.log('isPerson: ' + password.value)

  })

  container.classList.add('container')
  container.appendChild(labelUser)
  container.appendChild(userInput)
  container.appendChild(labelPassword)
  container.appendChild(passInput)
  container.appendChild(loginButton)
  form.appendChild(container)
  body.appendChild(form)
}



//Night mode elements

function lightMode(objectContainer) {
  console.log(section_Elements)

  document.body.style.background = objectContainer.lightThemeBody;

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

  nav.style.backgroundColor = objectContainer.navLightThemeColor;
  DarkModeLabel.innerHTML = "Light Mode"
  DarkModeLabel.style.color = 'rgb(255, 255, 255)'
}


function nightMode(objectContainer) {

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

  nav.style.backgroundColor = objectContainer.navDarkThemeColor;
  DarkModeLabel.innerHTML = "Night Mode"
  DarkModeLabel.color = 'rgb(27, 26, 26)'
}


function toggle() {
  if (h1_Elements[0].style.color == 'black') {
    document.body.style.background = '';
    nightMode(objectContainer);
    toggleButton.classList.toggle('checked')

  }
  else {
    lightMode(objectContainer);
    toggleButton.classList.toggle('checked')
  }

}


localStorage.removeItem('name')
localStorage.removeItem('password')
var imgs = document.querySelectorAll('section img');

let s = 1
imgs.forEach(img => {
  console.log(img.getBoundingClientRect().width)
  console.log(img.getBoundingClientRect().height)
  if (img.getBoundingClientRect().width < 450) {
    console.log(s)
    if (s % 2 == 1) {

      img.setAttribute('style', `
border-radius: 10%;
position: relative;
min-width: 20%;
max-width: 40%;`)
    }
    else {
      img.setAttribute('style', `
border-radius: 10%;
position: relative;
min-width: 20%;
max-width: 40%;`)
    }
  }
  else {
    console.log(s)
    if (s % 2 == 1) {

      img.setAttribute('style', `
border-radius: 10%;
position: relative;
min-width: 20%;
max-width: 23%;`)
    }
    else {
      img.setAttribute('style', `
border-radius: 10%;
position: relative;
min-width: 20%;
max-width: 23%;`)
    }
  }


  s++;

})
