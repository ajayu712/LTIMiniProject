import { Component, OnInit } from '@angular/core';
import { PhbserviceService } from '../service/phbservice.service';
import { Phbook } from 'src/models/phbook';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phb:Phbook[]=[];
  term:string;
  sortedCollection: any[];
  reverse: boolean = false;
  dispAddCont:boolean=false;
  order:string;
  constructor(private _phbService:PhbserviceService,private _router:Router,private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.phb, 'info.name');
    console.log(this.sortedCollection);
   }
   setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  ngOnInit(): void {
    this.phb=this._phbService.getAllDetails();
  }
  addContact(Fname:string,Lname:string,ConNumber:string){
    this._phbService.addContact(Fname,Lname,ConNumber);
  }
  showFormAC(){
    if(this.dispAddCont==false){
      this.dispAddCont=true;
    }
    else{
      this.dispAddCont=false;
    }
    
  }
  deleteContact(p:Phbook){
    this._phbService.delContact(p);
  }
  editDetails(id:number){
    this._router.navigate(['edit',id]);
  }
}
