import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { UiComponent } from './ui/ui.component';
import { UiInfobarBottomComponent } from './ui/ui-infobar-bottom/ui-infobar-bottom.component';
import { UiInfobarRightComponent } from './ui/ui-infobar-right/ui-infobar-right.component';
import { UiInfobarLeftComponent } from './ui/ui-infobar-left/ui-infobar-left.component';
import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarRightComponent,
    UiInfobarLeftComponent,
    UiInfobarTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
