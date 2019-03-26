import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController} from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database'
import { Observable } from 'rxjs/Rx'
import { User } from '../../models/user'
import { HomePage } from '../home/home';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  user = {} as User
  editprofiledata : Observable<any>

  constructor(private alertCtrl: AlertController,private toast: ToastController,public loadingCtrl: LoadingController,private firedb: AngularFireDatabase,private fireAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.fireAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.editprofiledata = this.firedb.object(`User/${res.uid}`).valueChanges()
        this.editprofiledata.subscribe(res => {
          this.user.email = res.email
        })
      }
    })
  }
  confirmdata(user: User){
    let alert = this.alertCtrl.create({
      title: 'ยืนยันข้อมูล',
      message: 'คุณต้องการเปลี่ยนรหัสผ่านหรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {}
        },
        {
          text: 'ยืนยัน',
          handler: () => {this.updatedata(user)}
        }
      ]
    })
    alert.present()
  }
  async updatedata(user: User){
    if(user.password==null || user.confirmpassword==null){
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      })
      loading.present()
      this.toast.create({
        message: "กรุณาระบุข้อมูลให้ครบ",
        duration: 4000,
        cssClass: "error"
      }).present()
      loading.dismiss()
    }else if(user.password.length<6 || user.confirmpassword.length<6){
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      })
      loading.present()
      this.toast.create({
        message: "รหัสผ่านต้องไม่น้อยกว่า 6 ตัวอักษร",
        duration: 4000,
        cssClass: "error"
      }).present()
      loading.dismiss()
    }else if(user.password != user.confirmpassword){
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      })
      loading.present()
      this.toast.create({
        message: "รหัสผ่านใหม่และยืนยันรหัสผ่านใหม่ไม่ตรงกัน",
        duration: 4000,
        cssClass: "error"
      }).present()
      loading.dismiss()
    }else{
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      })
      await loading.present().then(() => {
        this.fireAuth.auth.currentUser.updatePassword(user.password).then(() => {
          this.navCtrl.setRoot(HomePage);
          loading.dismiss()
          this.toast.create({
            message: "เปลี่ยนรหัสผ่านสำเร็จ!",
            duration: 4000,
            cssClass: "success"
          }).present()
        }, (err) => {
          switch(err.message){
            case 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.' : 
                  this.toast.create({
                    message: "กรุณาเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
                    duration: 4000,
                    cssClass: "error"
                  }).present()
                  loading.dismiss()
                  break
            default:
                  console.log(err.message)
                  this.toast.create({
                    message: err,
                    duration: 4000,
                    cssClass: "error"
                  }).present()
                  loading.dismiss()
          }
        })
      })
    }
  }

}
