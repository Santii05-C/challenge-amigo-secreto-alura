const misAmigos = [""];
mostrarAmigos(misAmigos);

/*Función para agregar un amigo al array, verificar que no esté vacio y limpiar el input*/
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  misAmigos.push(nombreAmigo);

  inputAmigo.value = "";

  mostrarAmigos(misAmigos);
}

/*Función para mostrar el amigo recien agregado y lo colocamos en una lista*/
function mostrarAmigos(amigos) {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

/*Función para sortear el un ganador de nuestra lista de amigos, verificar que la lista no esté vacía y mostramos el ganador */
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  if (misAmigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * misAmigos.length);
  const nombreGanador = misAmigos[indiceAleatorio];
  resultado.innerHTML = `El ganador es: ${misAmigos[indiceAleatorio]}`;
}
