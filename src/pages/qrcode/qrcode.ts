import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  data:string;
  result:string;

  constructor
  (
    public navCtrl: NavController, 
    public navParams: NavParams,
    private barcodescanner : BarcodeScanner
  ) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

  createqr(){
    this.result = this.data;
  }

  scanqr(){
    this.barcodescanner.scan().then(barcodeData => {
      this.result = barcodeData.text
    })
  }
}
