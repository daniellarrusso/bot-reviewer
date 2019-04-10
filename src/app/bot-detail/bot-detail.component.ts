import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { BotService } from '../services/bot.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bot-detail',
  templateUrl: './bot-detail.component.html',
  styleUrls: ['./bot-detail.component.css']
})
export class BotDetailComponent implements OnInit, OnDestroy {

  botId: string;

  bot: any;
  sub: Subscription;

  constructor(
    private db: AngularFireDatabase,
    private botService: BotService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.botId = params.get('botId');
      this.sub = this.botService.getBot(this.botId)
        .subscribe(bot => this.bot = bot);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
