// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Funcion para mostrar amigos en el HTML 
function mostrarAmigos() {
    let listaAmigo = document.getElementById("listaAmigos");
    listaAmigo.innerHTML = " "; 
    amigos.forEach((amigo) => { 
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigo.appendChild(li);
    });
}

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre != "") {	
            amigos.push(nombre);
            console.log("Amigos: ", amigos)
            document.getElementById("amigo").value = " ";
            mostrarAmigos();
    } else {
        alert("Debes escribir un nombre");

    }
}

//Funcion para elegir un amigo al azar
function sortearAmigo() {
        let amigoElegido = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        
        resultado.innerHTML = " ";

        let li = document.createElement("li");
        li.textContent = amigoElegido;
        resultado.appendChild(li);

        console.log("Amigo elegido: ", amigoElegido);
    }

 
    
        
        
