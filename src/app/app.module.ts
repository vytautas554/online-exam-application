import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { QuestionsCatalogComponent } from "./questions-catalog/questions-catalog.component";
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from "./nav/nav.component";
import { ExamComponent } from "./exam/exam.component";
import { BackgroundDirective } from "./shared/directives/background.directive";
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    QuestionsCatalogComponent,
    NavComponent,
    ExamComponent,
    BackgroundDirective,
    AuthComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NoopAnimationsModule, CdkAccordionModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
