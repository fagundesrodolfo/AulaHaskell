import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario
  email: String = "email"
  senha: String = "senha"

  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.usuario = new Usuario("Rodolfo")
  }


  acaoLogin(){
    console.log("botao clicado");
    

    if(this.usuario.email == "" && this.usuario.senha == ""){
      return;
    }

    if(this.usuario.email == "rodolfo@gmail.com" && this.usuario.senha == "123"){
      console.log("Usuario: " + this.usuario.email);
      this.router.navigateByUrl('aluno')
    }

    if(this.usuario.email == "professor@gmail.com" && this.usuario.senha == "123"){
      console.log("Usuario: " + this.usuario.email);
      this.router.navigateByUrl('professor')
    }
    
  }

}
