import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Rx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { ReadnewsPage } from '../../pages/readnews/readnews';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  newsData : Observable<any>
  constructor(private splashscreen: SplashScreen,private firedb: AngularFireDatabase,public navCtrl: NavController) {
    this.loaddata();
  }
  async loaddata(){
    this.newsData = await this.firedb.list('News').valueChanges();
    setTimeout( () => { this.splashscreen.hide(); }, 0 );
  }
  readnews(newsid){
    this.navCtrl.push(ReadnewsPage,{item:newsid},{animate: true, direction: 'forward'});
  }
}