import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as socketIO from 'socket.io-client';


  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 

    message:any[] = []
    date:any[] = [];

    i:any = 0;

 
    

  constructor(){

  


    const socket = socketIO('http://localhost:4000');

    socket.on('hello', (res) =>

    

    this.displaydata(res)

   


);
    
}

  
  public displaydata(data){

   
    this.message[this.i] = data.message
    this.date[this.i] = data.date

    this.lineChartData = [{data:this.message, label:'Température'}]
    

    if(this.i<5)
    {
    this.i= this.i+1
    }else{

        this.date[0] = this.date[1]
        this.date[1] = this.date[2]
        this.date[2] = this.date[3]
        this.date[3] = this.date[4]
        this.date[4] = this.date[5]


        this.message[0] = this.message[1]
        this.message[1] = this.message[2]
        this.message[2] = this.message[3]
        this.message[3] = this.message[4]
        this.message[4] = this.message[5]
    }

  }

  public lineChartData:Array<any> = [
    {data: [''], label: 'test'}
 
  ];
 // public lineChartLabels:Array<any> = ['','','','','',''];
  public lineChartOptions:any = {
    type: 'line',
    responsive: true,
    animation: false,
        legend: {
          display: true
        },                                                                                             
        scales: {
          yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:30}}]
        }
  
  };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
 
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  
  

}