// import { SelectorContext } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-parent',
    template:
    `<a (click)="changeFromParent()"> Change from parent</a>
    <br/>
    <app-child [parentData]= "data"></app-child>`

})

export class ParentComponent implements OnInit{
    data: number = 30;
    constructor(){

    }
    ngOnInit(): void {
        
    }
    changeFromParent(){
        this.data+=1
    }
}