import { DoublyLinkedList } from "../models/DoblyLinkedList.js";
import { bubbleSort } from "../models/Burbuja.js";
import { Agenda } from "./Agenda.js";
export const agenda = new DoublyLinkedList();
export const agendaObj = new Agenda(document.getElementById("agenda"), bubbleSort);
