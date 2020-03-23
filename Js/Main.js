let section = document.getElementsByTagName('section');
let h2 = document.getElementsByTagName('h2');
let grid  = document.querySelector("#grid");
let ul = document.getElementsByClassName('ulContainer');
let nav = document.getElementsByClassName('Nav');


nav[0].addEventListener('click', function() {
  grid.classList.add('gridSecond');
  for (var i = 0; i < section.length; i++) {
    section[i].classList.add('sectionSecond');
    console.log(i);
    section[i].style.background = "rgb(95,116,143,0.17)";
  }
  for (var i = 0; i < ul.length; i++) {
    ul[i].classList.add('ulSecond');
  }
  for (var i = 0; i < h2.length; i++) {
    h2[i].classList.add('h2second');
  }
  nav[1].style.opacity = "0.5";
  nav[0].style.opacity = "1";
  })


nav[1].addEventListener('click', function() {
  grid.classList.remove('gridSecond');
  for (var i = 0; i < section.length; i++) {
    section[i].classList.remove('sectionSecond');
    console.log(i);
    if (i%2 != 0) {
      section[i].style.background = "none";
    }
  }
  for (var i = 0; i < ul.length; i++) {
    ul[i].classList.remove('ulSecond');
  }
  for (var i = 0; i < h2.length; i++) {
    h2[i].classList.remove('h2second');
  }
  nav[0].style.opacity = "0.5";
  nav[1].style.opacity = "1";
})
