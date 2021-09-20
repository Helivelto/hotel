let reservaBtn = document.getElementsByClassName('new_reserva_btn')
let sSimplesBtn = document.querySelector('#s_simples_btn')
let sDuplaBtn = document.querySelector('#s_dupla_btn')
let sCasalBtn = document.querySelector('#s_casal_btn')
let sFamiliaBtn = document.querySelector('#s_familia_btn')
let precoMenu = document.querySelector('.preco_menu')



for(let x=0; x<reservaBtn.length; x++){
   reservaBtn[x].addEventListener("click", tdButton);
}
function tdButton(e){

    let btValor = e.target.id;
 
    switch(btValor){
       case "s_simples_btn":
        menuReserva.classList.toggle('display')
        precoMenu.innerHTML = 'R$50,00'
       break;
 
       case "s_dupla_btn":
        menuReserva.classList.toggle('display')
        precoMenu.innerHTML = 'R$80,00'
       break;
 
       case "s_casal_btn":
        menuReserva.classList.toggle('display')
        precoMenu.innerHTML = 'R$70,00'
       break;
        
       case "s_familia_btn":
        menuReserva.classList.toggle('display')
        precoMenu.innerHTML = 'R$90,00'
       break;
    }
 
 }



let closeBtn = document.querySelector('#close_btn')
let menuReserva = document.querySelector('.menu_reserva')

closeBtn.addEventListener('click', function(){
    menuReserva.classList.toggle('display')
})