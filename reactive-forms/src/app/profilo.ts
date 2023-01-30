import { FormBuilder, Validators } from "@angular/forms";
import { ProfiloService } from "./profilo.service";

export class Profilo {
    nome: string;
    cognome: string;
    email: string;
    indirizzo: {
        via: string;
        nCivico: string;
        cap: string;
        citta: string;
        provincia: string;
    }

    ps: ProfiloService;
    fb: FormBuilder;

    constructor() {
        
        this.ps = new ProfiloService();
        this.fb = new FormBuilder();

        this.nome = '';
        this.cognome = '';
        this.email = '';
        this.indirizzo = {
            via: '',
            nCivico: '',
            cap: '',
            citta: '',
            provincia: ''
        }
    }

    carica() {
        let tmp = this.ps.carica();
        if (tmp) {
            this.nome = tmp.nome;
            this.cognome = tmp.cognome;
            this.email = tmp.email;
            this.indirizzo = {
                via: tmp.indirizzo.via,
                nCivico: tmp.indirizzo.nCivico,
                cap: tmp.indirizzo.cap,
                citta: tmp.indirizzo.citta,
                provincia: tmp.indirizzo.provincia
            }
        }
    }

    salva(newProfilo: any) {
        this.nome = newProfilo.nome;
            this.cognome = newProfilo.cognome;
            this.email = newProfilo.email;
            this.indirizzo = {
                via: newProfilo.indirizzo.via,
                nCivico: newProfilo.indirizzo.nCivico,
                cap: newProfilo.indirizzo.cap,
                citta: newProfilo.indirizzo.citta,
                provincia: newProfilo.indirizzo.provincia
            }
        this.ps.salva(newProfilo);
    }

    createForm() {
        //restituisce la form creata
        return this.fb.group({
            nome: [this.nome, Validators.required],
            cognome: [this.cognome],
            email: [this.email, [Validators.required, Validators.email]],
            indirizzo: this.fb.group({
              via: [this.indirizzo.via],
              nCivico: [this.indirizzo.nCivico],
              cap: [this.indirizzo.cap, Validators.required],
              citta: [this.indirizzo.citta, Validators.required],
              provincia: [this.indirizzo.provincia, Validators.required]
            })
          });
    }
}
