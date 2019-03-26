import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;


@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  isenabled:boolean=true;
  map:any;
  position1:any = "กำลังระบุตำแหน่ง";
  position2:any = "กำลังระบุตำแหน่ง";
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform, private geolocation: Geolocation, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      var marker=null;
      let loading = this.loadingCtrl.create({
        content: 'โปรดรอสักครู่...'
      });
      loading.present().then(() => {
        this.geolocation.getCurrentPosition({ maximumAge: 5000,enableHighAccuracy: true }).then((resp) => {
          var map;
          var mapProp = {
            center: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          map = new google.maps.Map(document.getElementById('map'), mapProp);
  
          let watch = this.geolocation.watchPosition({ maximumAge: 5000,enableHighAccuracy: true });
          watch.subscribe((data) => {
  
            this.position1 = data.coords.latitude;
            this.position2 = data.coords.longitude;
  
            var pos = {
              lat: this.position1,
              lng: this.position2,
            };
  
            if(marker==null){
              marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(this.position1, this.position2),
                });
                let content = "<p>ตำแหน่งของคุณในตอนนี้</p>";
                let infoWindow = new google.maps.InfoWindow({
                content: content
                });
                google.maps.event.addListener(marker, 'click', () => {
                infoWindow.open(this.map, marker);
                });
                marker.setMap(map);
            }else{
                marker.setPosition(pos);
            }
  
            var btnLocation = document.getElementById("btn-location");
            btnLocation.addEventListener('click', function() {
              goToMyLocation();
            });
            function goToMyLocation() {
              marker.map.setCenter(pos);
            }
            loading.dismiss();
          });
        });
      })
    });
  }
}