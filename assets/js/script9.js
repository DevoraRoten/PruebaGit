/*let contenedoCoqueto = document.getElementById("contenedor");

contenedoCoqueto.addEventListener("click",function(){
    alert("Me clikeaste!!! 1313")
})

function miFuncionCoqueta(){
    alert("ME CLICKEASTE!!! 1313")
}
let contenedor = document.getElementById("contenedor");
contenedor.addEventListener("click", miFuncionCoqueta)
contenedor.addEventListener("mouseover",function(){
    contenedor.innerHTML="El puntero del mous , esta sobre el contenedor";
});
*/
/*
contenedor.addEventListener("mouseover",function(){
    contenedor.innerHTML="El puntero del mous , NO esta sobre el contenedor";
});

function login(event){
    let email=document.querySelector(".email");
    let password = document.querySelector(".password");
    document.querySelector(".resultado").innerHTML='bienvenido ${email.value} y su contraseña es ${password.value}';
};

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",login)*/


function validar(event){
    event.preventDefault();
    let password = document.querySelector(".password").value;
    let patronUno = /gatito/i;
    let patronDos= /perrito/i;

    if(password.match(patronUno) || password.match(patronDos)){
        alert("contraseña valida");
    } else {
        alert("contraseña inválida");
    }
};

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validar);


/* 
nombre
edad
correo
mensaje
numero de telefono
*/
