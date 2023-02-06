import { FormBuilder, Validators } from "@angular/forms";

export class Indirizzo {
    via: string = '';
    citta: string = '';
    provincia: string = '';

    fb: FormBuilder = new FormBuilder();

    update(newData: any) {
        this.via = newData.via;
        this.citta = newData.citta;
        this.provincia = newData.provincia;
    }

    createForm() {
        return this.fb.group({
            via: [this.via],
            citta: [this.citta, Validators.required],
            provincia: [this.provincia]
        })
    }

}
