let reservaBtn = document.querySelector('.new_reserva_btn')
let menuReserva = document.querySelector('.menu_reserva')

reservaBtn.addEventListener('click', function(){
    menuReserva.classList.toggle('display')
})