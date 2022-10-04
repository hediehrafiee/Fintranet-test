import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './componnets/form/form.component';
import { UploadImageComponent } from './componnets/upload-image/upload-image.component';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { FormErrorPipe } from './pipes.ts/form-error.pipe';

@NgModule({
  declarations: [AppComponent, UploadImageComponent, FormComponent, FormErrorPipe],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    StepsModule,
    ToastModule,
    CardModule,
    ButtonModule,
    FileUploadModule,
    ProgressBarModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    DividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
