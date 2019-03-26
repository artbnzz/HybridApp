import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoCapturePage } from './video-capture';

@NgModule({
  declarations: [
    VideoCapturePage,
  ],
  imports: [
    IonicPageModule.forChild(VideoCapturePage),
  ],
})
export class VideoCapturePageModule {}
