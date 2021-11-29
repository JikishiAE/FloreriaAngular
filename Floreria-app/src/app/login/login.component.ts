import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [APIService]
})
export class LoginComponent implements OnInit {

  RegistroForm: FormGroup;
  LoginForm: FormGroup;
  user: any;

  constructor(public formBuilder: FormBuilder, private el: ElementRef, private APIService:APIService, private router: Router) {
    this.RegistroForm = this.createMyForm();
    this.LoginForm = this.createMyFormLogin();
  }

  ngOnInit(): void {
  }

  createMyForm(){
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      Repassword: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  createMyFormLogin(){
    return this.formBuilder.group({
      correo: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    });
  }

  login(){
    let data = this.LoginForm.value;

    let usuario = {
      correo: data.correo,
      contrasena: data.contrasena
    }

    this.APIService.loginUser(usuario).subscribe(resp=>{
      
      if (resp[0]) {
        this.user = resp;
        localStorage.setItem('usuario', JSON.stringify(this.user));
        
        this.LoginForm.reset();
        Swal.fire({
          title: 'Bienvenido',
          text: 'Es bueno verte de nuevo ' + resp[0].NOMBRE,
          icon: 'success',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigateByUrl("/");
        });
      }
      else{
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contraseña incorrecto',
          icon: 'error',
          confirmButtonColor: '#dc3545',
        })
      }
    })
  }

  guardarRegistro(){
    let data = this.RegistroForm.value;

    let usuario = {
      name: data.name,
      password: data.password,
      email: data.email
    }

    this.APIService.insertUser(usuario).subscribe(resp=>{
      if (resp) {
        
        this.RegistroForm.reset();
        Swal.fire({
          title: 'Listo',
          text: 'Usuario registrado con exito',
          icon: 'success',
          confirmButtonColor: '#dc3545',
        }).then(() => {
          this.router.navigateByUrl("/");
        });
      }
    })
  }

  cambiarSesion(){
    let myTag = this.el.nativeElement.querySelector(".container");
    let section = this.el.nativeElement.querySelector("section");

    if(!myTag.classList.contains('active'))
    {
      myTag.classList.add('active');
    }
    else{
      myTag.classList.remove('active');
    }

    if(!section.classList.contains('active'))
    {
      section.classList.add('active');
    }
    else{
      section.classList.remove('active');
    }
  }

}
