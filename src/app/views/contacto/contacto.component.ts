import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/emailService.service';
import { Mensaje } from '../../models/mensaje';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: FormGroup
  msg = new Mensaje()


  constructor(private fb: FormBuilder, private mail: EmailService ) {
    this.crearCampos()
  }

  ngOnInit() {
  }

  crearCampos() {
    this.form = this.fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(3)
      ])],
      correo: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      telefono: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{7,9}')
      ])],
      mensaje: ''
    })
  }

  onEnviar(): void {
    // console.log(JSON.stringify(this.form.value))
    this.msg = this.form.value
    this.enviarServicio(this.msg)
    alert('Mensaje enviado')
    this.crearCampos()
  }

  enviarServicio(msg: Mensaje) {
    this.mail.sendEmail(msg)
    .subscribe(
      res => console.log(res),
      err => console.log(err),
      () => {
        console.log('Email enviado')
      })
  }
}
