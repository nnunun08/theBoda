const html = document.querySelector('html')
const gnb = document.querySelector('.gnb')
const toggleBtn = document.querySelector('.gnb .hambuger')
toggleBtn.addEventListener('click', function(){
    gnb.classList.toggle('menuOpen')
    html.classList.toggle('scrollStop')
}) 