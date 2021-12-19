import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/shared/dto/question.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get<Question>('http://localhost:3000/questions').pipe(
      map((x) => {
        return x;
      })
    );
  }
}
