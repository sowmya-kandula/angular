import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  pass:string;
  user:string;
  ngOnInit(): void {
  }
  onsubmit(){
    if(this.pass!=="admin")
    {
      alert("invalid password");
    }
    else if(this.user!=="admin")
    {
      alert("invalid username");
    }
    else
    { localStorage.setItem("username","admin")
      this.router.navigateByUrl("/admin")
    }
  }

}
