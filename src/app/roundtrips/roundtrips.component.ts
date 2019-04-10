import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-roundtrips',
  templateUrl: './roundtrips.component.html',
  styleUrls: ['./roundtrips.component.css']
})
export class RoundtripsComponent implements OnInit {

  botId: string;
  roundTrips: any;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.botId = params.get('botId');
      this.roundTrips = this.db.list('/roundTrips/' + this.botId).valueChanges();
    });
  }

  goBack() {
    this.location.back();
  }

}
