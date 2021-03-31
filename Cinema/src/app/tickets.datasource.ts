﻿import { Injectable } from "@angular/core";

@Injectable()
export class TicketsDatasource {

  private allTickets:Array<number>=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
  ];

  private soldTickets:Array<number>=[
    
  ];

  private instockTickets:Array<number>=[
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
  ];


  getAllTickets():Array<number> {
    return this.allTickets;
  };

  getSoldTickets():Array<number> {
    return this.soldTickets;
  };

  getInstockTickets():Array<number> {
    return this.instockTickets;
  };


  setTicketsForPerson(count:number):Array<number>{
    //console.log(count);
    if(this.instockTickets.length>0){
    let tickets:Array<number>=[];//
    let randomNum;
    let currMassiv=[...this.instockTickets];
    if(count==1){
      randomNum=Math.floor(Math.random()*currMassiv.length);
      //console.log(randomNum);//индекс

      tickets.push(currMassiv[randomNum]);
      //console.log(tickets);//билет № для покупателя

      this.instockTickets.splice(randomNum,1);
      //console.log(this.instockTickets);//остались билеты №...

      this.soldTickets.push(currMassiv[randomNum]);
      //console.log(this.soldTickets);//проданы билеты №...
      console.log(this.instockTickets);//остались билеты №...
      return tickets;
    }else{
      let pos;
      for(let i:number=0; i<=currMassiv.length; i++){
        if(tickets.length===0){
          tickets.push(currMassiv[i]);
          pos=i;
        }else if(tickets.length<count){
          if(currMassiv[i]-currMassiv[i-1]===1){
            tickets.push(currMassiv[i]);   
          }else{
            tickets=[currMassiv[i]];  
            pos=i;
          }
        }else if(tickets.length==count){
          this.instockTickets.splice(pos,count);
          this.soldTickets=[ ...this.soldTickets, ...tickets ];
          console.log(this.instockTickets);//остались билеты №...
          
          return tickets;
        }
      }

      if(tickets.length<=count){
        return [];
      }
       
  }
  
}
return [];
  }
}