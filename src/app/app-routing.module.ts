import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { QuestionsCatalogComponent } from './questions-catalog/questions-catalog.component';

const routes: Routes = [
  {
    path: 'questions-catalog',
    component: QuestionsCatalogComponent,
  },
  {
    path: 'exam',
    component: ExamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
