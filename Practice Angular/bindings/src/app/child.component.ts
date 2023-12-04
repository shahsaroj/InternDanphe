import { Component, Input, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector:'app-child',
    template:
    `<a (click) = "changeFromChild()">Change from child</a>
    <br/>
    {{parentData}}`
})

export class ChildComponent implements OnInit{
    @Input('parentData') parentData:any;
    constructor(){

    }
    ngOnInit(): void {
        
    }
    changeFromChild(){
        this.parentData.Data -=1;
    }
    ngOnChanges(changes: SimpleChanges ){
        console.log(changes)
    }
}