import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicPageModule } from '../../../../../..';

import { MyImg } from './my-img';

@NgModule({
  declarations: [
    MyImg,
  ],
  exports: [
    MyImg
  ],
  imports: [
    IonicPageModule.forChild(MyImg)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyImgModule {}
