const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav-link'),
  navMenu = document.getElementById('nav-menu')

function linkAction(){
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
    }else{
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}

window.onscroll = () => {
  const nav = document.getElementById('header')
  if(this.scrollY >= 150) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

function filter(e){
  search = e.value.toLowerCase();
  console.log(e.value)
  document.querySelectorAll('.name_item').forEach(function(row){
     text = row.innerText.toLowerCase();
      if(text.indexOf(search) == -1){
        row.style.display = 'none';
      }else{
        row.style.display = 'flex';
      }
  });
}

function filterCollection(e){
  search = e.toLowerCase();
  console.log(e)
  document.querySelectorAll('.name_item').forEach(function(row){
     text = row.innerText.toLowerCase();
      if(text.indexOf(search) == -1){
        row.style.display = 'none';
      }else{
        row.style.display = 'flex';
      }
  });
}

/* function desconto() {
  cupom = '0';
  var input = document.querySelector("#cupom");
  var cupom = input.value;
  var desconto = 0;
  console.log(cupom)
  if (cupom == '0') {
    desconto = 0;
  }
  if (cupom == 'cap15') {
    desconto = 0.15;
  }
  console.log(desconto)
  return desconto;
} */