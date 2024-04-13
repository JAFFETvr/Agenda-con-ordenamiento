export class Agenda {
    constructor(agendaDiv, bubbleSort) {
        this.agendaDiv = agendaDiv;
        this.bubbleSort = bubbleSort;
    }

    mostrarAgenda(agenda, ordenarPor) {
        this.agendaDiv.innerHTML = ''; 

        this.bubbleSort(agenda, ordenarPor);
        const ul = document.createElement("ul");
        agenda.forEach(contacto => {
            const li = document.createElement("li");
            li.textContent = `Nombre: ${contacto.nombre} ${contacto.apellido} - Teléfono: ${contacto.telefono}`;
            ul.appendChild(li);
        });
        this.agendaDiv.appendChild(ul);
    }
}
