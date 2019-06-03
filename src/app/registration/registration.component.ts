import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register:FormGroup;
  submitted: boolean;
  ldata: any = {};
 
  constructor(private route:Router,private objservice:ServicesService,private obj:FormBuilder) {
    this.register=this.obj.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }
   get frmUN() {
    return this.register.controls['email'];
  }
  get frmPW() {
    return this.register.controls['password'];
  }
    
  ngOnInit() {
  }

  Submit(abc)
  {
    this.objservice.registration(this.register.value).subscribe(data =>{
    this.ldata = data;
    if(this.ldata !== undefined){
      alert("Register Successfully");
      this.route.navigate([''])

    }
   } ) ;

  }

}
