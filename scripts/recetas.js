var app = new Vue({
    el: '#div-recetas',
    data: {
      titulo_seccion: 'Recetas',
      titulo_boton: 'Ver receta',
      recetas: [{
        id: "1",
        nombre: "Aqui va el nombre de la receta 1",
        descripcion: "Esta seria una corta descripción de la receta",
        ingredientes: "Está es la lista de los ingredientes",
        preparacion: "Esta es la preparación de la receta",
        url: "Esta es la url de referencia",
        imagen: "https://placeimg.com/640/480/any"
    },
    {
        id: "2",
        nombre: "Aqui va el nombre de la receta 2",
        descripcion: "Esta seria una corta descripción de la receta",
        ingredientes: "Está es la lista de los ingredientes",
        preparacion: "Esta es la preparación de la receta",
        url: "Esta es la url de referencia",
        imagen: "https://placeimg.com/640/480/any"
    },
    {
        id: "3",
        nombre: "Aqui va el nombre de la receta 3",
        descripcion: "Esta seria una corta descripción de la receta",
        ingredientes: "Está es la lista de los ingredientes",
        preparacion: "Esta es la preparación de la receta",
        url: "Esta es la url de referencia",
        imagen: "https://placeimg.com/640/480/any"
    }]
    }
  })


/* Función: Ver verReceta
Autor: Mónica Angulo
Fecha: 158/09/2021
Descripción: función para el llamado de la receta desde la sección de recetas
 */

let verReceta = () => {
    //Traer todos los botones de la seccion
    const recipeBtns = document.querySelectorAll(".btn-warning");
    
    //Obtener el botón que dió clic
    const clicBtnRecipe = function (evento) {
        console.log = "El botón fue..."
    }
    // botones es un arreglo así que lo recorremos
    recipeBtns.forEach(recipeBtn => {
        //Agregar listener
        recipeBtn.addEventListener("click", clicBtnRecipe);
        //Ir a la página de la receta
        window.location = "./receta.html"
    });
}