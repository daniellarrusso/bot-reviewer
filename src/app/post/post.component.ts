import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  trader: any;

  constructor(private db: AngularFireDatabase) {
    this.trader = db.list('/trader').valueChanges();
  }

  ngOnInit() {
  }

}
