import { FormBuilder, Validators } from "@angular/forms";
import { Indirizzo } from "./indirizzo.class";

export class Profilo {
    nome: string = '';
    cognome: string = '';
    email: string = '';
    password: string = '';
    cell: string = '';
    indirizzo: Indirizzo = new Indirizzo();

    fb = new FormBuilder();

    update(newData: any) {
        this.nome = newData.nome;
        this.cognome = newData.cognome;
        this.email = newData.email;
        this.password = newData.password;
        this.cell = newData.cell;
        this.indirizzo.update(newData.indirizzo);
    }

    saveToLocalStorage() {
        localStorage.setItem('profilo-todos', JSON.stringify(this));
    }

    loadFromLocalStorage() {
        let tmp = localStorage.getItem('profilo-todos');
        if (tmp) {
            let loadedData = JSON.parse(tmp);           
            this.nome = loadedData.nome;
            this.cognome = loadedData.cognome;
            this.email = loadedData.email;
            this.password = loadedData.password;
            this.cell = loadedData.cell;
            this.indirizzo.update(loadedData.indirizzo);           
        }
    }

    clearLocalStorage() {
        localStorage.removeItem('profilo-todos');
    }

    createForm() {
        return this.fb.group({
            nome: [this.nome, Validators.required],
            cognome: [this.cognome],
            email: [this.email, [Validators.required, Validators.email]],
            password: [this.password, Validators.required],
            cell: [this.cell],
            indirizzo: this.indirizzo.createForm()
        })
    }
}
