import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Disciplina } from '../model/Disciplina'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  usuario = new Usuario("Rodolfo")

  tituloDisciplina: String = "Haskell"
  p1 = 0
  p2 = 0
  p3 = 0
  media = 0
  faltas = 0

  disciplinaAtual = {}

  disciplinas = [
    {
      nome:"Haskell",
      p1: 0,
      p2: 2,
      p3: 8,
      faltas:0
    },
    {
      nome:"Cobol",
      p1: 0,
      p2: 2,
      p3: 8,
      faltas:0
    },
    {
      nome:"Calculo",
      p1: 0,
      p2: 2,
      p3: 8,
      faltas:0
    },
    {
      nome:"Banco de dados",
      p1: 0,
      p2: 2,
      p3: 8,
      faltas:0
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
    this.disciplinaAtual = d
    this.tituloDisciplina = d.nome
    this.p1 = d.p1
    this.p2 = d.p2
    this.p3 = d.p3
    this.media = (this.p1 + this.p2) / 2
  }

}
