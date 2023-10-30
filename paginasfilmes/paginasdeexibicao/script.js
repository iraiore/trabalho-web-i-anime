/*função que chama a classe open - a lista menu aparece */
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
       menuMobile.classList.remove('open');
       document.querySelector('.icon').src = "image/icon/menu_white_36dp.svg"
    }else{
       menuMobile.classList.add('open');
       document.querySelector('.icon').src = "image/icon/close_white_36dp.svg" 
    }
}