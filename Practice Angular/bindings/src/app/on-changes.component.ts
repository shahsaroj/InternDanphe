import { ChangeDetectionStrategy, Input } from "@angular/core";

// ngOnChanges(changes: SimpleChanges){
//     for(const propName in Changes){
//       const chng = changes[propName];
//       const cur =JSON.stringify(chng.currentValue);
//       const prev = JSON.stringify(chng.preiousValue);
//       this.changeLOg.push(`${propName}:currentValue = ${cur},
//       perviousValue = ${prev}`)
//  }
//    }   

//    @Input()  hero!: Hero;
//    @Input() power= '';
//    <on-changes 