import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name:string = "Eslam"
  capitalname:string = "eslam"
  power:number = 2
  ngOnInit(): void {}
  changemyname(){
    this.name = "Saad"
  }
  capital(){
    this.capitalname = "ESLAM"
  }
  odd(){
    this.power = this.power *2 
  }
}
