import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/modules/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {

  }

  login(): void{
    this.authService.login(this.token);
    this.router.navigate(['/document']);
  }

}
