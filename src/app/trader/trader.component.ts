import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class Trader {
  id: string;
  data: any;
  messages: Observable<{}[]>;
}

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {

  traders: Observable<Trader[]>;

  traderId: any;

  constructor(private db: AngularFireDatabase) {
    this.traders = this.db.list('/trader').snapshotChanges()
      .pipe(
         map(actions => actions.map(m => {
          const mess = this.db.list(`tradeMessages/${m.key}`).valueChanges();
          const obj = {
            id: m.key, data: m.payload.val(), messages: mess
          };
          return obj;
        }))
      );
  }


  ngOnInit() {
  }

  setTraderId(traderId) {
    this.traderId = traderId;
  }

}
