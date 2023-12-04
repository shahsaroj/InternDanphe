export class AppComponent
implements
OnChanges,
OnInit,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
OnDestroy{
    parentData: any;
    data: string;

    ngOnChanges( changes:SimpleChanges): void {
        console.log("this is the parent onChanges method");
    }
    ngOnInit():void{
        console.log("this is the parent on init method");
        this.data="This is parent";
    }
    ngDoCheck(): void{
        console.log("this is DoCheck method");
    }

    ngAfterContentInit(); void {
        console.log(" thia is AfterContentChecked");
    }







}