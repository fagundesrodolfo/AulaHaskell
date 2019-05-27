import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Disciplina} from '../model/Disciplina'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  usuario: Usuario

  disciplinas: Disciplina[]

  constructor() { }

  ngOnInit() {
    
    let d = new Disciplina()
    d.nome = "Haskell"

    this.disciplinas.push(d)
    this.usuario.nome = "Rodolfo"
  }

}
