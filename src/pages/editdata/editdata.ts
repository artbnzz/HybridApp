import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-editdata',
  templateUrl: 'editdata.html',
})
export class EditdataPage {
  user = {} as User;
  editprofiledata : Observable<any>

  constructor(private alertCtrl: AlertController,private toast: ToastController,public loadingCtrl: LoadingController,private firedb: AngularFireDatabase,private fireAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.fireAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.editprofiledata = this.firedb.object(`User/${res.uid}`).valueChanges();
        this.editprofiledata.subscribe(res => {
          this.user.email = res.email;
          this.user.firstname = res.firstname;
          this.user.lastname = res.lastname;
          this.user.tel = res.tel;
        })
      }
    });
  }
  confirmdata(user: User){
    let alert = this.alertCtrl.create({
      title: 'ยืนยันข้อมูล',
      message: 'คุณต้องการบันทึกข้อมูลหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {}
        },
        {
          text: 'ยืนยัน',
          handler: () => {this.updatedata(user);}
        }
      ]
    });
    alert.present();
  }
  async updatedata(user: User){
    if(user.firstname==null || user.lastname==null || user.tel==null){
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      });
      loading.present();
      this.toast.create({
        message: "กรุณาระบุข้อมูลให้ครบ",
        duration: 4000,
        cssClass: "error"
      }).present();
      loading.dismiss();
    }else if(user.tel.length<10){
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      });
      loading.present();
      this.toast.create({
        message: "เบอร์โทรศัพท์ไม่ถูกต้อง",
        duration: 4000,
        cssClass: "error"
      }).present();
      loading.dismiss();
    }else{
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      });
      await loading.present().then(() => {
        this.fireAuth.authState.subscribe(res => {
          this.firedb.object(`User/${res.uid}`).set({ 
            email: res.email,
            firstname: user.firstname,
            lastname: user.lastname,
            tel: user.tel
          });
        })
        loading.dismiss();
        this.toast.create({
          message: "บันทึกข้อมูลเรียบร้อย!",
          duration: 4000,
          cssClass: "success"
        }).present();
      }).catch(err => {
        switch(err.message){
          case 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.' : 
                this.toast.create({
                  message: "กรุณาเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
                  duration: 4000,
                  cssClass: "error"
                }).present();
                loading.dismiss();
                break;
          default:
                console.log(err.message);
                this.toast.create({
                  message: err,
                  duration: 4000,
                  cssClass: "error"
                }).present();
                loading.dismiss();
        };
      })
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
