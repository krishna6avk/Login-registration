import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl ,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  submitted: boolean;
  ldata: any = {};
 

  constructor(private obj:FormBuilder ,private route:Router,private objservice:ServicesService) {
    this.login=this.obj.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
   }

   get frmUN() {
    return this.login.controls['email'];
  }
  get frmPW() {
    return this.login.controls['password'];
  }

  
  ngOnInit() {
  }

  submit(abc)
  {
    this.objservice.login(this.login.value).subscribe(data =>{
    this.ldata = data;
    if(this.ldata !== undefined){
      this.route.navigate(['Table'])

    }
   } ) ;

  }
  register(){
    this.route.navigate(['Registration']);
  }
}
