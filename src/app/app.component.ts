import { Component } from '@angular/core';
import { LocalStorageService } from './services/localStorage.service';
import { DbKeys } from './services/db-keys'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wishlist-front';

  constructor(
    private localStorageService: LocalStorageService,
  ) {}
  
  public isLogin() {
    if (this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN)) {
      return true;
    } else {
      return false;
    }  
  }

  public userName() {
    const user = this.localStorageService.getDataFromStorage(DbKeys.USER)
    return user.name
  }

  public logout() {
    this.localStorageService.clearStorage();
  }

}

// const auth = localStorage.getItem('AuthKey');