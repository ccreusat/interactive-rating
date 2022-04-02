import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlockTextComponent } from './block-text/block-text.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { IconStarComponent } from './icon-star/icon-star.component';
import { IllustrationComponentComponent } from './illustration-component/illustration-component.component';
import { RatingComponentComponent } from './rating-component/rating-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockTextComponent,
    CardContainerComponent,
    IconStarComponent,
    IllustrationComponentComponent,
    RatingComponentComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
