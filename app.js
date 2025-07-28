function mostrarAmigos(amigos) {
  // Obtener el elemento de la lista de amigos
  const lista = document.getElementById("listaAmigos");

  //  Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y 4. Agregar elementos a la lista
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

const misAmigos = ["Sergio", "Nicolas", "Agustina", "Estela"];
mostrarAmigos(misAmigos);

function agregarAmigo() {
  //Captura el valor del campo de entrada
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  // Valida la entrada
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  //Actualiza el array de amigos
  misAmigos.push(nombreAmigo);

  //Limpiar el campo de entrada
  inputAmigo.value = "";

  //Muestra los amigos actualizados
  mostrarAmigos(misAmigos);
}
