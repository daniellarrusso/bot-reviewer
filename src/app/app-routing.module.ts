import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraderMessagesComponent } from './trader-messages/trader-messages.component';
import { BotComponent } from './bot/bot.component';
import { RoundtripsComponent } from './roundtrips/roundtrips.component';
import { BotDetailComponent } from './bot-detail/bot-detail.component';

const routes: Routes = [
  { component: BotComponent, path: '' },
  { component: RoundtripsComponent, path: 'roundTrips/:botId'},
  { component: BotDetailComponent, path: 'bot-detail/:botId'},
  { component: TraderMessagesComponent, path: 'tradeMessages/:botId'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
