import { DomElementSchemaRegistry } from "@angular/compiler";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Todo {
    id: number;
    titolo: string = '';
    descrizione: string = '';
    data: string = '';
    ora: string = '';
    luogo: string = '';
    completata: boolean = false;

    private fb: FormBuilder = new FormBuilder();

    constructor(id: number, todo?: any) {
        this.id = id;
        if (todo) {
            this.titolo = todo.titolo;
            this.descrizione = todo.descrizione;
            this.data = todo.data;
            this.ora = todo.ora;
            this.luogo = todo.luogo;
            this.completata = todo.completata;
        }
    }

    get form(): FormGroup {
        return this.fb.group({
            titolo: [this.titolo, Validators.required],
            descrizione: [this.descrizione],
            data: [this.data],
            ora: [this.ora],
            luogo: [this.luogo],
            completata: [this.completata]
        })
    }

    set update(newData: any) {
        this.titolo = newData.titolo;
        this.descrizione = newData.descrizione;
        this.data = newData.data;
        this.ora = newData.ora;
        this.luogo = newData.luogo;
        this.completata = newData.completata;
    }

}
