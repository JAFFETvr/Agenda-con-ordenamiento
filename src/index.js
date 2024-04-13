import { agenda,agendaObj } from "./controllers/Dependencias.js";
const contactForm = document.getElementById("contactForm");

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
    agendaObj.mostrarAgenda(agenda, document.getElementById("ordenarPor").value);
});
