export function bubbleSort(agenda, tipoOrden) {
    let current = agenda.head;
    let swapped = true;

    while (swapped) {
        swapped = false;
        current = agenda.head;

        while (current && current.next) {
            let shouldSwap = false;

            if (tipoOrden === 'nombre') {
                if (current.data.nombre > current.next.data.nombre) {
                    shouldSwap = true;
                }
            } else if (tipoOrden === 'apellido') {
                if (current.data.apellido > current.next.data.apellido) {
                    shouldSwap = true;
                }
            }

            if (shouldSwap) {
                const temp = current.data;
                current.data = current.next.data;
                current.next.data = temp;
                swapped = true;
            }

            current = current.next;
        }
    }
}
