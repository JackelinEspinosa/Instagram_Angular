import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { PostComponent } from './post/post.component';
import { PersonalInformationService } from './services/personal-information.service';
import { NetworkService } from './services/network.service';
import { SharedModule } from './shared/shared.module';
import { ImagePostComponent } from './image-post/image-post.component';
import { FormsModule } from '@angular/forms'; 
import { ReelsComponent } from './reels/reels.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    SearchComponent,
    ExploreComponent,
    MessagesComponent,
    NotificationsComponent,
    NewComponent,
    HomeComponent,
    VideoComponent,
    PostComponent,
    ImagePostComponent,
    ReelsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule 
  ],
  providers: [PersonalInformationService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }

