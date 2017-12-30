import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question'

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();
  
  text: string;
  ans: string;


  constructor() { }

  ngOnInit() {
  }

  addQuestion(){
    this.questionAdded.emit({text:this.text, ans:this.ans, hide:true});
  }
}
