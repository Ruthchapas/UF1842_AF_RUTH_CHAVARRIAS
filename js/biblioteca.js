// localStorage.removeItem("biblioteca")

// MINI BIBLIOTECA

// const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
    { titulo: "Guerra y Paz", autor: "Lev Tolstoi", categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Anna Karenina", autor: "Lev Tolstoi", categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "L'Odisea", autor: "Homero", categoria: "drama", idioma: "català", epoca: "clásica" },
    { titulo: "Antologia de la poesia medieval catalana", autor: "Diversos", categoria: "poesia", idioma: "català", epoca: "clásica" },
    { titulo: "La Ilíada", autor: "Homero", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Poema del Mio Cid", autor: "Anónimo", categoria: "poesia", idioma: "español", epoca: "clásica" },
    { titulo: "Veinte mil leguas de viaje submarino", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "De la Terra a la Lluna", autor: "Jules Verne", categoria: "aventuras", idioma: "català", epoca: "s.XIX" },
    { titulo: "Cinco semanas en globo", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "Robinson Crusoe", autor: "Daniel Defoe", categoria: "aventuras", idioma: "català", epoca: "clásica" },
    { titulo: "Germinal", autor: 'Émile Zola', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Notre Dame de Paris", autor: 'Victor Hugo', categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "Los Miserables", autor: 'Victor Hugo', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Yo, robot", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Fundació", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Ciberiada", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "El hombre bicentenario", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Tokio Blues", autor: "Haruki Murakami", categoria: "drama", idioma: "español", epoca: "s.XX" },
    { titulo: "Romancero Gitano", autor: "Federico García Lorca", categoria: "poesia", idioma: "español", epoca: "s.XX" },
    { titulo: "Los aventuras de Sherlock Holmes", autor: 'Arthur Conan Doyle', categoria: "misterio", idioma: "español", epoca: "s.XIX" },
    { titulo: "Rebelió a la granja", autor: 'George Orwell', categoria: "drama", idioma: "català", epoca: "s.XX" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Cròniques Marcianes", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
]





// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres
// const listaLibros = document.getElementById("listaLibros");


function mostrarArray(id) {

    biblioteca.sort((a, b) => {
        return a.titulo.localeCompare(b.titulo, "es-ES", { numeric: true });
    });//el sort para ordenar alfabéticamente

    const idHTML = document.getElementById(id)
    let htmlEjer1 = "<ol>";  // ol para ala lista ordenada

    biblioteca.forEach((libro) => {
        htmlEjer1 += `<li>"${libro.titulo}"</li>`
    });

    htmlEjer1 += "</ol>"

    idHTML.innerHTML = htmlEjer1;
}


mostrarArray("ejer1")


// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css

function mostrarArrayCompleto(id) {
    //creo una nueva función que me muestre todos los resultados de forma inicial con el formato que se espera
       biblioteca.sort((a, b) => {
           return a.titulo.localeCompare(b.titulo, "es-ES", { numeric: true });
       });//el sort para ordenar alfabéticamente
   
       const idHTML = document.getElementById(id)
       let htmlEjer2 = "";  
   
       biblioteca.forEach((libro) => {
           htmlEjer2 += `<span class="autor">${libro.autor}</span>: <span class="obra">${libro.titulo}</span> (${libro.categoria}), (${libro.idioma}) <br>`;
    
       });
   
       htmlEjer2 += ""
   
       idHTML.innerHTML = htmlEjer2;
   }
   
   
   const ejer2 = document.getElementById("ejer2");
   const formEjer2 = document.forms["formEjer2"];
   mostrarArrayCompleto("ejer2") // aquí aplico esa nueva función creada
   
   formEjer2.addEventListener("change", () => {
     ejer2.innerHTML = "";
   
     const categoria = formEjer2["categoria"].value;
     const idioma = formEjer2["idioma"].value;
     const epoca = formEjer2["epoca"].value;
   
     let noHayResultados = true;
     let htmlEjer2 = "";
     
     biblioteca.forEach((libro) => {
       if (
         (categoria == "todo" || libro.categoria == categoria) &&
         (idioma == "todo" || libro.idioma == idioma) &&
         (epoca == "todo" || libro.epoca == epoca)
       ) {
         htmlEjer2 += `<span>${libro.autor}</span>: ${libro.titulo} (${libro.categoria}) <br>`;
         noHayResultados = false;
       }
     });
   
     htmlEjer2 += "";
   
     if (noHayResultados) {
       ejer2.innerHTML = "No hay libros que cumplan las condiciones";
     } else {
       ejer2.innerHTML = htmlEjer2;
     }
   });

// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX) 

const formAutor = document.getElementById("form-autor");
const autorInput = document.getElementById("autor");
const resultadoAutor = document.getElementById("ejer3");

formAutor.addEventListener("submit", (e) => {
  e.preventDefault(); // Para evitar el envío del formulario por defecto

  const autorBuscado = autorInput.value.trim().toLowerCase(); //  ponerlo en minúsculas

  if (autorBuscado === "") {
    resultadoAutor.innerHTML = "Por favor, introduzca un autor para buscar.";
    return; // cuando no se escriba nada
  }
  const librosFiltrados = []; // este array es para almacenar los libros que coincidan con el autor/a

  for (let i = 0; i < biblioteca.length; i++) {
    const libro = biblioteca[i];

    if (libro.autor.toLowerCase().includes(autorBuscado)) {
      librosFiltrados.push(libro); // Si coincide, se tiene que añadir al array de resultados
    }
  }

  if (librosFiltrados.length === 0) {
    resultadoAutor.innerHTML = `No se han encontrado libros del autor/a "${autorBuscado}".`;
  } else {
    let htmlResultado = "<ul>";
    for (let i = 0; i < librosFiltrados.length; i++) {
      const libro = librosFiltrados[i];
      htmlResultado += `<li>${libro.autor} : ${libro.titulo} (${libro.categoria}), ${libro.idioma}, época : ${libro.epoca})</li>`;
    }
    htmlResultado += "</ul>";
    resultadoAutor.innerHTML = htmlResultado;
  }
});


// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Actualizar automáticamente el listado de obras del ejercicio 1


function actualizarLocalStorage() {
 
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
}

const formEjer4 = document.forms['formEjer4'];

formEjer4.addEventListener('submit', (e) => {
    e.preventDefault();

    let autor = formEjer4['incluir-autor'].value;
    let titulo = formEjer4['incluir-titulo'].value;
    let categoria = formEjer4['incluir-categoria'].value;
    let idioma = formEjer4['incluir-idioma'].value;
    let epoca = formEjer4['incluir-epoca'].value;


    if (!autor || !titulo || !categoria || !idioma || !epoca) {
        alert('Todos los campos deben ser completados debidamente');
        return; //para verificar si algún campo está vacío o no tiene un valor válido. Si cualquier campo no tiene un valor , entonces la condición será true y se ejecutará el alert mostrando el mensaje: "Todos los campos deben ser completados debidamente"
    }

 
    let objetoLibro = { autor, titulo, categoria, idioma, epoca };

   
    biblioteca.push(objetoLibro);

    actualizarLocalStorage();
    mostrarArray("ejer1");


    actualizarLocalStorage();
});
  

// ==========================================================================================================
// EJERCICIO 5
// Quitar obras de la biblioteca. Crea en un formulario una etiqueta select con las obras de la biblioteca.
// Al seleccionar una obra y enviar el formulario, se eliminará la obra de la biblioteca.
// Actualizar automáticamente el listado de obras del ejercicio 1
// Actualizar el LocalStorage

const formQuitarObra = document.getElementById("formQuitarObra");
const selectObra = document.getElementById("selectObra");


function actualizarSelectObra() {

    selectObra.innerHTML = ""  //para limpiar

 
    biblioteca.forEach((libro, index) => {
        selectObra.innerHTML += `<option value="${index}">${libro.titulo}</option>`;
    });
}


formQuitarObra.addEventListener("submit", (e) => {
    e.preventDefault();  

    const obraSeleccionadaIndex = selectObra.value;  // Obtener el índice de la obra seleccionada

    if (obraSeleccionadaIndex === "") {
        alert("Por favor, seleccione una obra");
        return;  // Si no se ha seleccionado nada, salir 
    }

    // wl splice para eliminar la obra seleccionada de la biblioteca
    biblioteca.splice(obraSeleccionadaIndex, 1);

 
    actualizarLocalStorage();

  
    mostrarArray("ejer1");


    actualizarSelectObra();
});

//mostrar las obras al cargar la página
actualizarSelectObra();