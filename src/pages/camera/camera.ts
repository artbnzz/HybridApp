import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  public ImageSize:any;
  public saveimage:any;
  public ImageQuality:any;
  myphoto:any;
  width:any;
  height:any;
  savetoAlbum:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
  }
  takePhoto(){
    //กำหนดขนาดภาพ
    switch(this.ImageSize){
      case "1": this.width="4032";this.height="3024";break;
      case "2": this.width="2880";this.height="2160";break;
      case "3": this.width="4032";this.height="2268";break;
      case "4": this.width="2560";this.height="1440";break;
      case "5": this.width="4032";this.height="1960";break;
      case "6": this.width="3024";this.height="3024";break;
      case "7": this.width="2160";this.height="2160";break;
    }
    //กำหนดค่ากล้องถ่ายรูป
    const options: CameraOptions = {
      targetHeight: this.height,//ความสูงของภาพ
      targetWidth: this.width,//ความกว้างของภาพ
      quality: this.ImageQuality,//คุณภาพของภาพถ่าย
      saveToPhotoAlbum: this.saveimage,//บันทึกภาพลงเครื่องหรือไม่
      destinationType: this.camera.DestinationType.DATA_URL,//ประเภทการ Return ค่า DATA_URL return เป็น Image base64
      encodingType: this.camera.EncodingType.JPEG,//ประเภทไฟล์ของรูป PNG,JPEG
      mediaType: this.camera.MediaType.PICTURE,//บันทึกเป็นรูปภาพ
      correctOrientation: true,//หมุนภาพให้ถูกต้อง
    }
    
    this.camera.getPicture(options).then((imageData) => {//ดึงการตั้งค่าจาก CameraOptions หลังจากนั้นนำ CameraOptions ไปใช้เมื่อดึงข้อมูลภาพมาแล้ว
     this.myphoto = 'data:image/jpeg;base64,' + imageData;//เก็บข้อมูลรูปภาพไว้ใน myphoto
    }, (err) => {//เมื่อเกิดข้อผิดพลาด
      console.log("เกิดข้อผิดพลาดไม่สามารถเปิดรูปที่ถ่ายมาได้")//แสดงข้อความใน Console
    });
  }
  getPictures(){ 
    const options: CameraOptions = {
      quality: 100,//กำหนดคุณภาพของภาพที่เลือกมาแสดง
      destinationType: this.camera.DestinationType.DATA_URL,//ประเภทการ Return ค่า DATA_URL return เป็น Image base64
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,//สั่งเปิดคลังภาพ
      correctOrientation: true//หมุนภาพให้ถูกต้อง
    }
    this.camera.getPicture(options).then((imageData) => {//ดึงการตั้งค่าจาก CameraOptions หลังจากนั้นนำ CameraOptions ไปใช้เมื่อดึงข้อมูลภาพมาแล้ว
      this.myphoto = 'data:image/jpeg;base64,' + imageData;//เก็บข้อมูลรูปภาพไว้ใน myphoto
     }, (err) => {//เมื่อเกิดข้อผิดพลาด
      console.log("เกิดข้อผิดพลาดไม่สามารถเรียกรูปจากอัลบั้มได้")//แสดงข้อความใน Console
     });
  }
}
