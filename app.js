function mostrarAmigos(amigos) {
  // 1. Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente
  lista.innerHTML = "";

  // 3. Iterar sobre el arreglo y 4. Agregar elementos a la lista
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}
const misAmigos = ["Juan", "María", "Carlos", "Ana"];
mostrarAmigos(misAmigos);
