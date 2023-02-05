import { FormBuilder, Validators } from "@angular/forms";

export class Indirizzo {
    via: string = '';
    nCivico: string = '';
    citta: string = '';
    cap: string = '';
    provincia: string = ''; 
    
    fb = new FormBuilder();

    update(newData: any) {
        this.via = newData.via;
        this.nCivico = newData.nCivico;
        this.citta = newData.citta;
        this.cap = newData.cap;
        this.provincia = newData.provincia;
    }

    createForm() {
        return this.fb.group({
            via: [this.via],
            nCivico: [this.nCivico],
            citta: [this.citta, Validators.required],
            cap: [this.cap],
            provincia: [this.provincia],
        })
    }
}
