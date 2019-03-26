import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController, AlertController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { Network } from '@ionic-native/network/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { CameraPage } from '../pages/camera/camera';
import { VideoCapturePage } from '../pages/video-capture/video-capture';
import { EditdataPage } from '../pages/editdata/editdata';
import { QrcodePage } from '../pages/qrcode/qrcode';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  profileData : Observable<any>
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  activePage: any;
  version: any;

  public pages: PageInterface[] = [
    { title: 'ข่าวสาร', component: HomePage, icon: 'paper' },
    { title: 'แผนที่', component: MapsPage, icon: 'map' },
    { title: 'กล้องถ่ายรูป', component: CameraPage, icon: 'camera' },
    { title: 'ถ่ายวีดีโอ', component: VideoCapturePage, icon: 'videocam' },
    { title: 'สแกน QRcode', component: QrcodePage, icon: 'barcode'}
  ]

  constructor(private appVersion: AppVersion,private firedb: AngularFireDatabase,private network: Network,private alertCtrl: AlertController,private fireAuth: AngularFireAuth,private toast: ToastController, public loadingCtrl: LoadingController, public platform: Platform, public statusBar: StatusBar) {
    this.initializeApp();
    this.appVersion.getVersionNumber().then((version) =>{
      this.version = version;
    });
      
  }
  async initializeApp() {
    //เมื่อไม่มี Internet ให้ Alert แล้วออกจากแอป
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      let alert = this.alertCtrl.create({
        title: 'เกิดข้อผิดพลาด',
        subTitle: 'กรุณาเชื่อมต่ออินเทอร์เน็ต เพื่อใช้งานแอปพลิเคชั่น',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: 'ตกลง',
            handler: () => {
              this.platform.exitApp();
            }
          }
        ]
      });
      alert.present();
      disconnectSubscription.unsubscribe();
    })
    //เช็คสถานะว่าเข้าสู่ระบบไว้แล้วหรือไม่
    await this.fireAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.statusBar.styleDefault();
          this.rootPage = HomePage;
          this.profileData = this.firedb.object(`User/${user.uid}`).valueChanges();
        } else {
          this.statusBar.styleDefault();
          this.rootPage = LoginPage;
        }
      },
      () => {
        this.statusBar.styleDefault();
        this.rootPage = LoginPage;
      }
    );
  }
  //สั่งเปิดหน้า
  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }
  //ตรวจสอบหน้า เพื่อ Active สี ใน SideMenu
  isActive(page: PageInterface) {
    if (this.nav.getActive() && this.nav.getActive().instance instanceof page.component) {
      return 'active';
    }
    return false;
  }

  //เปิดหน้าสมัครสมาชิก
  signin(){
    this.nav.push(SigninPage);
  }
  //แก้ไขข้อมูล
  editdata(){
    this.nav.push(EditdataPage);
  }
  //เปลี่ยนรหัสผ่าน
  changepassword(){
    this.nav.push(LoginPage,{item:'Reauth'})
  }
  //ลงชื่อออกจาระบบ
  signout(){
    let loading = this.loadingCtrl.create({
      content: 'โปรดรอสักครู่...'
    });
    loading.present().then(() => {
      this.fireAuth.auth.signOut().then(() => {
        this.toast.create({
          message: "ลงชื่อออกสำเร็จ!",
          duration: 4000,
          cssClass: "success"
        }).present();
        loading.dismiss();
      });
    });
  }
}