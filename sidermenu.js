let menu = document.querySelector('.menu');
let navigation = document.querySelector('.navigation');


menu.onclick = function(){
    navigation.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => 
item.addEventListener('click', activeLink));

