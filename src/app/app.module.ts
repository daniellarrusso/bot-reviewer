import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MoviesComponent } from './movies/movies.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostComponent } from './post/post.component';
import { TraderComponent } from './trader/trader.component';
import { TraderMessagesComponent } from './trader-messages/trader-messages.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { BotComponent } from './bot/bot.component';
import { FieldNamesPipe } from './shared/pipes/field-names.pipe';
import { RoundtripsComponent } from './roundtrips/roundtrips.component';
import { BotDetailComponent } from './bot-detail/bot-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TasksComponent,
    PostComponent,
    TraderComponent,
    TraderMessagesComponent,
    CardComponent,
    BotComponent,
    FieldNamesPipe,
    RoundtripsComponent,
    BotDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
