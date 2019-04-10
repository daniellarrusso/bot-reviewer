import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private db: AngularFireDatabase) { }

  getBot(botId: string) {
    return this.db.object('bots/' + botId).valueChanges();
  }
}
