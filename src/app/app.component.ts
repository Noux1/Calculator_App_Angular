import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';

  calvalue : number =0;

  Fun : any = 'NoFunction';

  calNum : string = 'noValue';

  firstNumber : number =0;

  secondNumber  : number =0;

  total: number = 0;

  onClickValue(val: string , type : any){
    console.log(val , type);
    
    if(val === '='){
      if(this.Fun !== 'Nofunction'){
        this.secondNumber = this.calvalue;
        this.valueCalculate(this.Fun);
        this.Fun= 'NoFunction';
      }
    }else if (type == 'function'){
      this.onFunctionClick(val);
    }else if(type == 'number'){
      this.onNumberClick(val);
    }
  }

  onNumberClick(val : string){
      if(this.calNum !== 'noValue' ){
        this.calNum = this.calNum + val;
      } else{
        this.calNum= val;
      }
      this.calvalue = parseFloat(this.calNum);
  }

  onFunctionClick(val : string){
    if(this.Fun === 'NoFunction'){
      this.firstNumber=this.calvalue;
      this.calvalue=0;
      this.calNum='noValue';
      this.Fun=val;
    }
    if(val == 'c'){
      this.resetCalculator();
    }
  }

  valueCalculate(val: string){
    switch(val){
      case '+':
          this.total = this.firstNumber + this.secondNumber;
          this.updateValues(this.total , val);
        break;
      case '-':
          this.total = this.firstNumber - this.secondNumber;
          this.updateValues(this.total , val);
        break;

      case '*':
        this.total = this.firstNumber * this.secondNumber;
        this.updateValues(this.total , val);
        break;

      case '/':
        if(this.secondNumber !== 0){
          this.total = this.firstNumber / this.secondNumber;
          this.updateValues(this.total , val);
        }
        else{
          console.error('Division par zero est non autorisée')
        }
        break;
      case '%':
        this.total= this.firstNumber % this.secondNumber;
        this.updateValues(this.total , val);
        break;
      
 
    }
    
  }
  updateValues(Total : number , val: string ){
    this.calvalue = Total;
    this.firstNumber= Total;
    this.secondNumber=0;
    this.calNum='noValue';
    this.Fun='NoFunction';
    console.log(this.total)
    }

    resetCalculator(){
      this.calvalue = 0;
      this.Fun='NoFunction';
      this.firstNumber=0;
      this.secondNumber=0;
      this.total=0;
      this.calNum='noValue';
      console.log('Reset Calculator')
    }
 
}
