/*  Referencias al documento DOM  */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");

/* Función para crear el elemnto tarea (Función creadora del Nodo Tarea) */

function crearElementoTarea(){
    // Crear los elemntos html de la tarea
    const tareaContenedor = document.createElement('div');
    const tareaTexto = document.createElement('p');
    const iconoContenedor = document.createElement('div');
    const iconoCompletada = document.createElement('i');
    const iconoEliminar = document.createElement('i');

    /* Creamos la estructura de la tarea */

    iconoContenedor.append(iconoCompletada , iconoEliminar);
    tareaContenedor.append(tareaTexto , iconoContenedor);

    /* Agregamos las clases a los contenedores de la tarea */

    tareaContenedor.classList.add('tarea');
    tareaTexto.classList.add('tarea-texto');
    iconoContenedor.classList.add('tarea-iconos');
    iconoCompletada.classList.add('bis' , 'bi-dash-circle');
    iconoEliminar.classList.add('bis' , 'bi-trash2');

    /* Agregamos el texto del usuario */
    tareaTexto.innerText = tareaEntrada.value;

    /* Retornamos la estructura de la tarea */
    return tareaContenedor;

}

/* Escuchador */

botonAgregar.addEventListener("click" , agregarTarea);

/* Función Agregar el Elemento Tarea */

    function agregarTarea(){
        // Traemos el elemento retornado por la función crearElementoTarea
        const elementoTarea = crearElementoTarea();
        contenedorTareas.append(elementoTarea);

        // Reiniciar el value del input
        tareaEntrada.value = ' ';
    }