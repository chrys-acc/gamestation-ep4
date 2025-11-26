//Esta parte es para el cambio de color del tema
let tema = document.getElementById("tema");
let label_tema = document.getElementById("label_tema");

//hace los cambios en las clases a la hora de clickar el icono
tema.addEventListener("change",(event)=>{
    let check = event.target.checked;
    //si un icno ya esta, se cambia por el otro
    if(check==true){
            label_tema.innerHTML='<i class="fa-solid fa-sun" style="color: white;"></i>'
    }else{
            label_tema.innerHTML='<i class="fa-solid fa-moon" style="color: lightslategray;"></i>'
    }
    //obtiene todas las partes con la misma clase
    const card_body = document.querySelectorAll(".game-card");
    const card_info = document.querySelectorAll(".game-info");
    const game_description = document.querySelectorAll(".game-description");
    document.body.classList.toggle("dark");
    //cambia todos los elementos de una misma clase para hacer el cambio de tema
    card_body.forEach(elemento => {
        elemento.classList.toggle("card_body_dark");
    });
    card_info.forEach(elemento => {
        elemento.classList.toggle("game_info_dark")
    });
    game_description.forEach(elemento => {
        elemento.classList.toggle("game_description_dark");
    });    
})

//Redirigir
function playstation(){
    window.location.href = "playstation.html";
}

function xbox(){
    window.location.href = "xbox.html";
}

function nintendo(){
    window.location.href = "nintendo.html";
}

function comprarJuego(nombreJuego, precio) {
  // Redirigir a la pagina de compra
  // Reemplaza URL
  window.location.href = "venta.html";
}

//Ventas
let pagina = document.getElementById("encabezad");
//se valida que este en la pagina de ventas
if(pagina.textContent=="GameStation - ventas"){
const tarjeta = document.getElementById("tarjeta");
const metodoPago = document.getElementById("metodo");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
tarjeta.style.display = "none";//No muestra un apartado de llenado

metodoPago.addEventListener("change", function(){
    const selection = metodoPago.value;

    if(selection != "OXXO" && selection !==""){
        tarjeta.style.display = "block";//Muestra
    }else{
        tarjeta.style.display = "none";//No muestra para OXXO
        mensaje.textContent = "Dirigete a tu correo y Despues al oxxo mas cercano"
    }
});

form.addEventListener("submit", function(event){

    event.preventDefault();//Evita que el formulario envie y recargue la pagina
    //Verificacion si el formulario es valido
    if(!form.checkValidity()){
        event.stopPropagation();//Frena la propagacion del un evento  ya paso por lo demas
        form.classList.add("was-validated");//Para hacer validaciones clase
        return;
    }
    const selection = metodoPago.value;
    ///Validaciones mas precisas
    if(selection === "OXXO"){
         mensaje.textContent = "Pago exitoso. Revisa tu correo"
    }else if(selection != ""){  
        mensaje.textContent = "Pago exitoso. Revisa tu correo"
    }else{
         mensaje.textContent = "Seleccion un metodo"
    }
    
})};
