import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bindings';
  // public PersonName : string = "";
  public firstName : string = "";
  public MiddleName : string = "";
  public LastName : string = "";
  public firstNum : number = 0;
  public secondNum : number = 0;
  public firstNumb : number = 0;
  public firstNumber : number = 0;
  public secondNumb : number = 0;
 
  

  ShowFullName(){
    alert(this.firstName + " "  + this.MiddleName + " " + this.LastName);
  }
  ADD(){
    let sum = this.firstNum + this.secondNum;
    alert(sum);
  }
  SUBTRACT(){
    let diff = this.firstNum - this.secondNum;
    alert(diff);
  }
  MULTIPLY(){
    let mul = this.firstNum * this.secondNum;
    alert(mul);
  }
  DIVIDE(){
    let quo = this.firstNum / this.secondNum;
    alert(quo);
  }

  greaternum(){
    const greaternum = Math.max(this.firstNumb,this.secondNumb)
    alert(greaternum);
  }
  smallernum(){
    const smallernum = Math.min(this.firstNumb,this.secondNumb)
    alert(smallernum);
  }
  one(){
    const one = (this.firstNumber % 2  == 0) ? "even" : "odd";
    alert(one);
  }
  
}

