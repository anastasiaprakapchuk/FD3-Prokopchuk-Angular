import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TicketsDatasource } from './tickets.datasource';

@Component({
  moduleId: module.id,
  selector: 'hall',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css']
})
export class Hall {
  
  @Input("allTickets")
  private allTickets:Array<number>;

  @Input("soldTickets")
  private soldTickets:Array<number>;

  @Input("instockTickets")
  private instockTickets:Array<number>;

  private viewTickets:Array<boolean>;
 
  constructor(private events:TicketsDatasource) {
    this.viewTickets=[];
    let countPlace:number=events.getAllTickets().length;
    for(let i:number=0;i<countPlace;i++){
      this.viewTickets[i]=true;
    }
  }
 
  getViewTickets():Array<boolean>{
    this.events.getPlacesObservable()
    .subscribe( (array:Array<boolean>)=>{ this.viewTickets=array; } )
    ;
    return this.viewTickets;
  }

  getAllTickets():Array<number>{
    return this.allTickets;
  }

  getSoldTickets():Array<number>{
    return this.soldTickets;
  }

  getInstockTickets():Array<number>{
    return this.instockTickets;
  }
}
