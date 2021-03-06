import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUserComponent } from "./auth/add-user/add-user.component";
import { AuthComponent } from "./auth/auth.component";
import { ExamComponent } from "./exam/exam.component";
import { HomeComponent } from "./home/home.component";
import { QuestionsCatalogComponent } from "./questions-catalog/questions-catalog.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
  },
  {
    path: "register",
    component: AddUserComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "questions-catalog",
    component: QuestionsCatalogComponent,
  },
  {
    path: "exam",
    component: ExamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
