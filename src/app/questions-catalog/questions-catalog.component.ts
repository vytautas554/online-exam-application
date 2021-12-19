import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { QuestionsService } from '../shared/services/questions/questions.service';

@Component({
  selector: 'app-questions-catalog',
  templateUrl: './questions-catalog.component.html',
  styleUrls: ['./questions-catalog.component.scss'],
})
export class QuestionsCatalogComponent implements OnInit {
  questionsData: any;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.questionsService.getQuestions().subscribe((res) => {
      this.questionsData = res;
    });
  }
}
