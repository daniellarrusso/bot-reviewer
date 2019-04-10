import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trader-messages',
  templateUrl: './trader-messages.component.html',
  styleUrls: ['./trader-messages.component.css']
})
export class TraderMessagesComponent implements OnInit {
  @Input() tradeId: string;
  botId: string;

  tradeMessages: any;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase, private location: Location) {
    this.route.paramMap.subscribe(params => {
      this.botId = params.get('botId');
      this.tradeMessages =  this.db.list(`/tradeMessages/${this.botId}`).valueChanges();
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.tradeMessages =  this.db.list(`/tradeMessages/${this.botId}`).valueChanges();
  }

}
