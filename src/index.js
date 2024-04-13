import { DoublyLinkedList } from "./models/DoblyLinkedList.js";
import { bubbleSort } from "./models/Burbuja.js";

const agenda = new DoublyLinkedList();

const contactForm = document.getElementById("contactForm");
const agendaDiv = document.getElementById("agenda");

document.getElementById("agregar").addEventListener("click", function(event){
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;

    if(nombre && apellido && telefono) {
        agenda.insert({ nombre, apellido, telefono });
        console.log('Contacto agregado:', nombre, apellido, telefono);
    } else {
        console.log('Por favor, complete todos los campos.');
    }

    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';
});

document.getElementById("mostrar").addEventListener("click", function(){
    mostrarAgenda();
});

function mostrarAgenda() {
    agendaDiv.innerHTML = ''; // Limpiar la agenda antes de mostrarla

    // Obtener el tipo de orden seleccionado (nombre o apellido)
    const ordenarPor = document.getElementById("ordenarPor").value;

    // Ordenar la agenda según el tipo seleccionado
    bubbleSort(agenda, ordenarPor);

    // Crear y mostrar la lista de contactos
    const ul = document.createElement("ul");
    agenda.forEach(contacto => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${contacto.nombre} ${contacto.apellido} - Teléfono: ${contacto.telefono}`;
        ul.appendChild(li);
    });
    agendaDiv.appendChild(ul);
}
