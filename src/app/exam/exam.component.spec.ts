import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ExamComponent } from "./exam.component";

describe("ExamComponent", () => {
  let component: ExamComponent;
  let fixture: ComponentFixture<ExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ExamComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have value", () => {
    let spy = component.questionsData;
    expect(spy).toEqual([]);
  });

  it("should be equal to", () => {
    let spy = component.currentQuestion;
    let spy1 = component.answerSelected;
    expect(spy).toEqual(0);
    expect(spy1).toEqual(false);
  });
});
