import { DoublyLinkedList } from "./models/DoblyLinkedList.js";
const agenda = new DoublyLinkedList(); // Crear una lista enlazada doble para la agenda

const contactForm = document.getElementById("contactForm");
const agendaDiv = document.getElementById("agenda");

// Agregar evento al botón "Agregar"
document.getElementById("agregar").addEventListener("click", function(event){
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;

    if(nombre && apellido && telefono) {
        agenda.insert({ nombre, apellido, telefono }); // Insertar contacto en la agenda
        console.log('Contacto agregado:', nombre, apellido, telefono);
    } else {
        console.log('Por favor, complete todos los campos.');
    }

    // Limpiar los campos del formulario después de agregar el contacto
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';
});

// Agregar evento al botón "Mostrar Agenda"
document.getElementById("mostrar").addEventListener("click", function(){
    mostrarAgenda();
});

// Función para mostrar la agenda
function mostrarAgenda() {
    agendaDiv.innerHTML = ''; // Limpiar la agenda antes de mostrarla

    // Obtener el tipo de orden seleccionado (nombre o apellido)
    const ordenarPor = document.getElementById("ordenarPor").value;

    // Ordenar la agenda según el tipo seleccionado
    ordenarAgenda(ordenarPor);

    // Crear y mostrar la lista de contactos
    const ul = document.createElement("ul");
    agenda.forEach(contacto => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${contacto.nombre} ${contacto.apellido} - Teléfono: ${contacto.telefono}`;
        ul.appendChild(li);
    });
    agendaDiv.appendChild(ul);
}

// Función para ordenar la agenda por nombre o apellido paterno
function ordenarAgenda(tipoOrden) {
    if (tipoOrden === 'nombre') {
        agenda.bubbleSort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (tipoOrden === 'apellido') {
        agenda.bubbleSort((a, b) => a.apellido.localeCompare(b.apellido));
    }
}