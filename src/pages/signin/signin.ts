import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user = {} as User;
  isenabled:boolean=true;
  constructor(public loadingCtrl: LoadingController, private fireAuth: AngularFireAuth,private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private firedb: AngularFireDatabase) {
  }
  async register(user: User){
    try{
      if(user.email==null || user.password==null || user.confirmpassword==null || user.firstname==null || user.lastname==null || user.tel==null){
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
      }else if(user.confirmpassword != user.password){
        let loading = this.loadingCtrl.create({
          content: 'โปรดรอสักครู่...'
        });
        loading.present();
        this.toast.create({
          message: "ยืนยันรหัสผ่านไม่ตรงกัน",
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
        let loading = await this.loadingCtrl.create({
          content: 'โปรดรอสักครู่...'
        });
        await loading.present();
        this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
          .then(res => {
            this.firedb.object(`User/${res.user.uid}`).set({ 
              email: user.email,
              firstname: user.firstname,
              lastname: user.lastname,
              tel: user.tel
            });
            this.fireAuth.auth.signOut();
            loading.dismiss();
            this.toast.create({
              message: "สมัครสมาชิกเรียบร้อย",
              duration: 4000,
              cssClass: "success"
            }).present();
          })
          .catch(err => {
            switch(err.message){
              case 'The email address is badly formatted.' :
                    this.toast.create({
                      message: "คุณป้อนอีเมล์ไม่ถูกต้อง",
                      duration: 4000,
                      cssClass: "error"
                    }).present();
                    loading.dismiss();
                    break;
              case 'Password should be at least 6 characters' :
                    this.toast.create({
                      message: "รหัสผ่านต้องมีความยาว 6 ตัวอักษรขึ้นไป",
                      duration: 4000,
                      cssClass: "error"
                    }).present();
                    loading.dismiss();
                    break;
              case 'The email address is already in use by another account.' : 
                    this.toast.create({
                      message: "อีเมล์นี้ถูกใช้งานไปแล้ว",
                      duration: 4000,
                      cssClass: "error"
                    }).present();
                    loading.dismiss();
                    break;
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
    }catch(err){
      let loading = await this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      });
      loading.present();
      this.toast.create({
        message: err,
        duration: 4000,
        cssClass: "error"
      }).present();
      loading.dismiss();
    }
  }
  //ตรวจสอบรับค่าตัวเลข 0 - 9 เท่านั้น
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
