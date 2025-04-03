const main = async () => {
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

main();
