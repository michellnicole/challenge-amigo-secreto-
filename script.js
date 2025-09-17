let amigos = ["cheesi", "melissa", "carlitos", "moore", "jeison", "tsuki"];

function agregarAmigo() {
  let input = document.getElementById("nombre");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor escribe un nombre válido");
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes agregar al menos 2 nombres para sortear");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSecreto = amigos[indice];
  document.getElementById("resultado").textContent = "🎉 El amigo secreto es: " + amigoSecreto;
}

// Cargar la lista inicial
actualizarLista();
