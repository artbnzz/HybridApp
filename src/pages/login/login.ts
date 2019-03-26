import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { SigninPage } from '../../pages/signin/signin';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading:any;
  reauth:string;
  reauthalert:string;
  changepassword:boolean = false;
  user = {} as User;
  userdata : Observable<any>
  constructor(private splashscreen: SplashScreen,private firedb: AngularFireDatabase,public loadingCtrl: LoadingController,private fireAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.reauth = navParams.get('item');
    if(this.reauth == 'Reauth'){
      this.changepassword = true;
    }else{
      this.changepassword = false;
    }
    if(this.changepassword == true){
      this.fireAuth.authState.subscribe(res => {
        if (res && res.uid) {
          this.userdata = this.firedb.object(`User/${res.uid}`).valueChanges();
          this.userdata.subscribe(res => {
            this.user.email = res.email;
          })
        }
      });
    }
  }
  ionViewDidEnter() {
    this.splashscreen.hide();
  }
  async login(user: User){
    try{
      if(user.email==null || user.password==null && this.changepassword == false){
        let loading = this.loadingCtrl.create({
          content: 'โปรดรอสักครู่...'
        });
        await loading.present();
        this.toast.create({
          message: "กรุณาระบุข้อมูลให้ครบ",
          duration: 4000,
          cssClass: "error"
        }).present();
        loading.dismiss();
      }else{
        let loading = this.loadingCtrl.create({
          content: 'โปรดรอสักครู่...'
        });
        await loading.present();
        this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then((info) =>{
          if(info){
            if(this.changepassword == false){
              this.navCtrl.setRoot(HomePage);
              this.toast.create({
                message: "ลงชื่อเข้าใช้สำเร็จ!",
                duration: 4000,
                cssClass: "success"
              }).present();
              loading.dismiss();
            }
            else{
              this.navCtrl.push(ChangepasswordPage).then(() => {
                const startIndex = this.navCtrl.getActive().index - 1;
                this.navCtrl.remove(startIndex, 1);
              });
              this.toast.create({
                message: "ยืนยันตัวตนถูกต้อง!",
                duration: 4000,
                cssClass: "success"
              }).present();
              loading.dismiss();
            }
          }
        })
        .catch(err =>{
          switch(err.message){
            case 'The email address is badly formatted.' :
                  this.toast.create({
                    message: "คุณป้อนอีเมล์ไม่ถูกต้อง",
                    duration: 4000,
                    cssClass: "error"
                  }).present();
                  loading.dismiss();
                  break;
            case 'There is no user record corresponding to this identifier. The user may have been deleted.' : 
                  this.toast.create({
                    message: "อีเมล์หรือรหัสผ่านไม่ถูกต้อง",
                    duration: 4000,
                    cssClass: "error"
                  }).present();
                  loading.dismiss();
                  break;
            case 'The password is invalid or the user does not have a password.' : 
                  this.toast.create({
                    message: "อีเมล์หรือรหัสผ่านไม่ถูกต้อง",
                    duration: 4000,
                    cssClass: "error"
                  }).present();
                  loading.dismiss();
                  break;
            case 'Too many unsuccessful login attempts.  Please include reCaptcha verification or try again later' : 
                  this.toast.create({
                    message: "เข้าสู่ระบบที่ผิดพลาดหลายครั้ง, โปรดลองอีกครั้งในภายหลัง",
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
          }
        })
      }
    }catch(err){
      let loading = this.loadingCtrl.create({
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

  register(){
    this.navCtrl.push(SigninPage);
  }

}
