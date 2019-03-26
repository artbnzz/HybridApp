import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppVersion } from '@ionic-native/app-version/ngx'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera} from '@ionic-native/camera/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { Network } from '@ionic-native/network/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_INFO } from './firebase.info';
import { NgxQRCodeModule } from 'ngx-qrcode2'
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { CameraPage } from '../pages/camera/camera';
import { VideoCapturePage } from '../pages/video-capture/video-capture';
import { ReadnewsPage } from '../pages/readnews/readnews';
import { EditdataPage } from '../pages/editdata/editdata';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { QrcodePage } from '../pages/qrcode/qrcode';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SigninPage,
    MapsPage,
    CameraPage,
    VideoCapturePage,
    ReadnewsPage,
    EditdataPage,
    ChangepasswordPage,
    QrcodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASE_INFO),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SigninPage,
    MapsPage,
    CameraPage,
    VideoCapturePage,
    ReadnewsPage,
    EditdataPage,
    ChangepasswordPage,
    QrcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    MediaCapture,
    Media,
    File,
    StreamingMedia,
    Network,
    AppVersion,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
