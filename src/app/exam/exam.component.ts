import { Component, OnInit } from "@angular/core";
import { Question } from "../shared/dto/question.model";
import { ApiService } from "../shared/services/api/api.service";

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.scss"],
})
export class ExamComponent implements OnInit {
  questionsData: Question[] = [];
  currentQuestion: number = 0;
  arr: any;
  answerSelected: boolean = false;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  result: boolean = false;
  random: number;
  questionsLength: number;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.apiService.getQuestions().subscribe((res) => {
      this.questionsData.push(res);
      this.arr = this.questionsData.flat();
      this.questionsLength = this.arr.length;
    });
  }

  onAnswer(option: boolean) {
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuestion++;
      this.answerSelected = false;
    }, 1000);
    if (option) {
      this.correctAnswer++;
    } else {
      this.incorrectAnswer++;
    }
  }

  showResults() {
    this.result = true;
  }
}
