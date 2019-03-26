import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'page-video-capture',
  templateUrl: 'video-capture.html',
})
export class VideoCapturePage {

  public vdoQuality:any;
  public alwaysrecord:any;
  public duration:any;
  
  constructor(public navCtrl: NavController, private mediaCapture: MediaCapture, private camera: Camera,private streamingMedia: StreamingMedia) {}

  captureVideo() {
    let options: CaptureVideoOptions = {
      limit: this.alwaysrecord,
      duration: this.duration,
      quality: this.vdoQuality
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
    },(err: CaptureError) => console.error(err));
  }
  getVideo(){ 
    const options: CameraOptions = {
      quality: 100,//กำหนดคุณภาพวีดีโอ
      destinationType: this.camera.DestinationType.FILE_URI,//ประเภทการ Return ค่า FILE_URI
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,//สั่งเปิดคลังภาพ
      mediaType: this.camera.MediaType.VIDEO //ประเภทสื่อเป็นแบบวีดีโอ
    }
    this.camera.getPicture(options).then((videoURI) => {//ดึงการตั้งค่าจาก CameraOptions หลังจากนั้นนำ CameraOptions ไปใช้เมื่อดึงข้อมูลวีดีโอมาแล้ว
      let options: StreamingVideoOptions = {
        successCallback: () => { console.log('Video played') },
        errorCallback: (e) => { console.log('Error streaming') },
        orientation: 'portrait',
        shouldAutoClose: true,
        controls: false
      };
      this.streamingMedia.playVideo(videoURI, options);
     });
  }
}