import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de:DebugElement
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("shange my name to Saad",()=>{
    let btn = de.query(By.css("#btn"))
    let par = de.query(By.css("p"))
    btn.triggerEventHandler("click")
    fixture.detectChanges();
    expect(par.nativeElement.textContent).toEqual("Saad")
  })
  it("should return captialized text",()=>{
    let btn = de.query(By.css("#btn2"))
    let par = de.query(By.css("small"))
    btn.triggerEventHandler("click")
    fixture.detectChanges();
    expect(par.nativeElement.textContent).toEqual("ESLAM")
  
  })
  it("should return odd nums",()=>{
    let header0 = de.query(By.css("h1"))
    let btn = de.query(By.css("#odd"))
    btn.triggerEventHandler("click")
    fixture.detectChanges();
    expect(header0.nativeElement.textContent).toEqual("4")
  })
});
