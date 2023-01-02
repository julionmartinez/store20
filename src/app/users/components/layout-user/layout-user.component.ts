import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.scss']
})
export class LayoutUserComponent implements OnInit {
  
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
  }

}
