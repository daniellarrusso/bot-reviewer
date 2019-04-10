import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class Bot {
  id: string;
  data: any;
}
@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  bots: any;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
   this.bots = this.db.list('bots').snapshotChanges().pipe(
      map(actions => actions.map(m => {
        const obj = { id: m.key, data: m.payload.val() };
        return obj;
      }))
    );
  }

}
