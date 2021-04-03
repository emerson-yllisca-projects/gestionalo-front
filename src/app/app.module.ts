import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
    NotpagefoundComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
