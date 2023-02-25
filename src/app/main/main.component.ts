import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  passwordShow:boolean = false

  displayDetailsLogs: Array<Date> = []

  onShowDetails(){
    this.passwordShow = !this.passwordShow
    if(this.passwordShow){
      this.displayDetailsLogs.push(new Date())
    }
    
  }

  onFifthLogCheck(d: Date, className?: string, classTwo: string = 'transparent'): boolean | string {

    let check = this.displayDetailsLogs.indexOf(d) > 5 
    if(className){
      return check ? className : classTwo
    }

    return check
  }

}
