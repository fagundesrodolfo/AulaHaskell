import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../model/Disciplina'
import { Usuario } from '../model/Usuario'

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']

})
export class ProfessorComponent implements OnInit {

  constructor() { }

  disciplinas: Disciplina[] =  [
    new Disciplina("Haskell"),
    new Disciplina("Cobol"),
    new Disciplina("Calculo"),
    new Disciplina("Banco de dados")
  ]


  alunos: Usuario[] = [
    new Usuario("Rodolfo"),
    new Usuario("Rafael"),
    new Usuario("Ricardo"),
    new Usuario("João"),
    new Usuario("Thais"),
  ]

  ngOnInit() {
  }

}
