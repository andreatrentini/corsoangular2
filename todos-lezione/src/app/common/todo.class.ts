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

    constructor(id: number) {
        this.id = id;
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



}
