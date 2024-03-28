document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y los campos de entrada
    const form = document.getElementById("survey-form");
    const comentarioInput = document.getElementById("comentario");

  
    // Agregar un controlador de eventos para enviar el formulario
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Obtener los valores de los campos de entrada
      const comentario = comentarioInput.value;
      
  
      // Validar que los campos no estén vacíos
      if (comentario.trim() === "" ) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Guardar los datos en el Local Storage
      saveDataToLocalStorage(comentario);
  
      // Reiniciar los campos del formulario
      form.reset();
    });
  
    // Función para guardar los datos en el Local Storage
    function saveDataToLocalStorage(comentario) {
      // Obtener los datos anteriores del Local Storage
      let storedData = localStorage.getItem("surveyData");
      if (storedData === null) {
        storedData = [];
      } else {
        storedData = JSON.parse(storedData);
      }
  
      // Agregar los nuevos datos a la lista
      storedData.push({ comentario });
  
      // Guardar la lista actualizada en el Local Storage
      localStorage.setItem("surveyData", JSON.stringify(storedData));
    }
  });


  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const resultsContainer = document.getElementById("results");
  
  searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value;
      // Aquí puedes realizar la búsqueda en tu aplicación o sitio web y mostrar los resultados en 'resultsContainer'.
      // Por ahora, simplemente mostraremos un mensaje de ejemplo.
      resultsContainer.innerHTML = `<p>Resultados de búsqueda para: "${searchTerm}"</p>`;
  });  
  