const main = async () => {
  const id = new URLSearchParams(window.location.search).get("id"); // obtiene el id
  const res = await fetch(`https://dummyjson.com/recipes/${id}`); // hace la petición
  const data = await res.json(); // convierte la respuesta en JS

  document.getElementById("title").textContent = data.name; //nombre
  document.getElementById("image").src = data.image; //imagen
  document.getElementById("image").alt = data.name; //alt (es el nombre de la receta)

  const lista = data.instructions.map(paso => `<li>${paso}</li>`).join("");

  document.getElementById("instructions").innerHTML = lista; //agrega la lista al html
  
};

document.getElementById("btn-back").addEventListener("click", () => {
  window.history.back();
});

main();

/*const main = async () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();

  document.getElementById("title").textContent = data.name;
  document.getElementById("image").src = data.image;
  document.getElementById("image").alt = data.name;

  // agarre el elemento html con el id
  const instructionsList = document.getElementById("instructions");
  
  // Limpia la lista antes de agregar las nuevas instrucciones
  instructionsList.innerHTML = "";

  // verifica si instructions es un string, si es así, lo divide en pasos
  const instructions = typeof data.instructions === 'string' ? data.instructions.split('. ') : data.instructions;

  // Recorre las instrucciones y las agrega como <li>
  instructions.forEach(instruction => {
    const li = document.createElement("li");
    li.textContent = instruction;
    instructionsList.appendChild(li);
  });
};

document.getElementById("btn-back").addEventListener("click", () => {
  window.history.back();
}); // boton para volver atras

main();*/
