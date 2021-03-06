import { Component, OnInit } from '@angular/core';
import { QuestListService } from '../../services/questList.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Response } from '@angular/http';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { DbKeys } from 'src/app/services/db-keys.service';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

  isUserLogin: Boolean = false;
  noneQuest: Boolean = false;

  constructor(
    private questListServices: QuestListService,
    private snackBar: MatSnackBar,
    private localStorageService: LocalStorageService,
  ) {}

  isLoading = false;
  questList = [];

  ngOnInit() {
    this.isLoading = true;
    this.isUserLogin = this.isLogin();
    if (this.isUserLogin === true) {
      this.questListServices.getQuestListAuth().subscribe(res => {
        this.isLoading = false;
        this.questList = res;
        if (this.questList.length === 0) {
          this.noneQuest = true;
        }
      },
        (error: Response) => {
          this.isLoading = false;
          this.snackBar.open(error.text(), 'Ok', {
            duration: 3000,
          });
        });
    } else {
    this.questListServices.getQuestList().subscribe(res => {
        this.isLoading = false;
        this.questList = res;
        if (this.questList.length === 0) {
          this.noneQuest = true;
        }
      },
      (error: Response) => {
        this.isLoading = false;
        this.snackBar.open(error.text(), 'Ok', {
          duration: 3000,
        });
      });
    }
  }

  private isLogin() {
    if (this.localStorageService.getDataFromStorage(DbKeys.ID_TOKEN)) {
      return true;
    } else {
      return false;
    }
  }
}
