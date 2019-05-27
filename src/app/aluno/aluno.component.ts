import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Disciplina } from '../model/Disciplina'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  usuario = new Usuario()

  tituloDisciplina = "Haskell"

  disciplinaAtual = new Disciplina()

  disciplinas = [
    {
      nome:"Haskell"
    },
    {
      nome:"Cobol"
    },
    {
      nome:"Calculo"
    },
    {
      nome:"Banco de dados"
    },
  ]


  constructor() {
    
    //this.disciplinas.push(d)
    this.usuario.nome = "Rodolfo"
   }

  ngOnInit() {
    
  
  }

  disciplinaSelecionada(d: Disciplina){
    console.log(d.nome);
    this.tituloDisciplina = d.nome
  }

}
