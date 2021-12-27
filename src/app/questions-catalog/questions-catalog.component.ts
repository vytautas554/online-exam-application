import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { ApiService } from "../shared/services/api/api.service";

@Component({
  selector: "app-questions-catalog",
  templateUrl: "./questions-catalog.component.html",
  styleUrls: ["./questions-catalog.component.scss"],
})
export class QuestionsCatalogComponent implements OnInit {
  questionsData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.apiService.getQuestions().subscribe((res) => {
      this.questionsData = res;
    });
  }
}
