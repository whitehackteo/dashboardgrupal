
let menu = document.querySelector('.menu');
let navigation = document.querySelector('.navigation');
let body = document.getElementById("body");


menu.onclick = function(){
    body.classList.toggle("body_move");
    navigation.classList.toggle('active');
}

let list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    
}

list.forEach((item) => 
item.addEventListener('click', activeLink));

