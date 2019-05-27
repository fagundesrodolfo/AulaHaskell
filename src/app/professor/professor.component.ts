import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../model/Disciplina'

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']

})
export class ProfessorComponent implements OnInit {

  constructor() { }

  disciplinas: Disciplina[]

  ngOnInit() {
  }

}
