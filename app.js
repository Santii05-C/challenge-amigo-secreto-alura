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
