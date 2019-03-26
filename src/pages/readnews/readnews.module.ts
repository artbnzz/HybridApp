import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadnewsPage } from './readnews';

@NgModule({
  declarations: [
    ReadnewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadnewsPage),
  ],
})
export class ReadnewsPageModule {}
