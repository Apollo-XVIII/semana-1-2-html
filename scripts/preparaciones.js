var app = new Vue ({
    el:"#div-preparaciones",
    data: {
        titulo_seccion: "Preparaciones",
        titulo_boton: "Ver preparación",
        preparaciones: [{
            id: "1",
            nombre: "Aquí va el nombre de la preparación 1",
            descripcion: "Aquí va una corta descripción",
            ingredientes: "Lista de los ingredientes",
            preparacion: "Pasos de la preparación",
            url: "URL de referencia",
            imagen: "https://placeimg.com/640/480/any"
        },
        {
            id: "2",
            nombre: "Aquí va el nombre de la preparación 2",
            descripcion: "Aquí va una corta descripción",
            ingredientes: "Lista de los ingredientes",
            preparacion: "Pasos de la preparación",
            url: "URL de referencia",
            imagen: "https://placeimg.com/640/480/any"
        },
        {
            id: "3",
            nombre: "Aquí va el nombre de la preparación 3",
            descripcion: "Aquí va una corta descripción",
            ingredientes: "Lista de los ingredientes",
            preparacion: "Pasos de la preparación",
            url: "URL de referencia",
            imagen: "https://placeimg.com/640/480/any"
        }
    ]
    }
})

/* Función: Ver verPreparacion
Autor: Mónica Angulo
Fecha: 16/09/2021
Descripción: función para el llamado de la preparacion desde la sección de preparaciones
 */

let verPreparacion = () => {
    //Traer todos los botones de la seccion
    const mixBtns = document.querySelectorAll(".btn-warning");
    
    //Obtener el botón que dió clic
    const clicBtnRecipe = function (evento) {
        console.log = "El botón fue..."
    }
    // botones es un arreglo así que lo recorremos
    mixBtns.forEach(mixBtns => {
        //Agregar listener
        mixBtns.addEventListener("click", clicBtnRecipe);
        //Ir a la página de la preparacion
        window.location = "./preparacion.html"
    });
}
