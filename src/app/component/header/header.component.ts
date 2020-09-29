import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;

  email: string = '';
  password: string = '';
  username: string = '';
  confirmPassword: string = '';

  constructor(private auth: AuthService, private modalService: NgbModal) { }

  ngOnInit() {
    // this.isLogin = !!this.auth.user;
  }

  openModal(content) {
    this.email = '';
    this.password = '';
    this.username = '';
    this.confirmPassword = '';

    this.modalService.dismissAll();
    this.modalService.open(content, { centered: true });
  }

  login() {
    this.auth.login(this.email, this.password).then(
      data => {
        console.log(data)
        this.password = '';
      }
    )
  }

  logout() {
    this.auth.user = new User();
  }

}
