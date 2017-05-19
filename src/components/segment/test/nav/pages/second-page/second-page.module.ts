import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from '../../../../../..';
import { SecondPage } from './second-page';
@NgModule({
  imports: [
    IonicPageModule.forChild(SecondPage)
  ],
  declarations: [
    SecondPage
  ],
  entryComponents: [
    SecondPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecondPageModule { }
