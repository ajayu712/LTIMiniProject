import { Component, OnInit } from '@angular/core';
import { PhbserviceService } from '../service/phbservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Phbook } from 'src/models/phbook';

@Component({
  selector: 'app-editdet',
  templateUrl: './editdet.component.html',
  styleUrls: ['./editdet.component.css']
})
export class EditdetComponent implements OnInit {
  constructor(private _phbservice:PhbserviceService,private _router:Router,private _route:ActivatedRoute) { }
  id:number;
  Fn:string;
  Ln:string;
  Con:string;
  
  ngOnInit(): void {
    this.id=Number(this._route.snapshot.paramMap.get('id'));
    let phb = this._phbservice.getDetailsById(this.id);
    console.log(phb);
    this.Fn=phb['Fname'];
    this.Ln=phb['Lname'];
    this.Con=phb['ConNumber'];
  }
  
  editDetails(Fn1:string,Ln1:string,ConNum1:string){
    this._phbservice.editDetails(this.id,Fn1,Ln1,ConNum1)
  }
  mainPage(){
    this._router.navigate(['']);
  }

}
