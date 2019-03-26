import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Rx';


@IonicPage()
@Component({
  selector: 'page-readnews',
  templateUrl: 'readnews.html',
})
export class ReadnewsPage {
  newsData : Observable<any>
  newsid:any;
  constructor(private firedb: AngularFireDatabase,public navCtrl: NavController,public navParams:NavParams) {
    this.newsid = navParams.get('item');
    this.newsData = this.firedb.object(`News/${this.newsid}`).valueChanges();
  }
}
